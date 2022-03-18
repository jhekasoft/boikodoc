import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Button, IconButton, Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from '../src/Link';
import { TimelineItem as TimelineItm } from '../src/api/types';
import { fetchTimeline } from '../src/api';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';

interface StaticPropsProps {
  timelineItems: TimelineItm[];
}

interface StaticProps {
  props: StaticPropsProps
}

export async function getStaticProps(): Promise<StaticProps> {
  const data = fetchTimeline();

  return {
    props: {
      timelineItems: data,
    },
  }
}

export default function Index(props: StaticPropsProps) {
  return (
    <>
    <section style={{ height: '100vh', width: '100%', position: 'relative', minHeight: 670, overflow: 'hidden' }}>
      <Container sx={{ position: 'absolute', left: 0, right: 0, zIndex: 1, top: '50%', transform: 'translate(0,-50%)' }}>
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
      <div style={{ bottom: 0, margin: 'auto', top: 0, position: 'absolute', left: 0, right: 0, willChange: 'transform', background: 'url(/static/img/about_bg6.jpg) no-repeat top center', backgroundSize: 'cover' }}>
    </div>
    </section>

    <Container>
      <Box id="timeline">
        <Typography variant="h4" sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
          Освіта та досвід роботи
        </Typography>

        <Timeline position="alternate">
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
    </>
  );
}
