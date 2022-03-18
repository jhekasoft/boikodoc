import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Head from 'next/head';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid, SvgIcon } from '@mui/material';
import { FacebookMessengerIcon, TelegramIcon, ViberIcon } from '../src/icon';

export default function About() {
  const title = `Контакти | ${process.env.baseTitle}`;

  return (
    <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Контакти
        </Typography>

        <Typography sx={{ mb: 4 }}>
          <strong>Бойко Юлія Миколаївна</strong> — лікар акушер-гінеколог, лікар УЗД (Київ).
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" gutterBottom>
              Зв'язок
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <SvgIcon sx={{ mr: 1, verticalAlign: 'middle' }}><TelegramIcon /></SvgIcon>
              Telegram: <Link href="https://t.me/yuliadoc" target="__blank">@yuliadoc</Link>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <SvgIcon sx={{ mr: 1, verticalAlign: 'middle' }}><ViberIcon /></SvgIcon>
              Viber: <Link href="viber://chat?number=%2B380502076704" target="__blank">+380 50 207 67 04</Link>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <SvgIcon sx={{ mr: 1, verticalAlign: 'middle' }}><FacebookMessengerIcon /></SvgIcon>
              Facebook Messenger: <Link href="https://m.me/boykodoctor" target="__blank">@boykodoctor</Link>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <EmailIcon htmlColor='#5fbfe6' sx={{ mr: 1, verticalAlign: 'middle' }} />
              Email: <Link href="mailto:yulia.boiko.doc@gmail.com">yulia.boiko.doc@gmail.com</Link>
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <PhoneIcon htmlColor='#2baba8' sx={{ mr: 1, verticalAlign: 'middle' }} />
              Телефон: <Link href="tel://%2B380502076704" target="__blank">+380 50 207 67 04</Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h6" gutterBottom>
              Соціальні мережі
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <FacebookIcon htmlColor='#4260b4' sx={{ mr: 1, verticalAlign: 'middle' }} />
              Facebook: <Link href="https://www.facebook.com/boykodoctor" target="__blank">@boykodoctor</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
  );
}
