import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const lightTheme = {
  colors: {
    bg: "#F1F3F4", //TŁO strony
    bgUnit1: "#FFF", //Tło komponentów
    bgUnit2: "#F3F2FC", //Tło np. inputa/navigacja aktywnego elemty
    stroke: "#DCDCDD", //obramowania
    dash: "#DCE3EB",
    green: "#50C099",
    blue: "#5DAAEE",
    yellow: "#FFC565",
    purpure: "#7B57E0",
    salmon: "#F9837C",
  },
  fontColors: {
    error: "#C71026",
    succes: "#0B8A00",
    primary: "#2B2E48",
    secondary: "#7D7D7D",
    purpure: "#7B57E0", //wyróżniony tekst
  },
  fontSizes: {
    xs: "10px",
    s: "12px",
    m: "14px",
    l: "16px",
    xl: "21px",
    xxl: "24px",
  },
};

const darkTheme = {
  colors: {
    bg: "#0D0F11",
    bgUnit1: "#191D23",
    bgUnit2: "#262C36",
    stroke: "#576776",
    dash: "#334E68",
    green: "#50C099",
    blue: "#5DAAEE",
    yellow: "#FFC565",
    purpure: "#7B57E0",
    salmon: "#F9837C",
  },
  fontColors: {
    error: "#F53B30",
    succes: "#2AA31F",
    primary: "#E3E3E3",
    secondary: "#B8C0CC",
    purpure: "#7B57E0",
  },
  fontSizes: {
    xs: "10px",
    s: "12px",
    m: "14px",
    l: "16px",
    xl: "21px",
    xxl: "24px",
  },
};

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  console.log("Theme: ", theme);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
