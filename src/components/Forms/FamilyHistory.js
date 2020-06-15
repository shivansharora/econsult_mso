import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Modal,
    Grid,
    Card,
    Typography
} from '@material-ui/core';
import moment from 'moment';


import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import validate from './Validations/FamilyHistory'
import TextField from '@material-ui/core/TextField';
import useForm from '../../customHooks/useForm';

import MenuItem from '@material-ui/core/MenuItem';
import Button from '../CustomButtons/Button';



const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 'none',
        boxShadow: theme.shadows[20],
        width: 856,
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

const FamilyHistory = props => {
    const { open, onClose, className } = props;

    const classes = useStyles();
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(Family, validate);


    function Family() {
        const formData = {
            father_disease: values.father_disease,
            father_desc: values.father_desc,
            mother_disease: values.mother_disease,
            mother_desc: values.mother_desc,
            sibling_disease: values.sibling_disease,
            sibling_desc: values.sibling_desc,
            spouce_disease: values.spouce_disease,
            spouce_desc: values.spouce_desc

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
                <label>Family History</label>
                </div>
                <CardBody>
                    <form onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={2} md={2} >
                                <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                    Father :
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={5} md={5} >
                                <TextField
                                    id="father_disease"
                                    name="father_disease"
                                    label="Disease Name"
                                    value={values.father_disease || ''}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                {errors.father_disease && (
                                    <p className={classes.danger}>{errors.father_disease}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={5} md={5} >
                                <TextField
                                    id="father_desc"
                                    name="father_desc"
                                    label="Description"
                                    multiline
                                    rowsMax="4"
                                    value={values.father_desc || ''}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                {errors.father_desc && (
                                    <p className={classes.danger}>{errors.father_desc}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={2} md={2} >
                                <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                    Mother :
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={5} md={5} >
                                <TextField
                                    id="mother_disease"
                                    name="mother_disease"
                                    label="Disease Name"
                                    value={values.mother_disease || ''}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                {errors.mother_disease && (
                                    <p className={classes.danger}>{errors.mother_disease}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={5} md={5} >
                                <TextField
                                    id="mother_desc"
                                    name="mother_desc"
                                    label="Description"
                                    multiline
                                    rowsMax="4"
                                    value={values.mother_desc || ''}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                {errors.mother_desc && (
                                    <p className={classes.danger}>{errors.mother_desc}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={2} md={2} >
                                <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                    Sibling :
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={5} md={5} >
                            <TextField
                                    id="sibling_disease"
                                    name="sibling_disease"
                                    label="Disease Name"
                                    value={values.sibling_disease || ''}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                {errors.sibling_disease && (
                                    <p className={classes.danger}>{errors.sibling_disease}</p>
                                )}
                            </Grid>
                           
                            <Grid item xs={12} sm={5} md={5} >
                                <TextField
                                    id="sibling_desc"
                                    name="sibling_desc"
                                    label="Description"
                                    multiline
                                    rowsMax="4"
                                    value={values.sibling_desc || ''}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                {errors.sibling_desc && (
                                    <p className={classes.danger}>{errors.sibling_desc}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={2} md={2} >
                                <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                                    Spouce :
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={5} md={5} >
                            <TextField
                                    id="spouce_disease"
                                    name="spouce_disease"
                                    label="Disease Name"
                                    value={values.spouce_disease || ''}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                {errors.spouce_disease && (
                                    <p className={classes.danger}>{errors.spouce_disease}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={5} md={5} >
                                <TextField
                                    id="spouce_desc"
                                    name="spouce_desc"
                                    label="Description"
                                    multiline
                                    rowsMax="4"
                                    value={values.spouce_desc || ''}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                {errors.spouce_desc && (
                                    <p className={classes.danger}>{errors.spouce_desc}</p>
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

FamilyHistory.defaultProps = {
    open: false,
    onClose: () => { }
};

export default FamilyHistory;
