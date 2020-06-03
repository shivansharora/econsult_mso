import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Modal,
    Grid,
    Card
} from '@material-ui/core';
import moment from 'moment';
import useForm from '../../customHooks/useForm';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';

import TextField from '@material-ui/core/TextField';
import { useFormFields } from '../../customHooks/useFormFields';
import Button from '../CustomButtons/Button';
import validate from './Validations/Allergy'


const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: '46%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 'none',
        boxShadow: theme.shadows[20],
        width: 620,
        maxHeight: '100%',
        overflowY: 'auto',
        maxWidth: '100%'
    },
    container: {
        marginTop: theme.spacing(3)
    },
    danger: {
        color: 'brown',
        marginTop: 4,
        fontSize: 15
    }
}));

const Allergy = props => {
    const { open, onClose, className } = props;

    const classes = useStyles();
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(Aller, validate);


    function Aller() {
        const formData = {
            observation: values.observation,

        };

        console.log(JSON.stringify(formData));
    }


    if (!open) {
        return null;
    }
    return (
        <Modal
            onClose={onClose}
            open={open}
        >
            <Card className={classes.root}>
            <div style={{ textAlign:"center",fontSize:20 }}>
                <label>Allergy</label>
                </div>
                <CardBody>
                    <form onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12} >
                                <TextField
                                    id="observation"
                                    name="observation"
                                    label="Observation"
                                    multiline
                                    rowsMax="4"
                                    value={values.observation || ''}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                {errors.observation && (
                                    <p className={classes.danger}>{errors.observation}</p>
                                )}
                            </Grid>


                        </Grid>
                        <CardFooter style={{ float: 'right' }}>
                            <Button style={{ width: 72 }} type="submit" >Submit</Button>
                            <Button style={{ width: 72 }} onClick={onClose} type="submit" >Cancel</Button>
                        </CardFooter>
                    </form>
                </CardBody>
            </Card>

        </Modal>
    );
};

Allergy.defaultProps = {
    open: false,
    onClose: () => { }
};

export default Allergy;
