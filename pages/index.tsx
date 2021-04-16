import Head from "next/head";
import {
  Button,
  TextField,
  Box,
  AppBar,
  Toolbar,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText, Checkbox, Container, Grid, IconButton, MenuItem
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from "@material-ui/core/styles";
import styles from "../styles/Home.module.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e6ffff',
      main: '#b3e5fc',
      dark: '#82b3c9',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  }
});

const title = "Todo List";
const width = 600;

export default function Home() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Box pl={1}>
            <Typography variant="h6">{title}</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <main className={styles.main}>
        <Box width={width}>
          <Box pl={3} mb={3}>
            <TextField label="Todo" fullWidth/>
          </Box>
          <ListItem>
            <ListItemIcon>
              <Checkbox />
            </ListItemIcon>
            <ListItemText primary="asdf" />
          </ListItem>
        </Box>
      </main>
    </div>
  );
}
