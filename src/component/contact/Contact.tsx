import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { SvgIcon } from '@mui/material';
import Link from '@mui/material/Link';
import { FacebookMessengerIcon, TelegramIcon, ViberIcon } from '../../../src/icon';


export default function Contact() {
  return (
    <>
      <Typography sx={{ mb: 2 }}>
        <SvgIcon sx={{ mr: 1, verticalAlign: 'middle' }}><TelegramIcon /></SvgIcon>
        Telegram: <Link href="https://t.me/yuliadoc" target="__blank">@yuliadoc</Link>
      </Typography>
      <Typography sx={{ mb: 2 }}>
        <SvgIcon sx={{ mr: 1, verticalAlign: 'middle' }}><ViberIcon /></SvgIcon>
        Viber: <Link href="viber://chat?number=%2B380502076704" target="__blank">+380 50 207 67 04</Link>
      </Typography>
      <Typography sx={{ mb: 2 }}>
        <SvgIcon sx={{ mr: 1, verticalAlign: 'middle' }}><FacebookMessengerIcon /></SvgIcon>
        Facebook Messenger: <Link href="https://m.me/boykodoctor" target="__blank">@boykodoctor</Link>
      </Typography>
      <Typography sx={{ mb: 2 }}>
        <EmailIcon htmlColor='#5fbfe6' sx={{ mr: 1, verticalAlign: 'middle' }} />
        Email: <Link href="mailto:yulia.boiko.doc@gmail.com">yulia.boiko.doc@gmail.com</Link>
      </Typography>
      <Typography sx={{ mb: 2 }}>
        <PhoneIcon htmlColor='#2baba8' sx={{ mr: 1, verticalAlign: 'middle' }} />
        Телефон: <Link href="tel://%2B380502076704" target="__blank">+380 50 207 67 04</Link>
      </Typography>
    </>
  );
}
