import * as React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconHomeSection from '../IconHomeSection';
import Box from '@material-ui/core/Box';
import Cards from '../Cards';
import HelpCards from '../HelpCards';

const HomeHelp = () => {
    const useStyles = makeStyles((theme) => ({
        help: {
            padding: '3em 0',
            backgroundColor: theme.palette.secondary.light,
        },
        cards: {
            textAlign: 'center',
            margin: '2em 0',
        },
    }));

    const classes = useStyles();

    return (
        <>
            <section id="help" className={classes.help}>
                <Container>
                    <Typography variant="h2" color="secondary" align="center">
                        Vous voulez nous aider ?
                    </Typography>
                    <Box className={classes.cards}>
                        <HelpCards />
                        <HelpCards />
                        <HelpCards />
                    </Box>
                </Container>
            </section>
        </>
    );
};

export default HomeHelp;
