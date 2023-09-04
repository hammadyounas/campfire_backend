module.exports = ({ env }) => ({
  //
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "localhost",
        port: 1337,
        // secure: false,
        // ignoreTLS: true,
        auth: {
          user: "hammadyounas813@gmail.com",
          pass: "InApp123+",
        },
      },
    }, 
  },
});
