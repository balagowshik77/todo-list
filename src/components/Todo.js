import React from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { RiDeleteBin6Line } from "react-icons/ri";

const Todo = ({ onClick, completed, text, onClickRemove }) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      display: "block",
      textAlign: "left",
      padding: "5px 0",
      borderWidth: "0 0 1px 0",
      borderStyle: "solid",
      borderColor: "#d4d4d4",
    }}
  >
    <FormControlLabel
      style={{
        textDecoration: completed ? "line-through" : "none",
        marginRight: "50px",
      }}
      control={
        <Checkbox
          checked={completed}
          onChange={onClick}
          name="checkedB"
          color="primary"
        />
      }
      label={text}
    />
    <Button
      onClick={onClickRemove}
      style={{ position: "absolute", top: "0", right: "0" }}
    >
      <RiDeleteBin6Line style={{ fontSize: "20px", color: "red" }} />
    </Button>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
