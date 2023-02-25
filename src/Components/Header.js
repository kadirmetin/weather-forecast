import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton, useMediaQuery, useTheme, Drawer, Link } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from '@mui/icons-material/Close';
import ThemeChanger from "./Theme/ThemeChanger"

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const mobile = useTheme();
  const matches = useMediaQuery(mobile.breakpoints.down("md"));

  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', height: "80px" }}>
        <Typography fontWeight={"bold"} color={"inherit"} align={"left"} fontSize='large' >
          Weather Forecast
        </Typography>
        <IconButton color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon fontSize='medium' />
        </IconButton>
        {matches ?
          <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} PaperProps={{
            sx: {
              width: "100%",
              padding: 2,
              textAlign: "center",
              gap: "1.5rem",
              display: 'flex',
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }
          }}>
            <Box role="presentation">
              <Link href="#" underline="none" variant='h6'>
                {"Home"}
              </Link>
            </Box>
            <IconButton sx={{ position: "absolute", top: "1rem", right: "1rem", }} onClick={() => setIsDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
            <ThemeChanger />
          </Drawer> :
          <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} PaperProps={{
            sx: {
              width: "25%",
              padding: 2,
              textAlign: "center",
              gap: "1.5rem",
              display: 'flex',
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }
          }}>
            <Box role="presentation">
              <Link href="#" underline="none" variant='h6'>
                {"Home"}
              </Link>
            </Box>
            <IconButton sx={{ position: "absolute", top: "1rem", right: "1rem", }} onClick={() => setIsDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
            <ThemeChanger />
          </Drawer>}
      </Toolbar>
    </AppBar>
  )
}

export default Header