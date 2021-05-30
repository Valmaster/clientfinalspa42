import * as React from 'react';
import Box from '@material-ui/core/Box';
import PetsIcon from '@material-ui/icons/Pets';
import { makeStyles } from '@material-ui/core';

const IconHomeSection = () => {
    const useStyles = makeStyles((theme) => ({
        icons: {
            color: theme.palette.primary.main,
        },
        firstHr: {
            width: '50px',
            borderColor: theme.palette.primary.light,
            marginRight: '15px',
        },
        secondHr: {
            width: '50px',
            borderColor: theme.palette.primary.light,
            marginLeft: '15px',
        },
        thirdHr: {
            width: '50px',
            borderColor: theme.palette.primary.main,
            marginRight: '5px',
        },
        fourthHr: {
            width: '50px',
            borderColor: theme.palette.primary.main,
            marginLeft: '5px',
        },
    }));

    const classes = useStyles();

    return (
        <>
            <Box
                display="flex"
                flexDirection="row"
                fontSize="0.5rem"
                alignItems="center"
                justifyContent="center"
                marginTop="2.5em"
            >
                <Box>
                    <hr className={classes.firstHr} />
                    <hr className={classes.thirdHr} />
                </Box>
                <PetsIcon className={classes.icons} />
                <Box>
                    <hr className={classes.secondHr} />
                    <hr className={classes.fourthHr} />
                </Box>
            </Box>
        </>
    );
};

export default IconHomeSection;
