import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const Link = ({ active, children, onClick }) => (
  <Button
    variant="contained"
    disableElevation
    onClick={onClick}
    disabled={active}

    style={{
      marginLeft: "4px",
      borderRadius:'30px' 
    }}
  >
    {children}
  </Button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
