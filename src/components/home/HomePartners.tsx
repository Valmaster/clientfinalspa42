import * as React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const HomePartners = () => {
    const useStyles = makeStyles((theme) => ({
        partners: {
            padding: '3em 0',
            backgroundColor: '#fff',
            height: '300px',
        },
    }));

    const classes = useStyles();

    return (
        <>
            <section id="partners" className={classes.partners}>
                <Typography variant="h2" color="secondary" align="center">
                    Nos partenaires
                </Typography>
                <Container>Liste des partenaires</Container>
            </section>
        </>
    );
};

export default HomePartners;
