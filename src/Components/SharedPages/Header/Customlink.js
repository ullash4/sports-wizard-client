import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Customlink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link style={{ color: match ? "black" : "white" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default Customlink;