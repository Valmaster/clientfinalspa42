import * as React from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    makeStyles,
    Typography,
} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TodayIcon from '@material-ui/icons/Today';
import { Link } from 'react-router-dom';

const Cards = () => {
    const useStyles = makeStyles((theme) => ({
        card: {
            width: '30%',
            margin: '0 1em',
            display: 'inline-block',
            textAlign: 'justify',
            backgroundColor: theme.palette.secondary.light,
            '& .MuiButton-root': {
                color: '#fff',
                backgroundColor: theme.palette.primary.main,
                padding: '0.7em',
            },
            '& .MuiButton-root:hover': {
                backgroundColor: theme.palette.primary.dark,
            },
            '& .MuiCardActions-root': {
                padding: '16px',
            },
            transition: 'ease-in-out 0.2s',
            '&:hover': {
                background: 'rgba(0,0,0,0.06)',
            },
        },
        hr: {
            width: '15%',
            margin: '0.5em auto',
            borderColor: theme.palette.primary.light,
        },
        mainTitleCard: {
            color: theme.palette.secondary.dark,
        },
        dateCard: {
            color: theme.palette.secondary.main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        textCard: {
            color: theme.palette.secondary.main,
        },
        linkCard: {
            color: theme.palette.primary.light,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '14px',
            textDecoration: 'none',
            '&:hover': {
                color: theme.palette.primary.dark,
                opacity: 1,
            },
        },
    }));

    const classes = useStyles();

    return (
        <>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="newsImage"
                        height="220"
                        image={require('../assets/images/berger_allemand.jpg')}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography
                            variant="h5"
                            component="h2"
                            align="center"
                            className={classes.mainTitleCard}
                        >
                            Un nouvel article à venir
                        </Typography>
                        <hr className={classes.hr} />
                        <Typography
                            variant="body1"
                            align="center"
                            gutterBottom
                            className={classes.dateCard}
                        >
                            <TodayIcon color="primary" />
                            01 Mars 2021
                        </Typography>
                        <Typography
                            variant="body2"
                            className={classes.textCard}
                            component="p"
                        >
                            Lizards are a widespread group of squamate reptiles, with over
                            6,000 species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to="/news" className={classes.linkCard}>
                        Lire la suite 🠪{' '}
                    </Link>
                    {/*
                    <Button size="small" color="primary">
                        Lire la suite
                    </Button>
                    */}
                </CardActions>
            </Card>
        </>
    );
};

export default Cards;
