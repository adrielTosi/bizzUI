import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjy49fo1n1m2801clm6kln3l9/master",
  fetch,
  headers: {
    Authorization: `Bearer ${process.env.AUTH_TOKEN_MUTATION}`,
  },
})
