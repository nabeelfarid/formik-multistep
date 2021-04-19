import { lightBlue } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Container,
  Switch,
  Tooltip,
  Link,
} from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: lightBlue,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box minWidth={400}>
          <AppBar position="relative" color="inherit">
            <Toolbar>
              <Typography
                variant="h6"
                // style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Formik Multi-Step Form
              </Typography>
              <Box flexGrow={1} />
              <Tooltip title="Github Repo">
                <IconButton
                  aria-label="github"
                  href="https://github.com/nabeelfarid/formik-multistep"
                  target="blank"
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
          <Container>
            <Box mt={4}>
              <div>Hello World</div>
            </Box>
          </Container>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
