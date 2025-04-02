import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './Pages/LoginPage/LoginPage';
import Header from './Pages/Header/Header';
import Overview from './Pages/Overview/Overview';
import Projects from './Pages/Projects/Projects';
import Task from './Pages/Task/Task';
import User from './Pages/User/User';

import chartIcon from '/Images/chat.png';
import closeIcon from '/Images/remove.png';
import sendMsg from '/Images/send.png';

const App = () => {
  const [showChat, setShowChat] = useState(false);
  const [showDefaultOptions, setShowDefaultOptions] = useState('0');
  const chatContainerRef = useRef(null);

  // Handle click outside to close chat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatContainerRef.current && !chatContainerRef.current.contains(event.target)) {
        setShowChat(false);
      }
    };

    if (showChat) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showChat]);

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
        </Routes>
      </div>

      {showChat && (
        <div className="chartContainer" ref={chatContainerRef}>
          <div className="chartBox">
            <div className="options" onClick={() => setShowDefaultOptions(prevState => prevState !== "1" ? "1" : "")}>
              <p>What is Your Name: ?</p>
              {showDefaultOptions === "1" && (
                <ul className="optionsList">
                  <li>Rahul</li>
                  <li>Anil</li>
                  <li>Haresh</li>
                </ul>
              )}
            </div>
            <div className="options" onClick={() => setShowDefaultOptions(prevState => prevState !== "2" ? "2" : "")}>
              <p>What is Your Name: ?</p>
              {showDefaultOptions === "2" && (
                <ul className="optionsList">
                  <li>Rahul</li>
                  <li>Anil</li>
                  <li>Haresh</li>
                </ul>
              )}
            </div>
          </div>
          <input type="text" className="chartInput" />
          <button className="chartSendBtn">
            <img src={sendMsg} alt="sendBtn" width={20} />
          </button>
        </div>
      )}

      <button className="chartBtn" onClick={(e) => { 
        e.stopPropagation(); // Prevent immediate closing when clicking the button
        setShowChat(prevState => !prevState); 
      }}>
        {showChat ? <img src={closeIcon} alt="closeIcon" className="closeIcon" /> : <img src={chartIcon} alt="chartIcon" />}
      </button>
    </div>
  );
};

export default App;
