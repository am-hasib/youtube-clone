import React from "react";
import Comment from "./Comment";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
const AddComment = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;
const AddCommentAvatar = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.soft};
`;
const AddCommentContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.textSoft};
  padding: 5px 0px;
  width: 100%;
  /*background: ${({ theme }) => theme.soft}; */
`;
const AddCommentInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;
function Comments() {
  return (
    <Container>
      <AddComment>
        <AddCommentAvatar src="https://yt3.ggpht.com/ytc/AL5GRJUOhe9c1D67-yLQEkT2EqyRclI5V3EOTANZQXmt=s48-c-k-c0x00ffffff-no-rj"></AddCommentAvatar>
        <AddCommentContainer>
          <AddCommentInput placeholder="Add a comment"></AddCommentInput>
        </AddCommentContainer>
      </AddComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
}

export default Comments;
