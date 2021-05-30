import * as React from 'react';
import {FormControl, Select} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import animalsApi from '../../services/animalsApi';
import {CreateAnimal} from '../../interface/animal/CreateAnimal';
import {getAll} from '../../services/typeApi';
import {GetTypes} from '../../interface/type/GetTypes';
import {useForm} from 'react-hook-form';

const FormAddAnimal: React.FC = () => {
    const {register, handleSubmit} = useForm();
    const [types, setTypes] = React.useState<GetTypes[]>([]);

    React.useEffect(() => {
        const fetchTypes = async () => {
            try {
                const data = await getAll();
                if (typeof data === 'string') {
                    console.log(data);
                } else {
                    setTypes(data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchTypes();
    }, [setTypes]);

    const onSubmit = async (animal: CreateAnimal) => {
        try {
            animal.gender = Boolean(animal.gender);
            animal.isAdopted = Boolean(animal.isAdopted);
            animal.isInFamily = Boolean(animal.isInFamily);
            animal.type = Number(animal.type);

            console.log(animal);
            await animalsApi.create(animal);
        } catch (error) {
            console.log(error);
        }
    };

    if (types.length <= 0) return <div>Loading</div>

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <FormControl variant="outlined">
                    <InputLabel htmlFor="name">Nom de l'animal</InputLabel>
                    <Input id="name" {...register('name', {required: true})}/>
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="breed">Race de l'animal</InputLabel>
                    <Input id="breed" {...register('breed', {required: true})}/>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">En famille d'accueil</FormLabel>
                    <RadioGroup
                        defaultValue="0"
                        {...register('isInFamily', {required: true})}
                    >
                        <FormControlLabel value="false" control={<Radio/>} label="Non"/>
                        <FormControlLabel value="true" control={<Radio/>} label="Oui"/>
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                        defaultValue="true"
                        {...register('gender', {required: true})}
                    >
                        <FormControlLabel
                            value="false"
                            control={<Radio/>}
                            label="Femelle"
                        />
                        <FormControlLabel
                            value="true"
                            control={<Radio/>}
                            label="Mâle"
                        />
                    </RadioGroup>
                </FormControl>
                <TextField
                    id="description"
                    label="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    {...register('description', {required: true})}
                />
                <TextField
                    id="arrivedAt"
                    label="Date d'arrivée"
                    type="date"
                    defaultValue="2021-01-01"
                    {...register('arrivedAt', {required: true})}
                />
                <TextField
                    id="birthdate"
                    label="Date de naissance"
                    type="date"
                    defaultValue="2021-01-01"
                    {...register('birthdate', {required: true})}
                />
                <FormControl variant="outlined">
                    <InputLabel htmlFor="type">Espèce</InputLabel>
                    <Select
                        id="type"
                        native
                        defaultValue="0"
                        {...register('type', {required: true})}
                        label="Espece"
                    >
                        <option hidden>Sélectionner un type</option>
                        {types.map((value) =>
                            <option key={value.id} value={value.id}>{value.name}</option>
                        )}
                    </Select>
                </FormControl>

                <input type="file" id="image" {...register('image', {required: true})}/>

                <Button type="submit" variant="contained" color="primary">
                    Ajouter
                </Button>
            </form>
        </>
    );
};

export default FormAddAnimal;
