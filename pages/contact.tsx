import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Head from 'next/head';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid, SvgIcon } from '@mui/material';
import Contact from '../src/component/contact/Contact';

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
            <Contact />
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
