import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="p-3 shadow-lg m-5">
        <h1>Javascript vs Nodejs</h1>
        <p>Javascript is a programming language that is used for writing scripts on the website.NodeJS is a Javascript runtime environment.Nodejs is used in server-side development.Javascript is used in frontend development.</p>
      </div>
      <div className="p-3 shadow-lg m-5">
        <h1>What is the purpose of jwt and how does it work</h1>
        <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</p>
      </div>
      <div className="p-3 shadow-lg m-5">
        <h1> Differences between sql and nosql databases.</h1>
        <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
      </div>
    </div>
  );
};

export default Blog;
