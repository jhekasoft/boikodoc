
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from "next/link";

export default function Custom404() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Сторінку не знайдено
        </Typography>
        <Link href="/" passHref>
          <Button variant="contained" color="primary" component="a">
            На головну
          </Button>
        </Link>
      </Box>
    </Container>
  )
}
