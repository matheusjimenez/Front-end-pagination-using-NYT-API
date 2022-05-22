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


const NavBar = () => {
    
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ background: 'var(--blue)' }} position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Bloom Books
                        </Typography>
                        <Button color="inherit"><StarIcon/></Button>
                    </Toolbar>
                    <MenuSearchBar/>
                </AppBar>
            </Box>
        </>
    )
}

export { NavBar }