import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button, Flex, Heading, Text, Image } from "rebass";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-spinner";
import { deleteSong, getSongsFetch } from "../store/slices/songListSlice";

const SongDetail = () => {
  const { id } = useParams();

  const { songs, isLoading } = useSelector((state) => state.songs.songs);

  const song = songs ? songs.filter((song) => song._id == id)[0] : null;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteSong(id));
    navigate("/");
  };
  useEffect(() => {
    if (!song) {
      dispatch(getSongsFetch());
    }
  }, [dispatch, song]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!song) {
    return null;
  }

  const imageUrl = song.image.url;
  const backgroundImageUrl = `url(${imageUrl})`;

  const gradientBackground = `
  linear-gradient(
    to bottom, 
    rgba(0, 0, 0, 0.2), 
    rgba(0, 0, 0, 1)
  ), 
  ${backgroundImageUrl}`;

  const styles = css`
    background: ${gradientBackground};
      background-size: 100% auto;
      background-position: center;
      width: 100%;
      display: flex;
      color: #fff;
      justify-content: center;
      align-items: flex-start;
      position: relative;
      margin-top: 120px;
    @media (max-width: 768px) {
      margin-top: 108px;
      height: 90vh;
      background: none;
      color: black;
      
    }
  `;

  const innerStyle = css`
    margin-top: 20px;
    padding: 20px;
    opacity: 1;
    color: #fff;

    @media (max-width: 768px) {
      color: black;
      display: flex;
      flex-direction: column;
    }
  `;

  const contentStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    gap: 20px;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  `;
  const textcontent = css`
    width: 400px;
    margin-bottom: 10px;
    font-family: sans-serif;
    font-style: italic;
    @media (max-width: 768px) {
      color: black;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `;
  const deleteButton = css`
    margin-left: 30px;
    font-weight: bold;
    color: #ff6900;
    background: transparent;
    border: 2px solid #ff6900;
    border-radius: 15px;
    @media (max-width: 768px) {

      margin-left: 0px;
      margin-top: 20px;
    }
  `;
  const editButton = css`
    fontweight: bold;
    color: #0693e3;
    margin-left: 350px;
    margin-top: 30px;
    background: transparent;
    border: 2px solid #0693e3;
    border-radius: 15px;
    @media (max-width: 768px) {
      width: 200px;

      margin-left: 10px;
      margin-top: 20px;
    }
  `;
  const imageStyle = css`
    border-radius: 50%;
    height: 200px;
    width: 200px;
    @media (max-width: 768px) {
      margin-top: 0px;
    }
  `;
  const buttonContainer = css`
    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
      gap: 10px;
      margin-bottom:20px;
      
    }
  `;
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {song && (
            <Box css={styles}>
              <Box css={innerStyle}>
                <Flex flex={[1, 1]} justifyContent={"space-between"}>
                  <Box css={contentStyle}>
                    <Image css={imageStyle} src={song.image.url} />
                    <Box css={textcontent}>
                      <Heading
                        css={css`
                          font-size: 24px;
                          margin-bottom: 10px;
                        `}
                      >
                        Title: {song.title}
                      </Heading>
                      <Text
                        css={css`
                          font-size: 16px;
                          margin-bottom: 10px;
                        `}
                      >
                        Artist: {song.artist}
                      </Text>
                      <Text
                        css={css`
                          font-size: 16px;
                          margin-bottom: 10px;
                        `}
                      >
                        Description:
                        <br />
                        {song.description}
                      </Text>
                      <Text
                        css={css`
                          font-size: 16px;
                          margin-bottom: 10px;
                        `}
                      >
                        Category: {song.category}
                      </Text>
                      <Box
                        css={css`
                          font-size: 16px;
                          margin-bottom: 10px;
                        `}
                      >
                        Duration: {song.duration}
                      </Box>
                    </Box>
                  </Box>
                </Flex>
                <Box css={buttonContainer}>
                  <Link to={`/${id}/edit`}>
                    <Button css={editButton}>Edit</Button>
                  </Link>
                  <Button onClick={() => handleDelete()} css={deleteButton}>
                    Delete
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default SongDetail;

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { Box, Button, Flex, Heading, Text } from "rebass";
// import { css } from "@emotion/react";
// import { useDispatch, useSelector } from "react-redux";
// import Spinner from "react-spinner";
// import { deleteSong, getSongsFetch } from "../store/slices/songListSlice";

// const SongDetail = () => {
//   const { id } = useParams();

//   const { songs, isLoading } = useSelector((state) => state.songs.songs);

//   const song = songs?songs.filter((song) => song._id == id)[0]:null;

//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const handleDelete = () => {
//     dispatch(deleteSong(id));
//     navigate("/");
//   };
//    useEffect(() => {
//      if (!song) {
//        dispatch(getSongsFetch());
//      }
//    }, [dispatch, song]);

//    if (isLoading) {
//      return <Spinner />;
//    }

//    if (!song) {
//      return null;
//    }

// const imageUrl = song.image.url;
// const backgroundImageUrl = `url(${imageUrl})`;

// const gradientBackground = `
//   linear-gradient(
//     to bottom,
//     rgba(0, 0, 0, 0.2),
//     rgba(0, 0, 0, 1)
//   ),
//   ${backgroundImageUrl}`;

// const styles = css`
//   background: ${gradientBackground};
//   background-size: 100% auto;
//   background-position: center;
//   width: 100%;
//   display: flex;
//   color: #fff;
//   justify-content: center;
//   align-items: flex-start;
//   position: relative;
//   margin-top: 120px;
// `;

//   const innerStyle = css`
//     margin-top:20px;
//     height: 200px;
//     padding: 20px;
//     opacity: 1;
//     color: #fff;
//   `;

//   const contentStyle = css`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     color: #fff;
//     gap: 20px;
//   `;

//   return (
//     <>
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <>
//           {song && (
//             <Box css={styles}>
//               <Box css={innerStyle}>
//                 <Flex flex={[1, 1]} justifyContent={"space-between"}>
//                   <Box css={contentStyle}>
//                     <img
//                       style={{
//                         borderRadius: "50%",
//                         height: "200px",
//                         width: "200px",
//                       }}
//                       src={song.image.url}
//                       width={50}
//                     />
//                     <Box
//                       css={css`
//                         width: 400px;
//                         color: #ff;
//                         margin-bottom: 10px;
//                         font-family: sans-serif;
//                         font-style: italic;
//                       `}
//                     >
//                       <Heading
//                         css={css`
//                           font-size: 24px;
//                           margin-bottom: 10px;
//                         `}
//                       >
//                         Title: {song.title}
//                       </Heading>
//                       <Text
//                         css={css`
//                           font-size: 16px;
//                           margin-bottom: 10px;
//                         `}
//                       >
//                         Artist: {song.artist}
//                       </Text>
//                       <Text
//                         css={css`
//                           font-size: 16px;
//                           margin-bottom: 10px;
//                         `}
//                       >
//                         Description:
//                         <br />
//                         {song.description}
//                       </Text>
//                       <Text
//                         css={css`
//                           font-size: 16px;
//                           margin-bottom: 10px;
//                         `}
//                       >
//                         Category: {song.category}
//                       </Text>
//                       <Box
//                         css={css`
//                           font-size: 16px;
//                           margin-bottom: 10px;
//                         `}
//                       >
//                         Duration: {song.duration}
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Flex>
//                 <Link to={`/${id}/edit`}>
//                   <Button
//                     style={{
//                       fontWeight: "bold",
//                       color: "#0693e3",
//                       marginLeft: "350px",
//                       marginTop: "30px",
//                       background: "transparent",
//                       border: "2px solid #0693e3",
//                       borderRadius: "15px",
//                     }}
//                   >
//                     Edit
//                   </Button>
//                 </Link>
//                 <Button
//                   onClick={() => handleDelete()}
//                   style={{
//                     marginLeft: "30px",
//                     fontWeight: "bold",
//                     color: "#ff6900",
//                     background: "transparent",
//                     border: "2px solid #ff6900",
//                     borderRadius: "15px",
//                   }}
//                 >
//                   Delete
//                 </Button>
//               </Box>
//             </Box>
//           )}
//         </>
//       )}
//     </>
//   );
// };

// export default SongDetail;
