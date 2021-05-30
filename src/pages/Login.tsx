import {useForm} from 'react-hook-form';
import {FormControl} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import authApi from '../services/authApi';
import {LoginUser} from '../interface/user/LoginUser';
import { useHistory } from "react-router-dom";
import {useContext} from 'react';
import AuthContext from '../contexts/AuthContext';

const LoginPage = () => {

    const {register, handleSubmit} = useForm();
    const {setIsAuthenticated} = useContext(AuthContext);
    const history = useHistory();

    const onSubmit = async (user: LoginUser): Promise<void> => {
        try {
            await authApi.authenticate(user);
            setIsAuthenticated(true);
            history.replace('/');
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

export default LoginPage;
