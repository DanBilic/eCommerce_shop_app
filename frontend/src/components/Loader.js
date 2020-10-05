import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        heigt: "100px",
        margin: "auto",
        display: "block",
      }}
    >
      <span class="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
