import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const nextAuthOptions = (req, res) => {
  return {
    providers: [
      Providers.Credentials({
        id: "filter",
        name: "filter",
        authorize: async (credentials) => {
          const { email, fullName: name, imageUrl: image } = credentials;

          return { email, name, image };
        },
      }),
    ],

    jwt: {
      secret: "ddsd",
      encryption: false,
    },
  };
};

export default (req, res) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};
