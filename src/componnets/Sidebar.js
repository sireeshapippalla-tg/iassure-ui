import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LanIcon from "@mui/icons-material/Lan";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MainRoutes from "../Routes/MainRoutes";
import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Header from "./Header";
import './Sidebar.css';

import Home from '../assets/images/HomeIcon.png';
import Notification from '../assets/images/Notification.png';
import Assessment from '../assets/images/Assessment.png';
import Schedule from '../assets/images/Schedule.png';
import Training from '../assets/images/Training.png';
import Incident from '../assets/images/Incident.png';
import Stock from '../assets/images/Stock.png';
import Attendance from '../assets/images/Attendance.png';


const SidebarItems = [
    // {
    //     label: "Home",
    //     path: "/",
    //     icon: <HomeIcon />,
    //     icon: <img src={Home} alt="Home" />,
    // },
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: <img src={Home} alt="Home" />,

    },
    // {
    //     label: "Notification",
    //     path: "/notification",
    //     icon: <img src={Notification} alt="Notification" />,
    // },
    // {
    //     label: "Assessment",
    //     path: "/assessment",
    //     icon: <img src={Assessment} alt="Assessment" />,
    // },
    // {
    //     label: "Schedule",
    //     path: "/schedule",
    //     icon: <img src={Schedule} alt="Scheduleicon" />,
    // },
    // {
    //     label: "Training",
    //     path: "/training",
    //     icon: <img src={Training} alt="Training" />,
    // },
    {
        label: "Incident",
        path: "/incident",
        icon: <img src={Incident} alt="Incident" />,
    },
    // {
    //     label: "Stock",
    //     path: "/stock",
    //     icon: <img src={Stock} alt="Stock" />,
    // },
    // {
    //     label: "Attendance",
    //     path: "/attendance",
    //     icon: <img src={Attendance} alt="Attendance" />,
    // }
];

const drawerWidth = 220;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(5)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(7)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function Sidebar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };
    const handleToggleDrawer = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const location = useLocation();
    const { pathname } = location;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Header />

            {/* <IconButton onClick={handleToggleDrawer} className='sidebar-arrow'>
            {open ? (theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />) : <ChevronRightIcon />}
          </IconButton>
             */}
            <Drawer variant="permanent" open={open}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className='sidebar-arrow'
                    edge="end"
                >
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                <DrawerHeader />
                <Divider />
                <List sx={{ height: "100vh" }}>

                    {SidebarItems.map((item, index) => (
                        <div>
                            <Link
                                to={item.path}
                                disablePadding
                                sx={{ display: "block" }}
                                style={{
                                    textDecoration: "none"
                                }}
                            >
                                <ListItemButton
                                    className='side-menubar-text'
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                        bgcolor: pathname === item.path ? "#A9ECFF" : "transparent",
                                    }}
                                    selected={pathname === item.path}
                                >
                                    {index === 0 && ( // Render chevron icon for the first item
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : "auto",
                                                justifyContent: "center",
                                                color: "#919191",
                                            }}
                                        >
                                            {/* {open ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
                                        </ListItemIcon>
                                    )}
                                    <ListItemIcon
                                    className={pathname === item.path ? "active" : ""}
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                            color: "#919191",
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.label}
                                        sx={{
                                            opacity: open ? 10 : 0,
                                            // color: "#919191",
                                            textDecoration: "none",
                                            color: pathname === item.path ? "#2B3B7B" : "#717171",
                                            
                                           
                                        }}
                                    />
                                </ListItemButton>
                            </Link>
                        </div>
                    ))}
                </List>
                <Divider />
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
                <DrawerHeader />
                <MainRoutes />
            </Box>
        </Box>
    );
}
