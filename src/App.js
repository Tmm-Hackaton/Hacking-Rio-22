import { ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles'
import "./App.css";
import { Main } from "./components/Main/Main";
import cross from "./images/cross.png";
const theme = createTheme({
  palette:{
    primary:{
      main: "#8846a7"
    },
    secondary: {
      main:"#3c9cd6"
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <div className="cross"></div>
      <div className="image">
        {" "}
        <img src={cross} alt="cross" />{" "}
      </div>
    <Main/>
    </div>
    </ThemeProvider>
  );
}

export default App;
