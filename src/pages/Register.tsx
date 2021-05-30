import {useForm} from 'react-hook-form';
import {FormControl} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import {CreateUser} from '../interface/user/CreateUser';
import * as usersApi from '../services/usersApi';

const RegisterPage = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = async (user: CreateUser): Promise<void> => {
        try {
            const response = await usersApi.register(user);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="firstname">Firstname</InputLabel>
                    <Input id="firstname" {...register('firstname', {required: true})}/>
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="lastname">Last name</InputLabel>
                    <Input id="lastname" {...register('lastname', {required: true})}/>
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" {...register('email', {required: true})}/>
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="password">Mot de passe</InputLabel>
                    <Input id="password" {...register('password', {required: true})}/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Ajouter
                </Button>
            </form>
        </>
    )
}

export default RegisterPage;
