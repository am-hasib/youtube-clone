import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  height: calc(100vh-56px);
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: calc(100vh-56px);
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 60px 30px;
  width: 360px;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
`;
const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 15px;
  padding: 0px 10px;
  text-align: center;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  outline: none;
  padding: 10px 0px;
  font-size: 16px;
  background: transparent;
  color: ${({ theme }) => theme.textSoft};
`;
const Button = styled.button`
  margin: 20px 0px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 4px;
`;
const Hr = styled.hr`
  border-width: thin;
  border-color: ${({ theme }) => theme.soft};
  margin: 30px 0px;
`;
const Links = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  margin-top: 25px;
  cursor: pointer;
`;
const Link = styled.span`
  color: ${({ theme }) => theme.text};
`;
const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>To Continue BeSocial</SubTitle>
        <Input placeholder="username" type="text"></Input>
        <Input placeholder="password" type="password"></Input>
        <Button>Sign in</Button>

        <Title>Sign Up</Title>
        <SubTitle>Don't Have an Account Please Consider to be social</SubTitle>
        <Input placeholder="email" type="email"></Input>
        <Input placeholder="password" type="password"></Input>
        <Button>Sign up</Button>
      </Wrapper>
      <Links>
        English(USA)
        <Link>Help</Link>
        <Link>Privacy</Link>
        <Link>Terms & Conditions</Link>
      </Links>
    </Container>
  );
};

export default SignIn;
