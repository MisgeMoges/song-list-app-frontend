import React from "react";
import { Box, Text } from "rebass";
import { css } from "@emotion/react";
import SongListCard from "../components/songListCard";


const customStyle = css`
  padding: 20px;
  width: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  
`;

const headerStyle = css`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #f3f3f3; 
  text-align: center; 
  font-family: "Arial", sans-serif; 
  text-transform: uppercase; 
  letter-spacing: 1px; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width:768px){
    width:100%;
    font-size:24px;
  }
`;


const Main = ({ searchQuery }) => {
  return (
    <Box css={customStyle} >
      <Text css={headerStyle}>SAMPLE SONG LISTS I CHOOSE TO DISPLAY</Text>
      <SongListCard searchQuery={searchQuery} />
    </Box>
  );
};

export default Main;
