import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const token = JSON.parse(localStorage.getItem("aicteuser"))
  ? JSON.parse(localStorage.getItem("aicteuser")).token
  : "";

const graphURL = process.env.NODE_ENV !="development" ? "http://localhost:4000/graphql" : "https://brrok3hux1.execute-api.ap-south-1.amazonaws.com/dev/graphql";
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
