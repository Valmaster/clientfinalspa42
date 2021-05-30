import * as React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AdoptionCard from '../components/AdoptionCard';
import ModalComponent from '../components/Modal';
import FormAddAnimal from '../components/adoptions/FormAddAnimal';
import animalsApi from '../services/animalsApi';
import {GetAnimal} from '../interface/animal/Animal';

const Adoptions: React.FC = () => {
    const useStyles = makeStyles((theme) => ({
        adoptions: {
            padding: '3em 0',
        },
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

    const [animals, setAnimals] = React.useState<GetAnimal[]>([]);

    React.useEffect(() => {
        const fetchAnimals = async () => {
            const data = await animalsApi.getAll();
            if (typeof data === 'string') {
                console.log(data);
            } else {
                setAnimals(data);
            }
        }
        fetchAnimals();
    }, [setAnimals]);

    return (
        <>
            <section id="adoptions" className={classes.adoptions}>
                <Container>
                    <ModalComponent textButton="Ajouter">
                        <FormAddAnimal />
                    </ModalComponent>
                    <Typography variant="h1" color="secondary" align="center">
                        Animaux à l'adoption
                    </Typography>
                    <Box className={classes.cards}>
                        {animals.map((animal) =>
                                <AdoptionCard animal={animal}/>
                        )}
                    </Box>
                </Container>
            </section>
        </>
    );
};

export default Adoptions;
