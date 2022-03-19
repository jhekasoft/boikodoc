import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Head from 'next/head';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import Image from 'next/image';
import { Service } from '../src/api/types';
import { fetchServices } from '../src/api';

interface StaticPropsProps {
  services: Service[]
}

interface StaticProps {
  props: StaticPropsProps
}

export async function getStaticProps(): Promise<StaticProps> {
  const services = await fetchServices();

  return {
    props: {
      services
    },
  }
}

export default function Services(props: StaticPropsProps) {
  const title = `Послуги | ${process.env.baseTitle}`;

  return (
    <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Послуги
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Кожна жінка у профілактичних цілях повинна відвідувати 1-2 рази на рік
          гінеколога і проходити у нього огляд.
        </Typography>

        <Typography sx={{ mb: 4 }}>
          Гінекологічні огляди допомагають вчасно діагностувати та вилікувати
          захворювання жіночих статевих органів та не допустити негативних
          наслідків у подальшому. Для жінки, яка живе статевим життям, щорічний
          огляд обов'язковий.
        </Typography>

        <Grid container spacing={4}>
          { props.services.map((item, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardActionArea href="">
                  <CardMedia title={item.title_uk}>
                    <Image
                      loader={({ src }) => src}
                      src={item.img2x}
                      width="736"
                      height="428"
                      alt={item.title_uk}
                    />
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h3">
                      {item.title_uk}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )) }
        </Grid>
      </Box>
    </Container>
    </>
  );
}
