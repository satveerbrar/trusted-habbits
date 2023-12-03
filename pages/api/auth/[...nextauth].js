import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectToDatabase from "@/utils/dbConnect";
connectToDatabase();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  baseUrl: process.env.NEXTAUTH_URL,
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(user_profile) {
      const { profile, user } = user_profile;
      const { given_name, family_name } = profile;
      const { id, email, image } = user;
      // Check if the user already exists in your database
      // const existingUser = await findUserByEmail(email);

      if (existingUser) {
        console.log(`Existing user signed in: ${email}`);
      } else {
        // If the user doesn't exist, create a new user in your database
        const { name } = profile;
        console.log(`New user created: ${email}`);
      }
      return true;
    },
    async redirect(urlObject) {
      const { url, baseUrl: providedBaseUrl } = urlObject;
      if (url.startsWith(providedBaseUrl)) {
        return url;
      } else {
        console.log("Redirecting to baseUrl:", providedBaseUrl);
        return providedBaseUrl;
      }
    },
  },
});
