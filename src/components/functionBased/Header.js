import React from "react";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  };
  return (
    <header style={headerStyle}>
      <h3
        style={{
          fontSize: "4rem",
          fontWeight: "600",
          lineHeight: "1em",
          color: "#cccc",
          textTransform: "lowercase",
          textAlign: "center",
        }}
      >
        Todos List
      </h3>
    </header>
  );
};

export default Header;
