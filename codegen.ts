import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "http://localhost:1337/graphql": {
        headers: {
          Authorization: `Bearer 95cca10904287b306412b17f71cf9d622984dd66aa7e17ca2e77604f43356e5693361788bc008c7486651e8e483a90c9376dad8f0e87c89c1b03c7a867ee19059ef0528c7cb307c0f7ccd74a7ee67c01f9f329ae043a92bb16b94a1521319822a466f42dc880868f4e9cfeb7ac5df3ae6e72b66696b600551af43395f01a4047`,
        },
      },
    },
  ],
  documents: "app/graphql/queries/**/*.gql",
  generates: {
    "app/graphql/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        scalars: {
          DateTime: "Date",
          JSON: "any",
        },
        skipTypename: false,
        namingConvention: {
          transformUnderscore: true,
          enumValues: "change-case#pascalCase",
        },
        enumsAsTypes: true,
        enumsAsConst: true,
        contextType: "app/graphql/config#StrapiContext",
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
