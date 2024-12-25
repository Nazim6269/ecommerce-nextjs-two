// import { connectMongo } from "@/lib/connectMongo";
// import client from "@/lib/db";
// import { findUserFromDB } from "@/lib/dbQuery";
// import { UserType } from "@/lib/type";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import Google from "next-auth/providers/google";

// export const authoptions = {
//   adapter: MongoDBAdapter(client),

//   providers: [
//     Credentials({
//       name: "Credentials",

//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "test@gmail.com",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//           placeholder: "********",
//         },
//       },

//       async authorize(credentials) {
//         try {
//           await connectMongo();
//           if (!credentials?.password || !credentials?.email) {
//             return null;
//           }

//           console.log(credentials, "credentials");

//           const user = await findUserFromDB(credentials);

//           if (!user) {
//             return null;
//           }

//           const isMatch = user.password === credentials.password;

//           if (!isMatch) {
//             return null;
//           }

//           return user;
//         } catch (error) {
//           return null;
//         }
//       },
//     }),
//     Google({
//       clientId: process.env.GOOGLE_ID!,
//       clientSecret: process.env.GOOGLE_SECRET!,
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//   ],
// };
