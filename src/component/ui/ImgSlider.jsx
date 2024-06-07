import React from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img1 from "../../../public/assets/img1.jpg";
import img2 from "../../../public/assets/img2.jpg";
import img3 from "../../../public/assets/img3.jpeg";
import img5 from "../../../public/assets/img4.jpg";
import img4 from "../../../public/assets/img5.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  { url: img1, label: 'Slide 1', description: 'Description for slide 1' },
  { url: img2, label: 'Slide 2', description: 'Description for slide 2' },
  { url: img3, label: 'Slide 3', description: 'Description for slide 3' },
  { url: img4, label: 'Slide 4', description: 'Description for slide 4' },
  { url: img5, label: 'Slide 5', description: 'Description for slide 5' },
];

const ImgSlider = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1800px',
        paddingTop: '0',
        height: 'calc(100vh - 4rem)',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <AutoPlaySwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={3000}
        slideStyle={{ display: 'flex', justifyContent: 'center' }}
        springConfig={{
          duration: '0.5s',
          easeFunction: 'ease-in-out',
          delay: '0s',
        }}
      >
        {[...images, ...images].map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              width: '100%',
              height: 'calc(100vh - 4rem)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 3, // Add shadow here
            }}
          >
            <Box
              component="img"
              src={image.url}
              alt={`Slide ${index + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                color: 'white',
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)',
              }}
            >
              <Typography variant="h4" component="div">{image.label}</Typography>
              <Typography variant="subtitle1" component="div">{image.description}</Typography>
              <Button variant="contained" sx={{ mt: 2 }}>Learn More</Button>
            </Box>
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <IconButton
        aria-label="Previous"
        onClick={handleBack}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        aria-label="Next"
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ImgSlider;
