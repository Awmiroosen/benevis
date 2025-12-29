import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export const proxy = async (req: NextRequest) => {
  const session = await auth();
  const { pathname } = req.nextUrl;

  if (!session && pathname === "/login") {
    return NextResponse.next();
  }

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (session && pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/profile/:path*", "/write/:path*", "/login"],
};
