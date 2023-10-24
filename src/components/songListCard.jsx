/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Text } from "rebass";
import { GrCirclePlay } from "react-icons/gr";
import { useEffect, useState } from "react";
import { editSong, getSongsFetch } from "../store/slices/songListSlice";
import { Link } from "react-router-dom";

const cardStyles = css`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px;
  width: 100%; 
  display: flex;
  align-items: flex-start;
  background-color: #fff;
  transition: box-shadow 0.5s ease-in-out;
  transition: width 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 12px 16px rgba(142, 209, 252, 0.2);
  }

  
  @media (min-width: 768px) {
    width: 300px;
    
  }

  @media (max-width: 768px) {
    width: 350px; 
    margin: 10px; 
    margin-left:-55px;
    display: flex; 
    align-items: center; 
    justify-content: center; 
  }
`;




const imageStyle = css`
  width: 280px;
  height: 250px;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`;
const textStyles = css`
  text-decoration: none;
  font-family: "Arial", sans-serif;
  letter-spacing: 1px;
  transition: color 0.3s ease;
  text-transform: uppercase;
`;
const artistNameStyles = css`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  ${textStyles};
`;

const trackNameStyles = css`
  font-size: 16px;
  color: #555;
  margin-top: 10px;
  ${textStyles};
`;

const playButtonStyle = css`
  font-size: 30px;
  color: #ff6900;
  cursor: pointer;
  text-shadow: 10px 10px 14px rgba(0, 0, 0, 0.9);
  transition: transform 0.2s, color 0.2s;
  transform-origin: center;
  &:hover {
    transform: scale(1.2);
    color: #f00;
  }
`;

const Card = ({ artist, title, coverImage }) => {
  return (
    <Box css={cardStyles}>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <img src={coverImage} alt={`${title} Cover`} css={imageStyle} />

        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Text css={artistNameStyles}>{artist}</Text>
            <Text css={trackNameStyles}>{title}</Text>
          </Box>
          <GrCirclePlay css={playButtonStyle} />
        </Flex>
      </Flex>
    </Box>
  );
};

const SongCard = ({ searchQuery }) => {
  const songs = useSelector((state) => state.songs.songs.songs);
  const [display, setDisplay] = useState([]);
  console.log(display);
  const dispatch = useDispatch();
  const handleEditing = (song) => {
    dispatch(editSong({ ...song, title: "atmetam" }));
  };

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  useEffect(() => {
    if (searchQuery === "") {
      setDisplay(songs);
    } else {
      const lowercaseQuery = searchQuery.toLowerCase();
      const new_list = songs.filter(
        (item) =>
          item.title.toLowerCase().includes(lowercaseQuery) ||
          item.artist.toLowerCase().includes(lowercaseQuery)
      );
      setDisplay(new_list);
    }
  }, [searchQuery, songs]);
  return (
    <Flex flexWrap={"wrap"} justifyContent={"flex-start"} marginLeft={"70px"}>
      {Array.isArray(display) ? (
        display.map((song) => (
          <Link css={textStyles} to={`/${song._id}`} key={song._id}>
            <Card
              artist={song.artist}
              title={song.title}
              coverImage={song.image.url}
              handleEditing={handleEditing}
            />
          </Link>
        ))
      ) : (
        <div>No data to display</div>
      )}
    </Flex>
  );
};

export default SongCard;
