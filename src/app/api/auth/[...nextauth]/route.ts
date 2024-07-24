import NextAuth from "next-auth";

import { httpClientUser } from "@/utils/http-client-user";
import { authOptions } from "@/configs/auth-options";



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
