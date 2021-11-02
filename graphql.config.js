module.exports = {
  projects: {
    app: {
      schema: ["./schema.graphql"],
      // documents: ["**/*.{graphql,ts,tsx}"],
      extensions: {
        endpoints: {
          default: {
            url: "https://cms.sebasptsch.dev/api/graphql",
          },
        },
      },
    },
  },
};
