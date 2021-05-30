import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconHomeSection from '../IconHomeSection';
import Box from '@material-ui/core/Box';
import Cards from '../Cards';
import { makeStyles } from '@material-ui/core';

const HomeNews = () => {
    const useStyles = makeStyles((theme) => ({
        news: {
            padding: '6em 0',
            backgroundColor: theme.palette.secondary.light,
        },
        cards: {
            textAlign: 'center',
            margin: '2em 0',
        },
        spanTitle: {
            color: theme.palette.primary.main,
        },
    }));

    const classes = useStyles();

    return (
        <section id="news" className={classes.news}>
            <Container>
                <Typography variant="h2" color="secondary" align="center">
                    Dernières <span className={classes.spanTitle}>Actualités</span>
                    <br />
                    <IconHomeSection />
                </Typography>
                <Box className={classes.cards}>
                    <Cards />
                    <Cards />
                    <Cards />
                </Box>
            </Container>
        </section>
    );
};

export default HomeNews;
