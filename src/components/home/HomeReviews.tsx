import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import HomeCarousel from './HomeCarousel';

const HomeReviews = () => {
    const useStyles = makeStyles((theme: Theme) => ({
        feedback: {
            backgroundImage: `url(${require('../../../images/banner.jpg')})`,
            backgroundSize: '100% 130%',
            backgroundRepeat: 'no-repeat',
            height: '700px',
            filter: 'grayscale(100%)',
        },
    }));

    const classes = useStyles();

    return (
        <>
            <section id="feedback" className={classes.feedback}>
                <Typography variant="h2">TEST</Typography>
                <HomeCarousel />
            </section>
        </>
    );
};

export default HomeReviews;
