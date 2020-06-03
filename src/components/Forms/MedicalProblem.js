import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Modal,
    Grid,
    Card,
} from '@material-ui/core';
import moment from 'moment';

import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';

import TextField from '@material-ui/core/TextField';
import validate from '../Forms/Validations/MedicalProblem'
import useForm from '../../customHooks/useForm';
import MultiSelect from "react-multi-select-component";
import Button from '../CustomButtons/Button';
import CustomInput from '../CustomInput/CustomInput';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: '52%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 'none',
        boxShadow: theme.shadows[20],
        width: 670,
        maxHeight: '100%',
        overflowY: 'auto',
        maxWidth: '100%'
    },
    container: {
        marginTop: theme.spacing(3)
    },
    formControl: {
        minWidth: 270,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
    danger: {
        color: 'brown',
        marginTop: 4,
        fontSize: 15
    }
}));


const MedicalProblem = props => {

    const names = [
        { label: "Morning", value: "Morning" },
        { label: "Walking", value: "Walking" },
        { label: "Evening", value: "Evening" },

    ];

    const asso_symtom = [
        { label: "Cold", value: "Cold" },
        { label: "Cough", value: "Cough" },
        { label: "Headache", value: "Headache" },

    ];


    const { open, onClose, className, ...rest } = props;
    const classes = useStyles()
    const mindate = new Date(moment());
    console.log(mindate);


    const [relievingFactor, setRelievingFactor] = useState([]);
    const [aggravatingFactor, setAggravatingFactor] = useState([]);
    const [associatedSymtom, setAssociatedSymtom] = useState([]);

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(medicalProblem, validate);


    function medicalProblem() {
        const formData = {
            duration: values.duration,
            duration_type: values.duration_type,
            progression: values.progression,
            onset: values.onset,
            aggravating_factor: values.aggravatingFactor,
            relieving_factor: values.relievingFactor,
            current_status: values.current_status,
            // start_datetime: start_datetime,
            // end_datetime: end_datetime,
            // associated_symtoms: associatedSymtoms,
        }
        console.log(formData);
    }


    const defaultProps = {
        options: symtom,
        getOptionLabel: option => option.title,
    };

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
                <label>Medical Problem</label>
                </div>
                <CardBody>
                    <form onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={6} >
                                <Autocomplete style={{ marginTop: -13 }}
                                    {...defaultProps}
                                    id=" chief_complaint"
                                    // chief complaint
                                    renderInput={params => <TextField {...params} label="Chief Complaint" margin="normal" />}
                                />
                                {errors.name && (
                                    <p className={classes.danger}>{errors.name}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} >
                                <CustomInput
                                    required
                                    id="symptom_trans"
                                    name="symptom_trans"
                                    label="Hindi Translation"
                                    inputProps={{
                                        disabled: true
                                    }}
                                    value="बुखार"

                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} >
                                <CustomInput
                                    required
                                    id="duration"
                                    name="duration"
                                    label="Duration"
                                    value={values.duration || ''}
                                    changed={handleChange}

                                />
                                {errors.duration && (
                                    <p className={classes.danger}>{errors.duration}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} >
                                <TextField style={{ minWidth: 275 }}
                                    id="duration_type"
                                    select
                                    name="duration_type"
                                    label="Duration Type"
                                    value={values.duration_type || ''}
                                    onChange={handleChange}

                                >
                                    <MenuItem value={10}>Hours</MenuItem>
                                    <MenuItem value={20}>Days</MenuItem>
                                    <MenuItem value={30}>Weeks</MenuItem>
                                    <MenuItem value={40}>Months</MenuItem>
                                </TextField>
                                {errors.duration_type && (
                                    <p className={classes.danger}>{errors.duration_type}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} >
                                <TextField style={{ minWidth: 275 }}
                                    id="progression"
                                    select
                                    name="progression"
                                    label="Progression"
                                    value={values.progression || ''}
                                    onChange={handleChange}

                                >
                                    <MenuItem value={10}>Increasing</MenuItem>
                                    <MenuItem value={20}>Decreasing</MenuItem>
                                    <MenuItem value={30}>Status Quo</MenuItem>
                                </TextField>
                                {errors.progression && (
                                    <p className={classes.danger}>{errors.progression}</p>
                                )}
                            </Grid>

                            <Grid item xs={12} sm={6} md={6} >
                                <CustomInput
                                    required
                                    id="progression_trans"
                                    name="progression_trans"
                                    label="Hindi Translation"
                                    inputProps={{
                                        disabled: true
                                    }}
                                    value="बढ़ना"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} >
                                <TextField style={{ minWidth: 275 }}
                                    id="onset"
                                    select
                                    name="onset"
                                    label="Occurrence"
                                    value={values.onset || ''}
                                    onChange={handleChange}

                                >
                                    <MenuItem value={30}>First Time </MenuItem>
                                    <MenuItem value={20}>Chronic</MenuItem>
                                    <MenuItem value={10}>Acute on Chronic</MenuItem>
                                </TextField>
                                {errors.onset && (
                                    <p className={classes.danger}>{errors.onset}</p>
                                )}
                            </Grid>

                            <Grid item xs={12} sm={6} md={6} >
                                <CustomInput
                                    required
                                    id="occurence_trans"
                                    name="occurence_trans"
                                    label="Hindi Translation"
                                    inputProps={{
                                        disabled: true
                                    }}
                                    value="तीव्र"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} >
                                <div style={{ marginLeft: -7, width: 290 }}>
                                    <label>Aggravating Factor</label>
                                    <MultiSelect
                                        required
                                        id="aggravating_factor"
                                        options={names}
                                        value={aggravatingFactor}

                                        onChange={setAggravatingFactor}
                                        labelledBy="Aggravating Factor"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} >
                                <CustomInput
                                    required
                                    id="aggravating_factor_trans"
                                    name="aggravating_factor_trans"
                                    label="Hindi Translation"
                                    inputProps={{
                                        disabled: true
                                    }}
                                    value=""

                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} >
                                <div style={{ marginLeft: -7, width: 290 }}>
                                    <label>Relieving Factor</label>
                                    <MultiSelect
                                        required
                                        id="relieving_factor"
                                        options={names}
                                        value={relievingFactor}

                                        onChange={setRelievingFactor}
                                        labelledBy="Relieving Factor"
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} >
                                <CustomInput
                                    required
                                    id="relieving_factor_trans"
                                    name="relieving_factor_trans"
                                    label="Hindi Translation"
                                    inputProps={{
                                        disabled: true
                                    }}
                                    value=""

                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} >
                                <TextField style={{ minWidth: 275 }}
                                    id="current_status"
                                    select
                                    name="current_status"
                                    label="Current Status"
                                    value={values.current_status || ''}
                                    onChange={handleChange}
                                >
                                    <MenuItem value='Resolved'>Resolved</MenuItem>
                                    <MenuItem value={20}>Improved</MenuItem>
                                    <MenuItem value={30}>Status Quo</MenuItem>
                                    <MenuItem value={30}>Worse</MenuItem>
                                    <MenuItem value={30}>Pending Followup</MenuItem>
                                </TextField>
                                {errors.current_status && (
                                    <p className={classes.danger}>{errors.current_status}</p>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} >
                                <CustomInput
                                    required
                                    id="current_status_trans"
                                    name="current_status_trans"
                                    label="Hindi Translation"
                                    inputProps={{
                                        disabled: true
                                    }}
                                    value="उन्नत"

                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} >
                                <TextField
                                    id="start_datetime"
                                    label="Start Date"
                                    type="date"
                                    name="start_datetime"
                                    value={values.start_datetime || ''} onChange={handleChange}
                                    className={classes.textField}
                                    // InputProps={{ 
                                    //     inputProps: { min:`${mindate}`} 
                                    // }}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />

                                {errors.start_datetime && (
                                    <p className={classes.danger}>{errors.start_datetime}</p>
                                )}
                            </Grid>

                            <Grid item xs={12} sm={6} md={6} >
                                {values.current_status === 'Resolved' && (
                                    <React.Fragment>
                                        <TextField
                                            id="end_datetime"
                                            label="End Date"
                                            type="date"
                                            name="end_datetime"
                                            value={values.end_datetime || ''} onChange={handleChange}
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true
                                            }}
                                        />

                                        {errors.end_datetime && (
                                            <p className={classes.danger}>{errors.end_datetime}</p>
                                        )}
                                    </React.Fragment>
                                )}
                            </Grid>

                            <Grid item xs={12} sm={6} md={6} >
                                <div style={{ marginLeft: -7, width: 290 }}>
                                    <label>Associated Symtom</label>
                                    <MultiSelect
                                        required
                                        id="associated_symtoms"
                                        options={asso_symtom}
                                        value={associatedSymtom}

                                        onChange={setAssociatedSymtom}
                                        labelledBy="Associated Symtom"
                                    />
                                </div>
                                {/* {errors.associated_symtoms && (
                                    <p className={classes.danger}>{errors.associated_symtoms}</p>
                                )} */}
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} style={{ marginTop: '3px' }}>
                                <CustomInput
                                    required
                                    id="associated_symtoms_trans"
                                    name="associated_symtoms_trans"
                                    label="Hindi Translation"
                                    inputProps={{
                                        disabled: true,

                                        className: classes.multilineColor

                                    }}
                                    value=""
                                    changed={handleChange}

                                />
                            </Grid>
                            <CardFooter style={{ float: 'right' }}>
                                <Button style={{ width: 72 }} type="submit" >Submit</Button>
                                <Button style={{ width: 72 }} onClick={onClose} type="submit" >Cancel</Button>
                            </CardFooter>
                        </Grid>
                    </form>
                </CardBody>
            </Card>

        </Modal>
    );
};

MedicalProblem.defaultProps = {
    open: false,
    onClose: () => { }
};

export default MedicalProblem;


const symtom = [
    { title: 'Fever' },
    { title: 'Cold' },
    { title: 'Cough' },
    { title: 'Headache' },
    { title: 'Stomache' },
];