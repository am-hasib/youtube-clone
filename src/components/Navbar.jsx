import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background: ${({ theme }) => theme.bgLight};
  padding: 8px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;
const Search = styled.div`
  width: 45%;
  border: 1px solid #aaa;
  border-radius: 3px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  left: 0;
  right: 0;
  margin: auto;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: ${({theme})=> theme.text};
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
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search..." />
          <SearchIcon />
        </Search>
        <Button>
          <AccountCircleOutlinedIcon /> Sign in
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
