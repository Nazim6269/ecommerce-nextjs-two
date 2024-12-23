import NextAuth from "next-auth";
import { authoptions } from "./option";
import { signIn } from "next-auth/react";

const handler = NextAuth(authoptions);

export { handler as GET, handler as POST };
