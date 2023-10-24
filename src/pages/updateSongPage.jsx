/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Box, Button } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editSong, getSongsFetch } from "../store/slices/songListSlice";
import { useNavigate } from "react-router-dom";
const errorStyle = css`
  color: red;
  padding: 10px;
  margin-bottom: 0px;
`;

const inputStyle = css`
  width: 100%;
  margin-bottom: 20px;
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
`;
const input = css`
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  padding: 15px;
  background-color: #fafafa;
  @media (max-width: 768px) {
    width: 100%;
    margin-right:auto;
    margin-left:auto;
  }
`;

const textColor = "#333";
const fontFamily = "Arial, sans-serif";

const formStyle = css`
  width: 100%;
  max-width: 600px;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0 auto;
  margin-top: 200px;
  margin-bottom: 100px;
  font-family: ${fontFamily};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    margin-top: 150px;
    width: 100%;
    padding:10px;
    margin-left: auto;
    margin-right: auto;
    
  }
`;

const labelStyle = css`
  color: ${textColor};
`;

const headerContainerStyle = css`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 20px;
  font-family: ${fontFamily};
`;

const headerStyle = css`
  font-size: 36px;
  color: #333;
  letter-spacing: 5px;
  @media (max-width: 768px) {
    font-size: 24px;
    letter-spacing: 2px;
  }
`;

const paragraphStyle = css`
  font-size: 24px;
  color: #666;
`;

const span0 = css`
  color: #b5f01f;
`;
const span1 = css`
  color: #007aff;
`;
const span2 = css`
  color: #ff6900;
`;
const span3 = css`
  color: #1fcdf0;
`;
const saveButton = css`
  width: 280px;
  background-color: #1fcdf0;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  margin-left: 100px;
  cursor: pointer;
  transition: background-color 0.3s;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;
const cancelButton = css`
  background-color: transparent;
  color: #ff6900;
  border: 1px solid #ff6900;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;
const UpdatePage = () => {
  const { id } = useParams();
  const { songs, isLoading } = useSelector((state) => state.songs.songs);
  const [songImage, setSongImage] = useState("");
  const song = songs.filter((song) => song._id === id)[0];
  const [formSubmitted, setFormSubmitted] = useState(false); // Add a state variable for form submission
  const [formError, setFormError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    id: id,
    title: song ? song.title : "",
    artist: song ? song.artist : "",
    description: song ? song.description : "",
    category: song ? song.category : "",
    duration: song ? song.duration : "",
    image: song ? song.image : "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "image" ? songImage : value,
    });
  };
  const handleCancel = () => {
    navigate("/");
  };

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSongImage(reader.result);
      };
    } else {
      setSongImage("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
setFormSubmitted(true);
if (
  !formData.title ||
  !formData.artist ||
  !formData.description ||
  !formData.category ||
  !formData.duration
  
) {
  setFormError("All fields are required.");
  return;
}
    dispatch(editSong(formData));
    dispatch(getSongsFetch());
    navigate("/");
  };

  

  return (
    <>
      <Box as="form" css={formStyle} onSubmit={handleSubmit}>
        <div css={headerContainerStyle}>
          <h2 css={headerStyle}>
            <span css={span1}>CREATE</span>{" "}
            <span css={span2}>
              A <span css={span0}>NEW</span>{" "}
            </span>
            <span css={span3}>SONG</span>
          </h2>
          <p css={paragraphStyle}>
            Fill in the details below to create a new song.
          </p>
        </div>
        <Box css={inputStyle}>
          <Label htmlFor="title" css={labelStyle}>
            Title *
          </Label>
          <Input
            css={input}
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={(e) => handleInputChange(e)}
          />
          {formSubmitted && !formData.title && (
            <div css={errorStyle}>Title is required.</div>
          )}
        </Box>
        <Box css={inputStyle}>
          <Label htmlFor="artist" css={labelStyle}>
            Artist *
          </Label>
          <Input
            css={input}
            type="text"
            name="artist"
            id="artist"
            value={formData.artist}
            onChange={(e) => handleInputChange(e)}
          />
          {formSubmitted && !formData.artist && (
            <div css={errorStyle}>Artist is required.</div>
          )}
        </Box>
        <Box css={inputStyle}>
          <Label htmlFor="description" css={labelStyle}>
            Description *
          </Label>
          <Textarea
            css={input}
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={(e) => handleInputChange(e)}
            style={{ height: "150px" }}
          />
          {formSubmitted && !formData.description && (
            <div css={errorStyle}>Description is required.</div>
          )}
        </Box>
        <Box css={inputStyle}>
          <Label htmlFor="category" css={labelStyle}>
            Category *
          </Label>
          <Input
            css={input}
            type="text"
            name="category"
            id="category"
            s
            value={formData.category}
            onChange={(e) => handleInputChange(e)}
          />
          {formSubmitted && !formData.category && (
            <div css={errorStyle}>Category is required.</div>
          )}
        </Box>
        <Box css={inputStyle}>
          <Label htmlFor="duration" css={labelStyle}>
            Duration *
          </Label>
          <Input
            css={input}
            type="text"
            name="duration"
            id="duration"
            value={formData.duration}
            onChange={(e) => handleInputChange(e)}
          />
          {formSubmitted && !formData.duration && (
            <div css={errorStyle}>Duration is required.</div>
          )}
        </Box>
        <Box css={inputStyle}>
          <Label htmlFor="image" css={labelStyle}>
            Image *
          </Label>
          <Input
            css={input}
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={(e) => handleProductImageUpload(e)}
          />
          
        </Box>

        <div style={{ display: "flex", gap: "20px" }}>
          <Button
            type="submit"
           css={saveButton}
          >
            Save
          </Button>
          <Button
            type="button"
            onClick={() => handleCancel()}
            css={cancelButton}
          >
            Cancel
          </Button>
        </div>
      </Box>
    </>
  );
};

export default UpdatePage;
