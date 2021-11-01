import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter";

export default NextAuth({
  adapter:
    process.env.NODE_ENV === "production"
      ? TypeORMLegacyAdapter(
          `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/nextauth`
        )
      : TypeORMLegacyAdapter("./db.sql"),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
