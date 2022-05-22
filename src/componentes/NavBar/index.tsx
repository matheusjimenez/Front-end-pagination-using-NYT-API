import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { MenuSearchBar } from '../MenuSearchBar';

import './style.css';

const NavBar = () => {
    
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className='app_navbar_appbar' position="static">
                    <Toolbar className='app_navbar_toolbar'>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Bloom Books
                        </Typography>
                        <MenuSearchBar/>
                        <Button color="inherit"><StarIcon/></Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export { NavBar }