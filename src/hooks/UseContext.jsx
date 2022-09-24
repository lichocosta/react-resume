import React from "react";

const themes = {
  light: {
    foreground: "#ffffff",
    background: "#227fab",
  },
  dark: {
    foreground: "#ffffff",
    background: "#d97400",
  },
};

// React.createContext() accede a useContext sin tener que importarlo
const ThemeContext = React.createContext(themes.light);

export default function UseContext() {
  return (
    <div>
      <h2>useContext</h2>
      {/* ThemeContext.Provider provee a todo lo que contenga con el valor de los
      temas */}
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Styled by theme context
    </button>
  );
}
