import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Alert, Button, Divider, Grid, IconButton, Modal, Paper, Rating, Stack } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import Image from 'next/image';
import { Pagination, Mousewheel, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from '../src/Link';
import { Certificate, Review, Service, Symptom, TimelineItem as TimelineItm } from '../src/api/types';
import { fetchCertificates, fetchReviews, fetchService, fetchSymptoms, fetchTimeline } from '../src/api';
import ServiceItem from '../src/component/service/ServiceItem';
import Head from 'next/head';

interface StaticPropsProps {
  timelineItems: TimelineItm[];
  certificates: Certificate[];
  reviews: Review[];
  symptoms: Symptom[];
  mainService?: Service;
}

interface StaticProps {
  props: StaticPropsProps
}

export async function getStaticProps(): Promise<StaticProps> {
  const timelineItems = fetchTimeline();
  const certificates = fetchCertificates();
  const reviews = fetchReviews();
  const symptoms = fetchSymptoms();
  const mainService = fetchService(3);

  return {
    props: {
      timelineItems,
      certificates,
      reviews,
      symptoms,
      mainService
    },
  }
}

export default function Index(props: StaticPropsProps) {
  const [certificateOpen, setCertificateOpen] = React.useState(false);
  const [certificateImg, setCertificateImg] = React.useState("");
  const handleCertificateOpen = (certificateImg: string) => {
    setCertificateImg(certificateImg);
    setCertificateOpen(true);
  }
  const handleCertificateClose = () => setCertificateOpen(false);
  

  React.useEffect(() => {
    const cover = document.getElementById('main_cover');
    if (cover) {
      document.addEventListener('scroll', () => {
        const
          pageY = window.pageYOffset,
          scroll = pageY * 0.3,
          scrolled = scroll.toFixed(0);
        if (pageY <= document.documentElement.clientHeight && pageY <= 1080) {
          cover.style.transform = 'translateY(' + (scrolled) + 'px)';
        }
      });
    }
  }, []);

  return (
    <>
    <Head>
      {/* TODO: make JSON object */}
      <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: `{
        "@context": "http://schema.org/",
        "@type": "Physician",
        "name": "Бойко Юлія Миколаївна",
        "image": [
          "${process.env.baseUrl}/static/img/profile2x.jpg"
        ],
        "url":"${process.env.baseUrl}",
        "telephone": "+380502076704",
        "description": "Бойко Юлія Миколаївна — лікар акушер-гінеколог, лікар УЗД (Київ). Більше 10 років досвіду.",
        "priceRange":"500₴",
        "makesOffer": {
          "@type": "Offer",
          "name": "Консультація лікаря",
          "price": "500",
          "priceCurrency": "UAH"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "5"
        }
      }`}} />
    </Head>
    <section style={{ top: '-48px', height: '100vh', width: '100%', position: 'relative', minHeight: 670, overflow: 'hidden' }}>
      <Container sx={{ position: 'absolute', pt: '48px', left: 0, right: 0, zIndex: 1, top: '50%', transform: 'translate(0,-50%)' }}>
        <Box sx={{ my: 4, display: 'flex',
              flexDirection: 'column',
              alignItems: 'center' }}>
          <IconButton component={Link} href="/about" sx={{ mb: 4 }}>
            <Avatar
              alt="Юлія Бойко"
              src="/cover.jpg"
              sx={{ 
                width: "20rem", height: "20rem",
                border: "4px solid #eee",
                borderColor: "primary.main"
                // transition: "border-color 0.5s",
                // ":hover": { borderColor: "primary.main" }
              }}
            />
          </IconButton>
          <Typography variant="h5" sx={{ mb: 4, textAlign: 'center' }}>
            <strong>Бойко Юлія Миколаївна</strong> — лікар акушер-гінеколог, лікар УЗД (Київ).
          </Typography>

          <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>Більше 10 років досвіду.</Typography>

          <Button href="#timeline" onClick={e => {
            const el = document.getElementById("timeline");
            e.preventDefault();  // Stop Page Reloading
            el && el.scrollIntoView({ behavior: 'smooth' });
          }} >
            <KeyboardArrowDownIcon fontSize='large' />
          </Button>
        </Box>
      </Container>
      <div id="main_cover" style={{ bottom: 0, margin: 'auto', top: 0, position: 'absolute', left: 0, right: 0, willChange: 'transform', background: 'url(/static/img/about_bg6.jpg) no-repeat top center', backgroundSize: 'cover' }}>
      </div>
    </section>

    <Container>
      <Box id="timeline">
        <Typography variant="h4" sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
          Освіта та досвід роботи
        </Typography>

        <Timeline position="right" sx={{ display: { xs: 'block', md: 'none' } }}>
          { props.timelineItems.map((item, i) => (
            <TimelineItem key={i} sx={{ '&&::before': { content: 'none' } }}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} sx={{ px: 1, py: 1 }}>
                  <Typography variant="body2" color="textSecondary">
                    {item.title_uk}
                  </Typography>
                  <Typography>{item.desc_uk}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          )) }
        </Timeline>

        <Timeline position="alternate" sx={{ display: { xs: 'none', md: 'block' } }}>
          { props.timelineItems.map((item, i) => (
            <TimelineItem key={i}>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  {item.title_uk}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} sx={{ px: 1, py: 1 }}>
                  <Typography>{item.desc_uk}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          )) }
        </Timeline>
      </Box>
    </Container>

    <Divider />
    <Container id="certificates" sx={{ my: 4 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
        Сертифікати
      </Typography>
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={12} md={9}>
          <Swiper
            modules={[Pagination, Mousewheel, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 3
              }
            }}
            pagination={{ clickable: true }}
            mousewheel={{ forceToAxis: true }}
          >
            { props.certificates.map((item, i) => (
              <SwiperSlide key={i} style={{ textAlign: 'center' }}>
                <Box
                  onClick={() => {handleCertificateOpen(item.img_full)}}
                  sx={{
                    height: 180,
                    width: 256,
                    cursor: 'zoom-in',
                  }}
                  title={item.title_uk}
                >
                  <Image
                    loader={({ src }) => src}
                    unoptimized
                    src={item.img2x}
                    layout="fill"
                    objectFit='contain'
                    objectPosition='top'
                    alt={item.title_uk}
                  />
                </Box>
              </SwiperSlide>
            )) }
          </Swiper>
        </Grid>
      </Grid>

      <Modal
        open={certificateOpen}
        onClose={handleCertificateClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ cursor: 'pointer' }} onClick={handleCertificateClose}>
          <Image
            loader={({ src }) => src}
            unoptimized
            src={certificateImg}
            layout="fill"
            objectFit='contain'
            objectPosition='center'
          />
        </Box>
      </Modal>
    </Container>

    <Divider />
    <Container id="reviews" sx={{ my: 4 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
        Відгуки
      </Typography>
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={12} md={9}>
          <Swiper
            modules={[Pagination, Mousewheel, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoHeight={true}
            pagination={{ clickable: true }}
            mousewheel={{ forceToAxis: true }}
          >
            { props.reviews.map((item, i) => (
              <SwiperSlide key={i} style={{ paddingBottom: '3rem' }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Typography variant="h5">{item.name_uk}</Typography>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <Rating value={item.rating} precision={0.5} readOnly />
                    <Box>{item.rating}</Box>
                  </Box>
                </Stack>
                <Typography variant="h5" sx={{ fontFamily: 'Caveat, cursive' }} color="#31588c">
                  <FormatQuoteIcon color="disabled" fontSize='large' />
                  {item.text_uk}
                </Typography>
              </SwiperSlide>
            )) }
          </Swiper>
        </Grid>
      </Grid>
    </Container>

    <Divider />
    <Container id="symptoms" sx={{ my: 4 }}>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Коли потрібен гінеколог
      </Typography>
      <Typography variant="h6" sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
        Ви — жінка, і у Вас:
      </Typography>
        <Box sx={{ textAlign: 'center' }}>
          { props.symptoms.map((item, i, symptoms) => (
            <Typography key={i} variant="h5" sx={{ fontFamily: 'Caveat, cursive', my: 2 }} color="#31588c">
              {item.title_uk + (i == symptoms.length -1 ? "." : ";")}
            </Typography>
          )) }
        </Box>

    </Container>

    { props.mainService && (
      <>
        <Divider />
        <Container id="symptoms" sx={{ my: 4 }}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
            Безкоштовна консультація на час воєнного стану
          </Typography>

          <Grid container spacing={0} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <ServiceItem item={props.mainService} />
            </Grid>
          </Grid>
        </Container>
      </>
    ) }
    </>
  );
}
