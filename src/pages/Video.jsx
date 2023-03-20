import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import ShareIcon from "@mui/icons-material/Share";
import Comments from "../components/Comments";
const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 6;
`;
const VideoWrapper = styled.div``;
const Recommendations = styled.div`
  flex: 2;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Info = styled.div`
  font-size: 16px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border-radius: 32px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 500;
`;
const Hr = styled.hr`
  border-width: thin;
  border-color: ${({ theme }) => theme.soft};
  margin: 30px 0px;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const ChannelImage = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;
const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ChannelName = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const ChannelCounter = styled.div`
  color: ${({ theme }) => theme.textSoft};
`;
const ChannelDescription = styled.div`
  color: ${({ theme }) => theme.textSoft};
`;
const Subscribe = styled.div``;
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="683"
            src="https://www.youtube.com/embed/jLS0TkAHvRg"
            title="React 18 Fundamentals Crash Course"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>React 18 Fundamentals Crash Course</Title>
        <Details>
          <Info> 630,000 * June 22 , 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon /> Like
            </Button>
            <Button>
              <ThumbDownAltIcon /> Dislike
            </Button>
            <Button>
              <ShareIcon /> Share
            </Button>
            <Button>
              <SaveAsIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <ChannelImage src="https://yt3.ggpht.com/ytc/AL5GRJUOhe9c1D67-yLQEkT2EqyRclI5V3EOTANZQXmt=s48-c-k-c0x00ffffff-no-rj" />
            <ChannelDetails>
              <ChannelName>CodeWithHasib</ChannelName>
              <ChannelCounter>100k Subscribers</ChannelCounter>
              <ChannelDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eum
                adipisci fuga quae suscipit laborum id voluptate itaque dolorum
                accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Doloribus inventore voluptatum non maiores quos quam
                reiciendis maxime impedit sunt voluptas!
              </ChannelDescription>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>
            <Buttons>
              <Button
                style={{
                  backgroundColor: "red",
                  color: "White",
                  fontWeight: "500",
                }}
              >
                Subscribe
              </Button>
            </Buttons>
          </Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendations>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendations>
    </Container>
  );
};

export default Video;
