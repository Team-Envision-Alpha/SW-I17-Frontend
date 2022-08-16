import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink } from "@apollo/client";

const token = JSON.parse(localStorage.getItem("aicteuser"))
  ? JSON.parse(localStorage.getItem("aicteuser")).token
  : "";

// const graphURL = process.env.NODE_ENV !="development" ? "http://localhost:4000/graphql" : "http://13.127.10.137/graphql";
const graphURL = "http://13.127.10.137/graphql";
const client = new ApolloClient({
  uri: graphURL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: token,
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
