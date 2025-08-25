"use server";
import { auth } from "./auth";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { JobData } from "./types";

// Use the same Prisma client instance as auth.ts
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function setUserRole(role: string) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("You must be logged in");
  }

  try {
    // First check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!existingUser) {
      // Let's also search by email to see if user exists with different ID
      if (session.user.email) {
        const userByEmail = await prisma.user.findUnique({
          where: { email: session.user.email },
        });
        console.log("User found by email:", userByEmail);
      }

      throw new Error("User not found in database");
    }

    console.log("Found user:", JSON.stringify(existingUser, null, 2));

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: { role: role },
    });

    console.log("Updated user:", JSON.stringify(updatedUser, null, 2));
  } catch (error) {
    console.error("Detailed error:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to set user role: ${error.message}`);
    } else {
      throw new Error(`Failed to set user role: ${String(error)}`);
    }
  }

  if (role === "client") {
    redirect("/clients");
  } else {
    redirect("/freelancers");
  }
}

export async function createNewJob(data: JobData) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("You must be logged in");
  }

  if (session.user.role !== "client") {
    throw new Error("Only clients can create jobs");
  }

  try {
    // Test database connection first
    await prisma.$connect();

    // Check if the jobs table exists by trying to count
    const tableCheck = await prisma.$queryRaw`SELECT COUNT(*) FROM jobs`;
    console.log("Table check result:", tableCheck);

    const newJob = await prisma.jobs.create({
      data: {
        title: data.title,
        description: data.description,
        budget: data.budget,
        deadline: data.deadline,
        user_id: session.user.id,
        status: "open",
        priority: "medium",
      },
    });

    console.log(`Successfully created job: ${newJob.id}`);
    return { success: true, jobId: newJob.id };
  } catch (error) {
    console.error("Detailed error creating job:", error);

    // Check if it's a Prisma validation error
    if (error instanceof Error) {
      if (error.message.includes("Unknown field")) {
        throw new Error(`Database schema error: ${error.message}`);
      }
      if (error.message.includes("Invalid value")) {
        throw new Error(`Invalid data format: ${error.message}`);
      }
      if (error.message.includes("Connection")) {
        throw new Error("Database connection failed. Please try again.");
      }
      if (
        error.message.includes("relation") &&
        error.message.includes("does not exist")
      ) {
        throw new Error(
          "Database table 'jobs' does not exist. Please run database migrations."
        );
      }
    }

    // Re-throw the original error for debugging
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
