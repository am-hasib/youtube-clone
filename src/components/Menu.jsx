import React from "react";
import styled from "styled-components";
import besocial from "../assets/img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
const Container = styled.div`
  position: sticky;
  top: 0;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  flex: 1;
  height: 100vh;
  font-size: 14px;
  font-family: "poppins", sans-serif;
`;
const Wrapper = styled.div`
  padding: 20px 20px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: medium;
  margin-bottom: 25px;

  font-size: 24px;
`;
const Img = styled.img`
  height: 25px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px 0px;
`;
const Hr = styled.hr`
  border-color: ${({ theme }) => theme.soft};
  border-width: thin;
  margin: 15px 0px 10px;
`;
const Login = styled.div`
  font-size: 14px;
  font-weight: medium;
`;
const Button = styled.button`
  font-size: 14px;
  border: 1px solid #3ea6ff;
  padding: 5px 15px;
  color: #3ea6ff;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  margin: 10px 0px;
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: medium;
`;
const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={besocial} />
            Besocial
          </Logo>
        </Link>
        <Item>
          <HomeIcon /> Home
        </Item>
        <Item>
          <ExploreOutlinedIcon /> Exlpore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon /> Subscription
        </Item>
        <Hr />
        <Item>
          <VideoLibraryIcon /> Library
        </Item>
        <Item>
          <HistoryOutlinedIcon /> History
        </Item>
        <Hr />
        <Login>Sign in to like videos, comment and subscribe</Login>
        <Button>
          <AccountCircleOutlinedIcon /> Sign in
        </Button>
        <Hr />
        <Title>Best of BeSocial</Title>
        <Item>
          <LibraryMusicOutlinedIcon /> Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon /> Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon /> Gaming
        </Item>
        <Item>
          <LocalMoviesOutlinedIcon /> Movies
        </Item>
        <Item>
          <NewspaperOutlinedIcon /> News
        </Item>
        <Item>
          <LiveTvOutlinedIcon /> Live
        </Item>
        <Hr />

        <Item>
          <SettingsOutlinedIcon /> Settings
        </Item>
        <Item>
          <FlagOutlinedIcon /> Reports
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon /> Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <LightModeOutlinedIcon /> : <DarkModeIcon />}{" "}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
