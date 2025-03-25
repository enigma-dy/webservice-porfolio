import React, { useState } from "react";
import { Routes, Route } from "react-router";
import MorentSwagger from "./SwaggerPage/MorentSwaggerPage";
import BeatSwagger from "./SwaggerPage/BeatSwaggerPage";
import BookSwagger from "./SwaggerPage/BookSwaggerPage";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import JobifySwagger from "./SwaggerPage/JobifySwaggerPage";

const ContentWrapper = styled.div`
  margin-left: ${(props) => (props.$isOpen ? "250px" : "80px")};
  transition: margin-left 0.3s ease;
  padding: 20px;

  @media (max-width: 768px) {
    margin-left: ${(props) => (props.$isOpen ? "200px" : "60px")};
    padding: 10px;
  }
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <ContentWrapper $isOpen={isOpen}>
        <Routes>
          <Route path="/" element={<BookSwagger />} />
          <Route path="/morent" element={<MorentSwagger />} />
          <Route path="/beat" element={<BeatSwagger />} />
          <Route path="/jobify" element={<JobifySwagger />} />
        </Routes>
      </ContentWrapper>
    </>
  );
}

export default App;
