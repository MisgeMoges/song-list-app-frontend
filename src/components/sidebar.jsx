import { css } from "@emotion/react";
import React, { useState } from "react";
import { Box, Flex, Text } from "rebass";
import { Link } from "react-router-dom";
import { FaHome, FaInfo, FaSearch, FaPlus, FaMusic, FaTimes } from "react-icons/fa";
import { SiPlayerfm } from "react-icons/si";
import { BsMusicPlayer } from "react-icons/bs";
import { IconContext } from "react-icons";

const sidebarStyle = css`
  width: 250px;
  background-color: #fff;
  color: #000;
  min-height: 100vh;
  margin-top: 118px;
  box-shadow: 4px 0 6px rgba(0, 0, 0, 0.1);
  border: 3px solid #ccc;
  @media (max-width: 768px) {
    width: 100%;
    z-index: 99;
    margin-top: 105px;
    margin-left:0px;
    margin-right:-50px;
    
    
  }
`;


const sectionTitleStyle = css`
  padding: 10px;
  border-top: 1px solid #444;
  border-bottom: 1px solid #444;
  font-size: 20px;
  
`;

const sidebarItemStyle = css`
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  font-size: 18px; /* Specify a unit like px here */
  &:hover {
    color: #ff6900;
  }
  @media (max-width: 768px) {
    align-item:center;
    justify-content:center;
  }
`;

const Sidebar = ({ }) => {
  const categories = ["REGGAE", "ELECTRONIC", "ROCK"];
const [close, setClose] = useState(true)
  return (
    
    <Flex
      css={sidebarStyle}
      flexDirection="column"
      
    >
      <div>
        <Box css={sectionTitleStyle} justifyContent={"center"}>
          <Text fontWeight="bold">
            LIBRARY
            
          </Text>
        </Box>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Box css={sidebarItemStyle}>
            <IconContext.Provider
              value={{
                style: {
                  marginRight: "20px",
                  fontSize: "20px",
                  color: "#0693e3",
                },
              }}
            >
              <FaHome />
            </IconContext.Provider>
            <Text>HOME</Text>
          </Box>
        </Link>

        <Link to="/about" style={{ textDecoration: "none" }}>
          <Box css={sidebarItemStyle}>
            <IconContext.Provider
              value={{
                style: {
                  marginRight: "20px",
                  fontSize: "20px",
                  color: "#ff6900",
                },
              }}
            >
              <FaInfo />
            </IconContext.Provider>
            <Text>ABOUT</Text>
          </Box>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Box css={sidebarItemStyle}>
            <IconContext.Provider
              value={{
                style: {
                  marginRight: "20px",
                  fontSize: "20px",
                  color: "#bdc00f",
                },
              }}
            >
              <FaSearch />
            </IconContext.Provider>
            <Text>SEARCH</Text>
          </Box>
        </Link>

        <Link to="/add" style={{ textDecoration: "none" }}>
          <Box css={sidebarItemStyle}>
            <IconContext.Provider
              value={{
                style: {
                  marginRight: "20px",
                  fontSize: "20px",
                  color: "#8ed1fc",
                },
              }}
            >
              <FaPlus />
            </IconContext.Provider>
            <Text>CREATE</Text>
          </Box>
        </Link>
      </div>
      <div>
        <Box css={sectionTitleStyle}>
          <Text fontWeight="bold">PLAYLISTS</Text>
        </Box>
        {categories.map((category) => (
          <Link
            to={`/`}
            style={{ textDecoration: "none" }}
            key={category}
          >
            <Box
              css={sidebarItemStyle}
              
            >
              <IconContext.Provider
                value={{
                  style: {
                    marginRight: "20px",
                    fontSize: "20px",
                    color: "#ff6900",
                  },
                }}
              >
                {category === "REGGAE" ? <FaMusic /> : null}
                {category === "ELECTRONIC" ? <BsMusicPlayer /> : null}
                {category === "ROCK" ? <SiPlayerfm /> : null}
              </IconContext.Provider>
              <Text>{category}</Text>
            </Box>
          </Link>
        ))}
      </div>
    </Flex>
  );
};

export default Sidebar;
