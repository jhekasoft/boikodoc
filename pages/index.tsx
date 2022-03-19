import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Button, Grid, IconButton, Paper, Rating, Stack } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Link from '../src/Link';
import { Review, TimelineItem as TimelineItm } from '../src/api/types';
import { fetchReviews, fetchTimeline } from '../src/api';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import Carousel from 'react-material-ui-carousel';

interface StaticPropsProps {
  timelineItems: TimelineItm[];
  reviews: Review[];
}

interface StaticProps {
  props: StaticPropsProps
}

export async function getStaticProps(): Promise<StaticProps> {
  const timelineItems = fetchTimeline();
  const reviews = fetchReviews();

  return {
    props: {
      timelineItems,
      reviews
    },
  }
}

export default function Index(props: StaticPropsProps) {
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
    <section style={{ top: '-48px', height: '100vh', width: '100%', position: 'relative', minHeight: 670, overflow: 'hidden' }}>
      <Container sx={{ position: 'absolute', pt: '48px', left: 0, right: 0, zIndex: 1, top: '50%', transform: 'translate(0,-50%)' }}>
        <Box sx={{ my: 4, display: 'flex',
              flexDirection: 'column',
              alignItems: 'center' }}>
          <IconButton component={Link} href="/contact" sx={{ mb: 4 }}>
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

      <Box id="reviews">
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Відгуки
        </Typography>
        <Grid container spacing={0} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={12} md={9}>
            <Carousel
              autoPlay={true}
              stopAutoPlayOnHover={true}
              indicators={true}
              swipe={true}
              cycleNavigation={true}
              navButtonsAlwaysVisible={false}
              fullHeightHover={false}
              animation="slide"
              interval={5000}
              // duration={1000}
              activeIndicatorIconButtonProps={{
                style: {
                  color: "#2baba8"
                }
              }}
            >
              { props.reviews.map((item, i) => (
                <Box key={i} sx={{ minHeight: { xs: '18rem', sm: '11rem' } }}>
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
                </Box>
              )) }
            </Carousel>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
  );
}
