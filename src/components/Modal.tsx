import * as React from 'react';
import Modal from '@material-ui/core/Modal';
import { createPortal } from 'react-dom';
import { Box, Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

type ModalProps = {
    textButton: string;
    children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    modal: {
        position: 'relative',
        width: 400,
        backgroundColor: theme.palette.secondary.light,
        border: '2px solid ' + theme.palette.secondary.main,
        padding: theme.spacing(2, 4, 3),
        margin: '0 auto',
        top: '30%',
    },
}));

const ModalComponent = ({ textButton, children }: ModalProps) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return createPortal(
        <>
            <div>
                <button type="button" onClick={handleOpen}>
                    {textButton}
                </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <Box className={classes.modal}>{children}</Box>
                </Modal>
            </div>
        </>,
        document.body
    );
};

export default ModalComponent;
