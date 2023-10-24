import React from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import { Flex, Box } from "rebass";
import Sidebar from "../components/sidebar";
import { css } from "@emotion/react";

const RootLayout = ({ handleSearch }) => {

  const sidebar = css`
  @media (max-width:768px){
    display:none
  }`
  return (
    <>
      <Header handleSearch={handleSearch} />
      <Flex flex={[1, 3]}>
        <Box css={sidebar}>
          <Sidebar />
        </Box>

        <Outlet />
      </Flex>
    </>
  );
};

export default RootLayout;
