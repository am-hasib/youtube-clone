import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: start;
`;
const CommentImage = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.soft};
`;
const CommentDetails = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
const CommentHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const CommentUserName = styled.span`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;
const CommentPublishedDays = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;
const CommentDescription = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
function Comment() {
  return (
    <Container>
      <CommentImage src="https://yt3.ggpht.com/ytc/AL5GRJUOhe9c1D67-yLQEkT2EqyRclI5V3EOTANZQXmt=s48-c-k-c0x00ffffff-no-rj" />
      <CommentDetails>
        <CommentHeader>
          <CommentUserName>Kuddus</CommentUserName>
          <CommentPublishedDays>2 days ago</CommentPublishedDays>
        </CommentHeader>
        <CommentDescription>
          res corporis corrupti quo. Eius velit vitae facere cumque numquam
          tenetur, ut consequatur fuga temporibus quo laborum nihil non.
          Corrupti esse, perferendis qui veniam autem, quas saepe ipsum iure
          nemo aliquid itaque laudantium optio maxime inventore doloribus enim
          dolores molestias, aperiam non iusto magni natus placeat architecto
          similique? Illum voluptas pariatur facere, illo, beatae dolore velit
          earum debitis cupiditate aspernatur fugit qui, delectus assumenda
          odit!
        </CommentDescription>
      </CommentDetails>
    </Container>
  );
}

export default Comment;
