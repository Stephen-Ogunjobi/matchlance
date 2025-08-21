"use server";
import { auth } from "./auth";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function setUserRole(role: string) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("You must be logged in");
  }

  console.log(role);

  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { role: role },
    });

    console.log(`Successfully set user ${session.user.id} role to ${role}`);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to set user role");
  }

  // Redirect after successful database update
  if (role === "client") {
    redirect("/clients");
  } else {
    redirect("/freelancers");
  }
}

// export async function createNewJob(creatorId: string){
//   const session = await auth()
//   const role = session?.user.role
//   if(role !== "client") {
//     throw new Error("Only clients can create jobs")
//   }

//   try{
//     await prisma.jobs.create({
//       data:{

//       }
//     })
//   }
// }
