import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div >
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Javascript</th>
              <th scope="col">Node Js</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Javascript is a programming language that is used for writing scripts on the website. </td>
              <td>NodeJS is a Javascript runtime environment.</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Javascript is used in frontend development.</td>
              <td>Nodejs is used in server-side development.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blog;
