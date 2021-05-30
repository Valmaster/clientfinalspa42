import * as React from 'react';
import { Card, CardActionArea, makeStyles, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {GetAnimal} from '../interface/animal/Animal';

type AdoptionCardProps = {
    animal: GetAnimal;
}

const AdoptionCard = ({animal}: AdoptionCardProps) => {
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
                            gutterBottom
                        >
                            {animal.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            className={classes.textCard}
                            component="p"
                        >
                            {animal.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
};

export default AdoptionCard;
