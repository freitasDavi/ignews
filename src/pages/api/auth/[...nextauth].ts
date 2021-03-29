import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure on or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // add more providers here
  ],
});