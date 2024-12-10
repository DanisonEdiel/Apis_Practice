import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_GRAPH_QL_URL, // URL del backend GraphQL
  cache: new InMemoryCache(),
});

export default apolloClient;
