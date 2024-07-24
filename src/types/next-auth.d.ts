import NextAuth from "next-auth";

export type NextAuthSession = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthDay: Date;
  address: string;
  email: string;
  acceptedPrivacyPolicy: boolean;
  createdAt: string;
  updatedAt: string;
  accessToken: string;
};

declare module "next-auth" {
  interface Session {
    user: NextAuthSession;
  }
}
