import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware() {}, {
  pages: {
    signIn: "login",
    signOut: "logout",
  },
});

export const config = {
  matcher: ["/tickets/:path*", "/my-profile/:path*"],
};
