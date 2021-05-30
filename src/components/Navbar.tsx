import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core';
import styled from '@material-ui/core/styles/styled';
import useTheme from '@material-ui/core/styles/useTheme';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import {useContext} from 'react';
import authApi from '../services/authApi';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: '#fff',
        color: theme.palette.secondary.dark,
        position: 'sticky',
    },
    nav: {
        height: '5rem',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navLinks: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '2rem !important',
    },
    logo: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '5rem',
        height: '4rem',
        cursor: 'pointer',
    },
}));


// Liste des onglets du menu de la navbar

const Navbar = () => {
    const classes = useStyles();
    const menuTab: string[] = ['Adoptions', 'Actualités', 'Agir', 'Conseils'];
    const links: string[] = ['/adoptions', '/actualités'];
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
    const history = useHistory();

    const handleLogout = () => {
        authApi.logout();
        setIsAuthenticated(false);
        history.push("/signin");
    }


    const MyMenuItem = styled(MenuItem)({
        fontSize: '1.5rem',
        '&:hover': {
            color: useTheme().palette.primary.main,
        },
    });

    const MyIconButton = styled(IconButton)({
        fontSize: '1.5rem',
        '&:hover': {
            color: useTheme().palette.primary.main,
        },
    });

    return (
        <>
            <AppBar className={classes.header}>
                <Toolbar className={classes.nav}>
                    <img
                        className={classes.logo}
                        src={require('../assets/images/spa42.jpg')}
                        alt=""
                    />
                    <div className={classes.navLinks}>
                        {menuTab.map((menu, index) => (
                            <MyMenuItem key={menu}>
                                <NavLink to={`${links[index]}`}>{menu}</NavLink>
                            </MyMenuItem>
                        ))}
                        <MyIconButton>
                            <AccountCircle />
                        </MyIconButton>
                    </div>
                    {!isAuthenticated &&
                    <>
                        <NavLink to="/signin">
                            Se Connecter
                        </NavLink>
                    </> ||
                    <>
                        <button onClick={handleLogout}>
                            Déconnexion
                        </button>
                    </>
                    }
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
