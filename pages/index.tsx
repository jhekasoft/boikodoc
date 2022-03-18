import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import * as Icon from '../src/icon';
import { IconButton } from '@mui/material';
import Link from '../src/Link';

export default function Index() {
  return (
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
      </Box>
    </Container>
    <div style={{ bottom: 0, margin: 'auto', top: 0, position: 'absolute', left: 0, right: 0, willChange: 'transform', background: 'url(/static/img/about_bg6.jpg) no-repeat top center', backgroundSize: 'cover' }}>
    </div>
    </section>
  );
}
