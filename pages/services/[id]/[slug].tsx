import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Head from 'next/head';
import { Alert, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { Service } from '../../../src/api/types';
import { fetchService, fetchServices } from '../../../src/api';
import Contact from '../../../src/component/contact/Contact';

interface StaticPropsProps {
  service?: Service
}

interface StaticProps {
  props: StaticPropsProps
}

interface PathParams {
  params: {
    id: string;
    slug: string;
  }
}

export async function getStaticPaths() {
  const services = fetchServices();

  return {
    paths: services.map(item => {
      return { params: { id: item.id.toString(), slug: item.slug } };
    }),
    fallback: false
  };
}


export async function getStaticProps(params: PathParams): Promise<StaticProps> {
  const idStr = params.params.id;
  const id = parseInt(idStr?.toString() || "");

  const service = await fetchService(id);

  return {
    props: {
      service
    },
  }
}

export default function Services(props: StaticPropsProps) {
  if (props.service == undefined) {
    return <></>;
  }

  const title = `${props.service.title_uk} | Послуги | ${process.env.baseTitle}`;

  return (
    <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          { props.service.title_uk }
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            
            {props.service.desc_uk.map(descItem => (
              <Typography sx={{ mb: 2 }}>{descItem}</Typography>
            ))}

            {props.service.saleText_uk && (
              <Alert severity="success" sx={{ mb: 4 }}>{props.service.saleText_uk}</Alert>
            )}

            <Typography variant="h6" gutterBottom>
              Для замовлення використовуйте:
            </Typography>
            <Contact />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Image
              loader={({ src }) => src}
              src={props.service.img_full}
              width="736"
              height="428"
              alt={props.service.title_uk}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
  );
}
