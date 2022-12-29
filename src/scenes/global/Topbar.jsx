import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutLined";
import NotificationsOutLinedIcon from "@mui/icons-material/NotificationsOutLined";
import SettingsOutLinedIcon from "@mui/icons-material/SettingsOutLined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutLined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return <Box display="flex" justifyContent="space-between" p={2}></Box>;
};

export default Topbar;
