import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { lightTheme, darkTheme } from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Copyright from '../src/Copyright';
import Link from '../src/Link';
import { Container, useMediaQuery } from '@mui/material';
import TagManager from 'react-gtm-module';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function getTheme(themeMode: string): Theme {
  return themeMode === 'light' ? lightTheme : darkTheme;
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const themeMode = prefersDarkMode ? 'dark' : 'light';

  const [state, setState] = React.useState({
    open: false,
    themeMode: 'light'
  });

  const colorMode = React.useMemo(
    () => ({
        toggleColorMode: () => {
          setState((state) => ({ ...state, themeMode: state.themeMode == 'light' ? 'dark' : 'light' }))
        }
    }),
    []
  )

  const toggleDrawer =
  (open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, open: open });
  };

  const menuList = [
    // {title: "Послуги", url: "/services"},
    {title: "Про лікаря", url: "/about"},
    {title: "Контакти", url: "/contact"}
  ];

  React.useEffect(() => {
    if (process.env.GoogleTagId) {
      TagManager.initialize({ gtmId: process.env.googleTagId || '' });
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{process.env.baseTitle}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta property="og:title" content={process.env.baseTitle} key="title" />
        <meta property="og:description" content="👩‍⚕️ Бойко Юлія Миколаївна — лікар акушер-гінеколог, лікар УЗД, Київ. 📞 +380 50 207 67 04. Онлайн-запис на консультацію в Києві. Відгуки. Сертифікати. Коли потрібен гінеколог. Нерегулярний менструальний цикл, виделення із піхви, неприємний запах, вагітність." />
        <meta name="keywords" content="лікар, гінеколог, акушер-гінеколог, лікар акушер-гінеколог, лікар УЗД, УЗД, гінеколог Київ, УЗД Київ, нерегулярний менструальний цикл, сертифікати гінеколог, вагітність, гінеколог вагітність, акушер-гінеколог вагітність, консультація онлайн гінеколог, консультація гінеколог Київ, піхва неприємний запах" />
        <meta property="og:url" content="https://boikodoc.com/" />
        <meta property="og:site_name" content={process.env.baseTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://boikodoc.com/cover.png" />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={getTheme(state.themeMode)}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Drawer
              anchor="left"
              open={state.open}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                <ListItem button component={Link} href="/">
                    <ListItemText primary="Головна" />
                  </ListItem>
                  {menuList.map((item, index) => (
                    <ListItem key={'drawer-menu-' + index} button component={Link} href={item.url}>
                      <ListItemText primary={item.title} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
            <Box sx={{ backgroundColor: 'primary.light', height: "0.3rem" }}></Box>
            <AppBar position="static" color="transparent" elevation={0} enableColorOnDark>
              <Container>
                <Toolbar variant="dense" disableGutters>
                {/* <Stack direction="row" spacing={0} sx={{ mt: 1, mb: 1 }}> */}
                  <IconButton edge="start" color="primary" aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{
                      display: { sm: 'inline-flex', md: 'none' }, mr: 2,
                      color: "text.secondary", ":hover": { color: "primary.main" }
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <IconButton component={Link} href="/" edge="start" color="primary"
                    sx={{
                      display: { xs: 'none', sm: 'none', md: 'inline-flex' },
                      color: "text.secondary", ":hover": { color: "primary.main" }
                    }}
                  >
                    <HomeIcon />
                  </IconButton>
                  {/* <Box>
                    <Typography variant="h6" color="inherit" component={Link} href="/">
                      Юлія Бойко
                    </Typography>
                  </Box> */}
                  <Box sx={{ flexGrow: 1 }} textAlign="center">
                    <Button component={Link} href="tel://+380502076704" color="primary">
                      +380 50 207 67 04
                    </Button>
                  </Box>
                  {/* <Box sx={{ flexGrow: 1 }} /> */}
                  <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                    {menuList.map((item, index) => (
                      <Button
                        key={'top-menu-' + index}
                        component={Link}
                        href={item.url}
                        color="primary"
                        sx={{ color: "inherit", ":hover": { color: "primary.main" } }}
                      >
                        {item.title}
                      </Button>
                    ))}
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
            <Component {...pageProps} />
            <Box
              component="footer"
              sx={{
                py: 3,
                px: 2,
                mt: 'auto',
              }}
              textAlign="center"
            >
              <Copyright />
            </Box>
            <Box sx={{ backgroundColor: 'primary.light', height: "0.3rem" }}></Box>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}
