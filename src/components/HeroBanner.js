import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';
import MainBanner from '../assets/images/banner.avif'; 

const HeroBanner = () => (
  <>
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#fff64d" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} color="#fff" sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px" style={{fontFamily:"Barlow" }}>
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" color="#fff" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{  
        fontFamily:"Barlow", 
        marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#fff64d" sx={{ fontFamily:"Barlow", opacity: '0.5', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    
  </Box>
  <img src={MainBanner} alt="hero-banner" className="hero-banner-img"  style={{marginTop:"32px" , borderTopRightRadius:'20px'}} />
  </>
  
);

export default HeroBanner;