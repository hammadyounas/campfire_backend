"use strict";
// const boostrap = require("./bootstrap");

module.exports = {
  // async bootstrap() {
  //   await boostrap();
  // },

  register({ strapi }) {
  
    const extensionService = strapi.service("plugin::graphql.extension");
    extensionService.use(({ strapi }) => ({
      typeDefs: `
        type Query {
          profile(email: String!): ProfileEntityResponse
        }
      `,
      resolvers: {
        Query: {
          profile: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;

             await  strapi.plugin('email').service('email').send({
                to: 'hammadyounas813@gmail.com',
                from: 'hammadyounas813@gmail.com',
                subject: 'Hello world',
                text: 'Hello world',
              });
              const data = await strapi.services["api::profile.profile"].find({
                filters: { email: args.email },
              });

              const response = toEntityResponse(data.results[0]);

              console.log("##################", "##################");

              return response;
            }
          }
        }
      },
    }));
  },
};