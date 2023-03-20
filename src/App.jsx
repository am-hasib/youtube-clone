import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";

import "./App.css";
import SignIn from "./pages/SignIn";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  padding: 30px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <BrowserRouter>
        <Container>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
