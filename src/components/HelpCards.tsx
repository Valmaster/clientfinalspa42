import * as React from 'react';
import { Card, CardActionArea, makeStyles, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

const HelpCards = () => {
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
            '& .MuiCardContent-root': {
                position: 'relative',
                bottom: '1.5em',
            },
            transition: 'ease-in-out 0.2s',
            '&:hover': {
                background: 'rgba(0,0,0,0.06)',
            },
        },
        mainTitleCard: {
            color: theme.palette.secondary.dark,
        },
        textCard: {
            color: theme.palette.secondary.main,
        },
        square: {
            position: 'relative',
            border: '1px solid #eaeaea',
            padding: '1em',
            top: '-1.5em',
            width: '1.5em',
            height: '1em',
            margin: '0 auto',
            backgroundColor: '#fff',
        },
        icon: {
            position: 'relative',
            bottom: '0.7em',
            right: '0.3em',
            height: '2em',
            width: '1.5em',
            color: theme.palette.primary.dark,
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
                    <Box className={classes.square}>
                        <AccessibilityNewIcon className={classes.icon} />
                    </Box>
                    <CardContent>
                        <Typography
                            variant="h5"
                            component="h2"
                            align="center"
                            className={classes.mainTitleCard}
                            gutterBottom
                        >
                            Devenir bénévole
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
            </Card>
        </>
    );
};

export default HelpCards;
