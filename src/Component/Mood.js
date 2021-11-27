// import { Button } from "antd";
import storage from "local-storage-fallback";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
body{
  background-color: ${({ theme }) =>
    theme.myTheme === "dark" ? "#22272E" : "white"};
  color: ${({ theme }) => (theme.myTheme === "dark" ? "#CDD9E5" : "black")};

}
`;

const App = () => {
  const storeThemeChoice = () => {
    const saveTheme = storage.getItem("toggle");
    return saveTheme ? JSON.parse(saveTheme) : { myTheme: "dark" };
  };

  const [toggle, setToggle] = useState(storeThemeChoice);

  useEffect(() => {
    storage.setItem("toggle", JSON.stringify(toggle));
  }, [toggle]);

  return (
    <ThemeProvider theme={toggle}>
      <GlobalStyled />
      <Container>
        <Wrap>this is my portfolio</Wrap>
        <Button
          onClick={() => {
            setToggle(
              toggle.myTheme === "dark" ? { myTheme: "l" } : { myTheme: "dark" }
            );
          }}
        >
          Toggle{" "}
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Button = styled.div`
  width: 120px;
  height: 40px;
  margin-top: 100px;
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  border-radius: 6px;
  text-transform: uppercase;
  transform: scale(1);
  transition: all 350ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.06);
  }
`;

//#0D1117
