/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Box, Button, Flex, Text } from "rebass";
import { Input } from "@rebass/forms";
import { Link } from "react-router-dom";
import { FaSearch, FaMicrophone,  FaBars, FaTimes } from "react-icons/fa";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import Sidebar from "./sidebar";

const headerStyle = css`
  background-color: #fff;
  color: #000;
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
   
    padding: 10px;
  }
`;

const textStyle = css`
color:black;
text-decoration:none;
`
const logoStyle = css`
  flex: 1;
   @media (max-width: 768px) {
    margin-right:10px;
  }

`;

const searchBarStyle = css`
  flex: 2;
  display: flex;
  border-radius: 30px;
  background-color: #fcfafa;
  color: #000;
  align-items: center;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: 2;
    width: 30px;
    
  }
`;

const inputStyle = css`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
`;

const iconStyle = css`
  color: #ccc;
  margin: 0 10px;
  cursor: pointer;
 
`;

const centerButtonStyle = css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const buttonTextStyle = css`
  color: blue;
  text-decoration: none;
  border: 0.5px solid #fcb900;
  background: transparent;
  padding: 10px 20px;
  border-radius: 20px;
  letter-spacing: 2px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const sidebarButtonStyle = css`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const sidebar = css`
@media (min-width:768px){
  display:none;
}
`
const Header = ({ handleSearch }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Flex css={headerStyle}>
        <Box css={logoStyle}>
          <Text fontSize="24px" fontWeight="bold">
            <Link css={textStyle} to="/">
              <Logo width="100px" height="80px" />
            </Link>
          </Text>
        </Box>
        <Box css={searchBarStyle}>
          <FaSearch css={iconStyle} size={20} />
          <Input
            type="text"
            placeholder="Search here"
            onChange={(e) => handleSearch(e.target.value)}
            sx={inputStyle}
          />
          <FaMicrophone css={iconStyle} size={20} />
        </Box>

        <Box css={centerButtonStyle}>
          <Link to={"/add"}>
            <Button css={buttonTextStyle}>CREATE</Button>
          </Link>
        </Box>

        <Box css={sidebarButtonStyle}>
          {showSidebar ? (
            <FaTimes
              css={iconStyle}
              size={20}
              onClick={toggleSidebar}
              style={{ color: "#000" }}
            />
          ) : (
            <FaBars
              css={iconStyle}
              size={20}
              onClick={toggleSidebar}
              style={{ color: "#000" }}
            />
          )}
        </Box>
      </Flex>
      <Box css={sidebar}>{showSidebar && <Sidebar />}</Box>
    </>
  );
};

export default Header;

