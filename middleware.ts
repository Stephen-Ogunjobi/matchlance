import { auth } from "./app/_lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const session = req.auth;

  // Protect client routes
  if (pathname.startsWith("/clients")) {
    if (!session?.user?.role || session.user.role !== "client") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // Protect freelancer routes
  if (pathname.startsWith("/freelancers")) {
    if (!session?.user?.role || session.user.role !== "freelancer") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/clients/:path*", "/freelancers/:path*"],
};
