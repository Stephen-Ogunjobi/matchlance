import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import type { Session, User, Account, Profile } from "next-auth";
import type { JWT } from "next-auth/jwt";

const prisma = new PrismaClient();

const authConfig = {
  adapter: PrismaAdapter(prisma), // Re-enabled - Prisma client is working!
  session: {
    strategy: "jwt" as const, // Keep JWT for performance
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async redirect({ baseUrl }: { url: string; baseUrl: string }) {
      return baseUrl;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async signIn({
      user,
      account,
      profile,
    }: {
      user: User;
      account?: Account | null;
      profile?: Profile;
    }) {
      // Assign default role when user signs up
      if (account?.provider === "google" && !user.role) {
        user.role = "user"; // Set default role for new users
      }
      return true;
    },
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
