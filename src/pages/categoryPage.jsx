import React, { useState, useEffect } from "react";
import { Box, Text } from "rebass";
import { css } from "@emotion/react";
import SongListCard from "../components/songListCard";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSongsFetch } from "../store/slices/songListSlice";
import Sidebar from "../components/sidebar"; 
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
`;

const Category = ({ }) => {
  const { category } = useParams(); 
  const {navigate} = useNavigate();
  const { songs, isLoading } = useSelector((state) => state.songs.songs);
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    
    if (category) {
      const filtered = songs.filter((song) => song.category === category);
      setFilteredSongs(filtered);
    } else {
      
      setFilteredSongs(songs);
    }
  }, [songs, category]);

  const onCategorySelect = (selectedCategory) => {
    
   navigate(`/`)
  };
  return (
    <Box css={customStyle}>
      <Text css={headerStyle}>SAMPLE SONG LISTS I CHOOSE TO DISPLAY</Text>
      <Sidebar onCategorySelect={onCategorySelect} />
      <SongListCard searchQuery={filteredSongs} />
    </Box>
  );
};

export default Category;
