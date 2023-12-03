import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectToDatabase from "@/utils/dbConnect";
import User from "@/models/user";

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
      const { profile } = user_profile;
      const { given_name, family_name, email, image } = profile;
      // Check if the user already exists in your database
      const existingUser = await User.findOne({ email: email });

      if (existingUser) {
        console.log(`Existing user signed in: ${email}`);
      } else {
        // If the user doesn't exist, create a new user in your database
        const userInfo = {
          firstName: given_name,
          lastName: family_name,
          username: email,
          email: email,
          image: image,
        };
        const user = new User(userInfo);
        await user.save();
        console.log(`New user created: ${email}`);
      }
      return true;
    },
    async redirect(urlObject) {
      const { baseUrl: providedBaseUrl } = urlObject;
      return providedBaseUrl;
    },
  },
});
