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
import { Avatar, Grid, SvgIcon } from '@mui/material';
import { FacebookMessengerIcon, TelegramIcon, ViberIcon } from '../src/icon';

export default function About() {
  const title = `Про лікаря | ${process.env.baseTitle}`;

  return (
    <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Про лікаря
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={9} md={9}>
            <Typography variant="h5" component="h2" gutterBottom>
              Бойко Юлія Миколаївна
            </Typography>

            <Typography gutterBottom>
              <strong>Спеціалізація</strong>:
              акушер-гінеколог, лікар УЗД. 
            </Typography>
            <Typography sx={{ mb: 4 }}>
              Більше 10 років досвіду.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3} md={3}>
            <Avatar
              alt="Юлія Бойко"
              src="/cover.jpg"
              sx={{ 
                width: "15rem", height: "15rem",
                border: "4px solid #eee",
                borderColor: "primary.main"
              }}
            />
          </Grid>
        </Grid>

        <Typography variant="h5" component="h2" gutterBottom>
          Освіта
        </Typography>
        <ul>
          <li>2003 - 2009 рр. — Національний медичний університет ім. О.О. Богомольця, медичний факультет (Київ);</li>
          <li>2009 - 2012 рр. — Українська медична стоматологічна академія, інтернатура по акушерству та гінекології;</li>
          <li>2013 р. — навчання за програмою «Комплексна медична допомога у випадках небажаної вагітності»;</li>
          <li>2013 р. — курси ТУ «Невідкладні стани в акушерстві та гінекології» на базі Полтавського перинатального центру;</li>
          <li>2014 р. — курси з спеціалізації «Ультразвукова діагностика» на базі Харківської медичної академії післядипломної освіти;</li>
          <li>2015 р. — курси ПАЦ «Акушерство та гінекологія»;</li>
          <li>2016 р. — курси ТУ «Сучасна діагностика (кольпоскопічний скринінг), профілактика та лікування захворювань патології шийки матки»;</li>
          <li>2016 р. — курси ТУ «Інтенсивний практичний курс малоінвазивної хірургії та гінекології» на базі Центру хірургічних інновацій;</li>
          <li>2016 р. — отримала 2-гу кваліфікаційну категорію з акушерства та гінекології;</li>
          <li>2018 р. — практичний курс «Репродуктивна ендокринологія»;</li>
          <li>2020 р. — курси ТУ «Ендокринологія в гінекології»;</li>
          <li>2020 р. — отримала 2-гу кваліфікаційну категорію з УЗД;</li>
          <li>2021 р. — курси ТУ «УЗД в акушерстві та генекології»;</li>
          <li>2021 р. — отримала 1-шу кваліфікаційну категорію з акушерства та гінекології.</li>
        </ul>

        <Typography variant="h5" component="h2" gutterBottom>
          Досвід роботи
        </Typography>
        <ul>
          <li>2012 р. — Семенівська ЦРБ, Полтавська обл., лікар-ординатор акушер-гінеколог;
            <ul>
              <li>з 2013 р. — завідуюча акушерсько-гінекологічним відділенням;</li>
              <li>з 2015 р. — по сумісництву лікар УЗД;</li>
            </ul>
          </li>
          <li>з 2016 р. — лікар акушер-гінеколог Київського слідчого ізолятору;</li>
          <li>з 2016 р. — лікар акушер-гінеколог МЦ «Первоцвіт»;</li>
          <li>з 2018 р. — лікар акушер-гінеколог Центру охорони здоров’я ДКВС України;</li>
          <li>з 2020 р. — лікар акушер-гінеколог, лікар УЗД МЦ «Oxford Medical».</li>
        </ul>

        <Typography variant="h5" component="h2" gutterBottom>
          Навички
        </Typography>
        <ul>
          <li>амбулаторний прийом з цитологічним скринінгом;</li>
          <li>диспансерний нагляд гінекологічних хворих;</li>
          <li>діагностика і лікування захворювань органів малого тазу;</li>
          <li>малі лікувальні та діагностичні операції:
            <ul>
              <li>пункція заднього склепіння піхви;</li>
              <li>прицільна та аспіраційна біопсія;</li>
              <li>фракційне лікувально-діагностичне вишкрібання цервікального каналу та порожнини матки;</li>
              <li>МВА;</li>
              <li>медикаментозний аборт;</li>
              <li>лікування шийки матки (ДТК, електрохвильовий метод, лазер);</li>
              <li>гістеросальпінгографія;</li>
            </ul>
          </li>
          <li>лапаротомія по Пфанненштілю, нижньосерединна: тубектомія, аднексектомія, кістектомія, консервативна міомектомія,
              надпіхвова ампутація матки;</li>
          <li>ведення післяопераційних хворих;</li>
          <li>ведення вагітних, пологів, кесарський розтин;</li>
          <li>УЗД органів малого тазу та скринінги вагітних.</li>
        </ul>
      </Box>
    </Container>
    </>
  );
}
