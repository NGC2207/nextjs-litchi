import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return NextResponse.redirect("/login");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/account"],
};
