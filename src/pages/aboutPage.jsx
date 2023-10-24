import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button, Flex, Heading, Text, Image } from "rebass";
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";
import { css } from "@emotion/react";
import profile from "../assets/profile.jpeg";

const About = () => {
  const styles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;
    padding-left: 100px;
    margin-top: 150px;
  `;

  const innerStyle = css`
    margin-top: 20px;
    height: 200px;
    padding: 20px;
    opacity: 1;
    color: #000;
    flex: 1;
    @media (max-width:768px){
      margin-top:0px;
      width:100%;
    }
  `;

  const contentStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #000;
    gap: 20px;
    @media (max-width: 768px) {
      width: 100%;
      max-width: 400px;
      margin-right: 90px;
      margin-bottom: 0px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  `;

  const centerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #000;
    gap: 20px;
    @media (max-width: 768px) {
      margin-right: 70px;
    }
  `;
  const imageStyle = css`
    border-radius: 50%;
    height: 150px;
    width: 150px;
    margin-left: 80px;
    margin-top: 70px;
    @media (max-width:768px){
      display:none;
    }
  `;
  return (
    <>
      <Box css={styles}>
        <Box css={centerStyle}>
          <Heading>HELLO!</Heading>
          <Text>I'm Computer Engineer and Web Developer</Text>
        </Box>
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          flexDirection={["column", "row"]}
        >
          <Box css={innerStyle}>
            <Box css={contentStyle}>
              <Box
                css={css`
                  width: 400px;
                  margin-bottom: 10px;
                  font-family: sans-serif;
                `}
              >
                <Heading
                  css={css`
                    font-size: 24px;
                    margin-bottom: 10px;
                  `}
                >
                  About Me
                </Heading>
                <Text
                  css={css`
                    font-size: 16px;
                    margin-bottom: 10px;
                    line-height: 35px;
                  `}
                >
                  I'm a computer engineer and web developer with a passion for
                  coding and crafting exceptional web solutions. Proficient in
                  HTML, CSS, JavaScript, React, Nodejs-Express, MYSQL, MongoDB,
                  Python, and Java, I thrive on transforming creative concepts
                  into beautiful, responsive websites. I'm dedicated to creating
                  user-friendly experiences and staying up-to-date with the
                  latest industry trends. Let's collaborate and turn your ideas
                  into digital reality.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box css={innerStyle}>
            <Box css={contentStyle}>
              <Image css={imageStyle} src={profile} />
            </Box>
          </Box>

          <Box css={innerStyle}  >
            <Box css={contentStyle}>
              <Heading>Details</Heading>
              <Text style={{ fontWeight: "bold", paddingRight: "80px" }}>
                Name:
              </Text>
              <Text>Misgan Moges Dereje</Text>
              <Text style={{ fontWeight: "bold", paddingRight: "80px" }}>
                Field:
              </Text>
              <Text>Computer Engineer</Text>
              <Text style={{ fontWeight: "bold", paddingRight: "80px" }}>
                University:
              </Text>
              <Text>Addis Ababa University</Text>
              <Box>
                <Link to="https://www.linkedin.com/in/misgan-moges-49230a235/">
                  <FaLinkedin
                    size={30}
                    style={{ marginRight: "20px", color: "#bdc00f" }}
                  />
                </Link>
                <Link to="https://t.me/Bosena30" target="_black">
                  <FaTelegram
                    size={30}
                    style={{ marginRight: "20px", color: "#0693e3" }}
                  />
                </Link>
                <Link to="https://github.com/MisgeMoges">
                  <FaGithub size={30} style={{ color: "#000" }} />
                </Link>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default About;
