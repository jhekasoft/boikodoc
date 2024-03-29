import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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
import { Container, ListItemButton, Typography, useMediaQuery } from '@mui/material';
import TagManager from 'react-gtm-module';
import '../src/style.css';
import { useRouter } from 'next/router';

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

  type MenuItem = {
    title: string;
    url: string;
    type?: string;
  }

  const menuList: MenuItem[] = [
    // {title: "Безкоштовна консультація", url: "/services/3/online-gynecology-consult", type: "highlight"},
    {title: "Послуги", url: "/services"},
    {title: "Про лікаря", url: "/about"},
    {title: "Контакти", url: "/contact"}
  ];

  const fullMenuList = [
    {title: "Головна", url: "/"},
    ...menuList,
  ];

  React.useEffect(() => {
    if (process.env.googleTagId) {
      TagManager.initialize({ gtmId: process.env.googleTagId || '' });
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{process.env.baseTitle}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta property="og:title" key="title" content={process.env.baseTitle} />
        <meta property="og:description" key="description" content="👩‍⚕️ Бойко Юлія Миколаївна — ♀️ лікар акушер-гінеколог, лікар УЗД, Київ. 📞 +380 50 207 67 04. Онлайн-запис на консультацію в Києві. Відгуки. Сертифікати. Коли потрібен гінеколог. Нерегулярний менструальний цикл, виділення із піхви, неприємний запах, вагітність." />
        <meta name="keywords" key="keywords" content="лікар, гінеколог, акушер-гінеколог, лікар акушер-гінеколог, лікар УЗД, УЗД, гінеколог Київ, УЗД Київ, нерегулярний менструальний цикл, сертифікати гінеколог, вагітність, гінеколог вагітність, акушер-гінеколог вагітність, консультація онлайн гінеколог, консультація гінеколог Київ, піхва неприємний запах" />
        <meta property="og:url" content={process.env.baseUrl + useRouter().asPath} />
        <meta property="og:site_name" content={process.env.baseTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:image" key="image" content={process.env.baseUrl + "/static/img/profile2x.jpg"} />
        <meta property="og:locale" content="uk_UA" />
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
              sx={{ zIndex: 20 }}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {fullMenuList.map((item, index) => (
                    <ListItemButton key={'drawer-menu-' + index} component={Link} href={item.url}>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Drawer>
            <Toolbar variant="dense" disableGutters sx={{ marginBottom: "0.3rem" }}></Toolbar> {/* For AppBar margin */}
            <AppBar
              color="transparent"
              elevation={0}
              enableColorOnDark 
              sx={{ zIndex: 20, backdropFilter:"blur(8px)", backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            >
              <Box sx={{ backgroundColor: 'primary.light', height: "0.3rem" }}></Box>
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
                    {/* <Button component={Link} href="tel://+380502076704" color="primary">
                      +380 50 207 67 04
                    </Button> */}
                    <Button component={Link} href="/services/3/online-gynecology-consult" color="primary">
                      👩‍⚕️ Безкоштовна консультація
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
                        variant={(item.type == 'highlight') ? 'contained' : 'text'}
                        sx={item.type == 'highlight' ? {} : { color: "inherit", ":hover": { color: "primary.main" } }}
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
              <Box sx={{ mb: 2 }}>
                {fullMenuList.map((item, index) => (
                  <Link key={'footer-link-' + index} href={item.url} sx={{ mx: 1 }} underline="none">
                    <Typography variant="body2" color="text.disabled" component="span">{item.title}</Typography>
                  </Link>
                ))}
              </Box>
              <Copyright />
            </Box>
            <Box sx={{ backgroundColor: 'primary.light', height: "0.3rem" }}></Box>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}
