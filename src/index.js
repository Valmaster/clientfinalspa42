import {Switch, Route, HashRouter, withRouter} from 'react-router-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import Adoptions from './pages/Adoptions';
import reportWebVitals from "./reportWebVitals";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import authApi from './services/authApi';
import {useState} from "react";
import AuthContext from "./contexts/AuthContext";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#06A42F',
            main: '#07972D',
            dark: '#038A27',
        },
        secondary: {
            light: '#f6f6f6',
            main: '#616161',
            dark: '#373737',
        },
    },
    typography: {
        fontFamily: 'Cooper Black',
        h1: {
            fontSize: '3rem',
            lineHeight: '1',
        },
        h2: {
            fontSize: '2.5rem',
        },
        h3: {
            fontSize: '2rem',
        },
        subtitle1: {
            marginTop: '0.5em',
            fontSize: '1.5rem',
            color: '#616161',
            lineHeight: '1',
        },
    },
});

authApi.setup();

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(authApi.isAuthenticated)

    const NavbarWithRouter = withRouter(Navbar);

    return (
        <AuthContext.Provider value={{
            isAuthenticated: isAuthenticated,
            setIsAuthenticated: setIsAuthenticated
        }}>
            <HashRouter>
                <ThemeProvider theme={theme}>
                    <NavbarWithRouter/>
                    <main>
                        <Switch>
                            <Route exact path="/signup" component={RegisterPage}/>
                            <Route exact path="/signin" component={LoginPage}/>
                            <Route exact path="/adoptions" component={Adoptions}/>
                            <Route exact path="/" component={Home}/>
                        </Switch>
                    </main>
                </ThemeProvider>
            </HashRouter>
        </AuthContext.Provider>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
