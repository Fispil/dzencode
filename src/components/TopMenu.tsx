import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logoImage from '../assets/logo.png';
import { useEffect, useState } from "react";

const TopMenu: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDateTime = formatDate(new Date());

      setCurrentDate(currentDateTime.split('.')[0]);
      setCurrentTime(currentDateTime.split('.')[1].slice(3));
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <header style={{ backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '32px' }}>
            <Image src={logoImage} alt='logo' loading="lazy" width={32} height={32} />
            <Typography variant="h4" sx={{ color: 'green' }}>Inventory</Typography>
          </Box>
          <Stack>
            <Typography>
              Today
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
              <Typography>
                {currentDate}
              </Typography>
              <Typography>
                {currentTime}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </header>
  )
}

export default TopMenu;