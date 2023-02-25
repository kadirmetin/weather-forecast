import React, { useState } from 'react'
import { Box } from '@mui/system';
import { Drawer, IconButton, Button, Typography, useMediaQuery } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useTheme } from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import Countries from './API/Countries'
import Cities from './API/Cities'
import bgImage from './img/sunny.jpg'

const Slider = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const mobile = useTheme();
  const matches = useMediaQuery(mobile.breakpoints.down("md"));
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSelectChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };

  const Button1 = {
    "&:hover": {
      backgroundColor: "white",
      color: "color"
    },
    backgroundColor: "white",
    color: "black"
  }

  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: "80px",
      backgroundImage: `url(${bgImage})`,
      width: "100%",
      height: "450px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "grayscale(55%)"
    }}>
      <Box sx={{
        marginRight: "15rem"
      }}>
        <Typography fontWeight={"bold"} variant='h4' color={"white"} >
          You can learn the weather by choosing a city.
        </Typography>
        <Typography variant='h5' color={"white"}>
          Choose the city and learn the weather.
        </Typography>
        <br />
        <IconButton onClick={() => setIsDrawerOpen(true)}>
          <Button size='large' startIcon={<AddOutlinedIcon />} sx={Button1}>
            Add City
          </Button>
        </IconButton>
        <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} PaperProps={{
          sx: {
            width: "25%",
            padding: 2,
            gap: "2rem",
            display: 'flex',
          }
        }}>
          <Typography fontWeight={"bold"} sx={{
            position: "absolute",
            top: "1.5rem",
            left: "1rem",
          }}>
            Add City
          </Typography>
          <IconButton sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
          }} onClick={() => setIsDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
          <br />

          <Countries selectedValue1={selectedValue1} onSelectChange={handleSelectChange1} />

          <Cities selectedValue={selectedValue} onSelectChange={handleSelectChange} />

          <Button onClick={() => setIsDrawerOpen(false)} endIcon={<SaveIcon />} variant={"contained"} >
            Save
          </Button>
          <p>Seçilen değer: {selectedValue}</p>
          <p>Seçilen değer: {selectedValue1}</p>
        </Drawer>
      </Box>
    </Box >
  )
}

export default Slider