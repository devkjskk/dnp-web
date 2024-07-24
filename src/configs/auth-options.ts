import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

import { NextAuthSession } from "@/types/next-auth";
import { httpClientUser } from "@/utils/http-client-user";

const login = (email: string, password: string) => {
  return httpClientUser.post("/auth/login", {
    email,
    password,
  });
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (typeof credentials !== "undefined") {
          try {
            const { data }: any = await login(
              credentials.email,
              credentials.password
            );

            return {
              ...data.user,
              accessToken: data.accessToken,
            };
          } catch (error) {
            if (axios.isAxiosError(error)) {
              const { response } = error;
              throw new Error(response?.data.message);
            }

            throw error;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }

      return token;
    },

    session({ session, token }) {
      if (token) {
        session.user = token.user as NextAuthSession;
      }

      return session;
    },
  },
};
