import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import FilterAnimal from '../FilterAnimal';

const HomeAdoptions = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundImage: `url(${require('../../assets/images/main-image-home.jpg')})`,
            backgroundPosition: 'bottom',
            backgroundSize: '100% 130%',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '720px',
            position: 'absolute',
        },
        green: {
            color: theme.palette.primary.main,
        },
        content: {
            position: 'relative',
            top: '40%',
            left: '17%',
            borderLeft: '3px solid' + theme.palette.primary.main,
            paddingLeft: '1rem',
            maxWidth: '40%',
        },
        adoptions: {
            height: '720px',
        },
        filter: {
            border: '1px solid #e6e6e6',
            position: 'relative',
            top: '69%',
            left: '17%',
            right: '17%',
            backgroundColor: theme.palette.secondary.light,
            borderRadius: '0.5rem',
            width: '66%',
        },
    }));

    const classes = useStyles();

    return (
        <>
            <section id="adoptions" className={classes.adoptions}>
                <div className={classes.root}>
                    <div className={classes.content}>
                        <Typography variant="h1">
                            <span className={classes.green}>S</span>ociété{' '}
                            <span className={classes.green}>P</span>rotectrice des{' '}
                            <span className={classes.green}>A</span>nimaux Saint Etienne
                            Loire
                        </Typography>
                        <Typography variant="subtitle1">
                            De nombreux animaux ont besoin d'une nouvelle famille
                            <br />
                            Venez leur en aide en les adoptant !
                        </Typography>
                    </div>
                    <div className={classes.filter}>
                        <FilterAnimal />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeAdoptions;
