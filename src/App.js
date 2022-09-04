import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "./App.css";
import { AppRoutes } from "./components/Routes/Routes";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import cross from "./images/logo.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFF",
    },
    secondary: {
      main: "#8846a7",
    },
  },
});
function App() {
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="cross"></div>
        <div className="image">
          {" "}
          <img src={cross} alt="cross" />{" "}
        </div>

        <AppRoutes />

        <BottomNavigation
         
          sx={{ width: 400 }}
          value={value}
          onChange={handleChange}
          style={{background:"#8846a7", marginTop:100, md:50}}
          
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
      </div>
    </ThemeProvider>
  );
}

export default App;
