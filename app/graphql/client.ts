import { GraphQLClient } from "graphql-request";
import { getSdk } from "./types";

const endpoint = process.env.ENDPOINT as string;

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

export const SDK = getSdk(client);
