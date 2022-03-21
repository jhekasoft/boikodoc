import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import { Service } from '../../api/types';

interface Props {
  item: Service
}

export default function ServiceItem(props: Props) {
  const { item } = props;

  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardActionArea
        href={`/services/${item.id}/${item.slug}`}
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'start' }}
      >
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
          {item.saleText_uk && (
            <Typography variant="body2" color="primary.main">
              {item.saleText_uk}
            </Typography>
          )}
        </CardContent>
        {/* <CardActions>
          <Button variant="contained" href="">
            Детальніше
          </Button>
        </CardActions> */}
      </CardActionArea>
    </Card>
  );
}