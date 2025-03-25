import React from "react";
import styled, { keyframes } from "styled-components";
import { FaBars, FaCar, FaBookReader } from "react-icons/fa";
import { LuDrum } from "react-icons/lu";
import { MdOutlineWork } from "react-icons/md";
import { useNavigate } from "react-router";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${(props) => (props.$isOpen ? "250px" : "80px")};
  background: #1e1e2d;
  color: white;
  transition: width 0.3s ease;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    width: ${(props) => (props.$isOpen ? "200px" : "60px")};
  }
`;

const MenuIcon = styled(FaBars)`
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    color: #00aaff;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px;
  cursor: pointer;
  transition: background 0.3s;
  animation: ${fadeIn} 0.5s ease;
  &:hover {
    background: #00aaff;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Icon = styled.div`
  font-size: 20px;
  width: 50px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    width: 40px;
  }
`;

const Label = styled.span`
  flex: 1;
  display: ${(props) => (props.$isOpen ? "block" : "none")};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <SidebarContainer $isOpen={isOpen}>
      <MenuIcon onClick={toggleSidebar} />
      <MenuItem onClick={() => navigate("/")}>
        {" "}
        <Icon>
          <MdOutlineWork />
        </Icon>{" "}
        <Label $isOpen={isOpen}>Jobify</Label>{" "}
      </MenuItem>

      <MenuItem onClick={() => navigate("/book")}>
        {" "}
        <Icon>
          <FaBookReader />
        </Icon>{" "}
        <Label $isOpen={isOpen}>ThrifBook</Label>{" "}
      </MenuItem>
      <MenuItem onClick={() => navigate("/beat")}>
        {" "}
        <Icon>
          <LuDrum />
        </Icon>{" "}
        <Label $isOpen={isOpen}>Beatz</Label>{" "}
      </MenuItem>
      <MenuItem onClick={() => navigate("/morent")}>
        {" "}
        <Icon>
          <FaCar />
        </Icon>{" "}
        <Label $isOpen={isOpen}>MoRent</Label>{" "}
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
