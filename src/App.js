import React from "react";
import AppBar from "./components/AppBar/Appbar";
import BoardBar from "./components/BoardBar/BoardBar";
import BoardContent from "./components/BoardContent/BoardContent";

const App = () => {
  return (
    <div className="kanban">
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
  );
};

export default App;
