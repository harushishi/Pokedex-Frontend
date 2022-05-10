import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#4C0983',
            darker: '#000000',
        },
        neutral: {
            main: '#FFFFFF',
            contrastText: '#FFFFFF',
        },
    },
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Na() {

    const navigate = useNavigate();
    const [search, setSearch] = useState(0)

    return (
        <Box sx={{ flexGrow: 1 }} >
            <ThemeProvider theme={theme}>
                <AppBar position="relative">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <Link to="/Pokedex" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                Pokedex
                            </Link>
                        </Typography>

                        <IconButton
                            size="extra-large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: -1 }}
                        >
                            <Link to="/Pokedex/add" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                <AddBoxIcon />
                            </Link>
                        </IconButton>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        let name = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
                                        navigate(`/pokedex/${name}`)
                                        // need to figure out how to rerender after doing a search
                                    }
                                }}
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box >
    );
}