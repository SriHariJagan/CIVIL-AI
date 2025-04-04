import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Login from "./Pages/LoginPage/LoginPage";
import Header from "./Pages/Header/Header";
import Overview from "./Pages/Overview/Overview";
import Projects from "./Pages/Projects/Projects";
import Task from "./Pages/Task/Task";
import User from "./Pages/User/User";
import Chat from "./Pages/Chat/Chat";

import chartIcon from "/Images/chat.png";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToChat = () => {
    if (location.pathname !== "/chat") {
      navigate("/chat");
    }
  };

  return (
    <div>
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/users" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>

      {/* Chat Button (only show if not on /chat) */}
      {location.pathname !== "/chat" && (
        <button className="chartBtn" onClick={goToChat}>
          <img src={chartIcon} alt="chartIcon" />
        </button>
      )}
    </div>
  );
};

export default App;
