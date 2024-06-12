import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import bgImage from "../assets/images/bg-image.jpg"; // Import the background image

const App = () => (
  <>
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          minHeight: "60vh",
        }}
      >
        <Box
          boxShadow={1}
          style={{
            textAlign: "center",
            borderRadius: "20px",
            padding: "10px",
            color: "#555",
            background: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <h1>Todo List</h1>
          <Box p={1} />

          <AddTodo />
          <Box p={1}>
            <Footer />
          </Box>

          <Box p={1} />
          <VisibleTodoList />
        </Box>
      </Container>
    </div>
  </>
);

export default App;
