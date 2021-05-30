import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { GetFilteredAnimal } from '../interface/animal/FilterAnimal';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import NativeSelect from '@material-ui/core/NativeSelect';

const FilterAnimal = ({
    string: name = '',
    string: breed = '',
    string: gender = 'Tous',
    string: type = 'Tous',
    string: fosterFamily = 'Tous',
    boolean: search = true,
}) => {
    const [filter, setFilter] = React.useState<GetFilteredAnimal>({
        name: name,
        breed: breed,
        gender: gender,
        type: type,
        fosterFamily: fosterFamily,
        search: search,
    });

    const [age, setAge] = React.useState<number[]>([0, 20]);

    const handleChange = (event: any) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        setFilter({ ...filter, [name]: value });
    };

    const handleAge = (event: any, newValue: number | number[]) => {
        setAge(newValue as number[]);
    };

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            formControl: {
                marginLeft: theme.spacing(2),
                marginRight: theme.spacing(2),
                marginBottom: theme.spacing(1),
                marginTop: theme.spacing(1),
                minWidth: 120,
            },
            form: {
                display: 'flex',
            },
            search: {
                backgroundColor: theme.palette.primary.main,
                display: 'flex',
                borderRadius: '0 0.5rem 0.5rem 0',
            },
            searchButton: {
                color: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: 0,
            },
            labelSlider: {
                color: theme.palette.primary.main,
            },
        })
    );

    const classes = useStyles();

    return (
        <>
            <form className={classes.form}>
                <Grid item xs={10}>
                    <Grid item xs={12}>
                        <TextField
                            id="name"
                            name="name"
                            label="Nom de l'animal"
                            value={filter.name}
                            onChange={handleChange}
                            className={classes.formControl}
                        >
                            Nom
                        </TextField>
                        <TextField
                            id="breed"
                            name="breed"
                            label="Espèce de l'animal"
                            value={filter.breed}
                            onChange={handleChange}
                            className={classes.formControl}
                        >
                            Espèce
                        </TextField>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="gender-native-error">Sexe</InputLabel>
                            <NativeSelect
                                value={filter.gender}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'gender',
                                    id: 'gender-native-error',
                                }}
                            >
                                <option value="Tous">Tous</option>
                                <option value="Oui">Oui</option>
                                <option value="Non">Non</option>
                            </NativeSelect>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="type-native-error">Type</InputLabel>
                            <NativeSelect
                                value={filter.type}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'type',
                                    id: 'type-native-error',
                                }}
                            >
                                <option value="Tous">Tous</option>
                                <option value="Chien">Chien</option>
                                <option value="Chat">Chat</option>
                            </NativeSelect>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="fosterFamily-native-error">
                                En famille d'accueil
                            </InputLabel>
                            <NativeSelect
                                value={filter.fosterFamily}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'fosterFamily',
                                    id: 'fosterFamily-native-error',
                                }}
                            >
                                <option value="Tous">Tous</option>
                                <option value="Oui">Oui</option>
                                <option value="Non">Non</option>
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} className={classes.formControl}>
                        <Typography id="range-slider" gutterBottom>
                            Entre <span className={classes.labelSlider}>{age[0]}</span> et{' '}
                            <span className={classes.labelSlider}>{age[1]}</span> ans
                        </Typography>
                        <Slider
                            id="age"
                            name="age"
                            value={age}
                            defaultValue={[0, 20]}
                            min={0}
                            max={20}
                            onChange={handleAge}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={2} className={classes.search}>
                    {search && (
                        <Button className={classes.searchButton}>Rechercher</Button>
                    )}
                </Grid>
            </form>
        </>
    );
};

export default FilterAnimal;
