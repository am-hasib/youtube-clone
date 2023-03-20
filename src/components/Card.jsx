import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  cursor: pointer;
  /* margin-bottom: 50px; */
  /* height: 100%; */
`;
const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin: 16px 0px;
  gap: 12px;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  background-color: #999;
  border-radius: 50%;
`;
const TextDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
`;
const Info = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
`;
const Card = () => {
  return (
    <Link to="video/test" style={{ textDecoration: "none", color: "inherit" }}>
      <Container>
        <Image src="https://i.ytimg.com/vi/Mvk5t0nkef4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCczwJf869UPHokBg1ipbUDp0KyUg" />
        <Details>
          <ChannelImage src="https://yt3.ggpht.com/ytc/AL5GRJUOhe9c1D67-yLQEkT2EqyRclI5V3EOTANZQXmt=s48-c-k-c0x00ffffff-no-rj"></ChannelImage>
          <TextDetails>
            <Title>This Mern Stack Tutorials</Title>
            <ChannelName>CodewithHasib</ChannelName>
            <Info>630,000 views * 1 day ago</Info>
          </TextDetails>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
