import { NextRequest, NextResponse } from "next/server";

/**
 * HTTP Basic Auth for /admin (any username, password = ADMIN_PASSWORD).
 * Without ADMIN_PASSWORD the panel stays locked. A successful login also
 * sets bs_owner so the owner's own visits aren't logged by /api/track.
 */
function passwordFrom(header: string | null) {
  if (!header?.startsWith("Basic ")) return null;
  try {
    const bytes = Uint8Array.from(atob(header.slice(6)), (c) => c.charCodeAt(0));
    const decoded = new TextDecoder().decode(bytes);
    return decoded.slice(decoded.indexOf(":") + 1);
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const expected = process.env.ADMIN_PASSWORD;
  if (expected && passwordFrom(req.headers.get("authorization")) === expected) {
    const res = NextResponse.next();
    res.cookies.set("bs_owner", "1", {
      maxAge: 60 * 60 * 24 * 365,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
    return res;
  }

  return new NextResponse("Yetkisiz", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="admin", charset="UTF-8"' },
  });
}

export const config = { matcher: ["/admin/:path*"] };
