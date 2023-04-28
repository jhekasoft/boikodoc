import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Head from 'next/head';
import { Grid } from '@mui/material';
import { Service } from '../src/api/types';
import { fetchServices } from '../src/api';
import ServiceItem from '../src/component/service/ServiceItem';

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
      <meta property="og:title" key="title" content={title} />
      <meta property="og:description" key="description" content="Жінки повинні відвідувати гінеколога 1-2 рази на рік для профілактики та вчасного діагностування захворювань. Лікар Бойко Юлія Миколаївна пропонує різні послуги у клініці, включаючи консультації, діагностику та лікування захворювань, вагітність та пологи." />
      <meta name="keywords" key="keywords" content="Бойко Юлія Миколаївна, жінка, профілактика, гінеколог, огляд, діагностика, лікування, захворювання, органи малого тазу, медикаментозний аборт, шийка матки, гістеросальпінгографія, вагітність, пологи, кесарський розтин, УЗД, скринінг." />
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
          огляд обов'язковий. Послуги:
        </Typography>

        <Grid container spacing={4}>
          { props.services.map((item, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <ServiceItem item={item} />
            </Grid>
          )) }
        </Grid>

        <Typography sx={{ mt: 4 }}>
          Лікар Бойко Юлія Миколаївна пропонує такі послуги і процедури у клініці: первинна
          консультація гінеколога, повторна консультація гінеколога,
          консультація гінеколога із оглядом, повторна консультація гінеколога
          із оглядом, діагностика і лікування захворювань органів малого тазу,
          медикаментозний аборт, лікування шийки матки, гістеросальпінгографія,
          ведення післяопераційних хворих, ведення вагітних, пологів,
          кесарський розтин, УЗД органів малого тазу та скринінги вагітних.
        </Typography>
      </Box>
    </Container>
    </>
  );
}
