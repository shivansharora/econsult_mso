import React from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

// import moment from 'moment';

import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';

import { useForm, Controller } from "react-hook-form";

import Button from '../CustomButtons/Button';
// import CustomInput from '../CustomInput/CustomInput';


import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormHelperText,
    TextField,
    Typography,
    Modal,
    Grid,
    Card
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: '46%',
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
    }
}));

const LifeStyle = props => {
    const { open, onClose } = props;

    const classes = useStyles();

    const { handleSubmit, errors, control, watch } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data));
    };

    const alcohol_current_status = watch('alcohol_current_status');
    const tobacco_current_status = watch('tobacco_current_status');
    const sleep_current_status = watch('sleep_current_status')


    const AlcoholFrequency = () => {
        return (
            <Grid item xs={12} sm={2} md={2} >
                <FormControl
                    style={{ minWidth: 86 }}
                    error={Boolean(errors.alcohol_frequency)}
                >
                    <InputLabel id="demo-simple-select-label">
                        Frequency
            </InputLabel>

                    <Controller
                        as={
                            <Select>
                                <MenuItem value={30}>Daily</MenuItem>
                                <MenuItem value={10}>Twice a Week</MenuItem>
                                <MenuItem value={20}>Once a Month</MenuItem>
                            </Select>
                        }
                        name="alcohol_frequency"
                        rules={{ required: "Frequency is required" }}
                        control={control}
                        defaultValue=""
                    />
                    <FormHelperText>
                        {errors.alcohol_frequency && errors.alcohol_frequency.message}
                    </FormHelperText>
                </FormControl>
            </Grid>
        )
    }

    const AlcoholQuantity = () => {
        return (
            <Grid item xs={12} sm={2} md={2} >
                <Controller
                    as={<TextField />}
                    error={Boolean(errors.alcohol_quantity)}
                    name="alcohol_quantity"
                    rules={{ required: "Quantity is required" }}
                    control={control}
                    defaultValue=""
                    label="Quantity"
                    type="text"
                    helperText={errors.alcohol_quantity && errors.alcohol_quantity.message}
                    fullWidth
                />
            </Grid>
        )
    }

    const AlcoholStartDate = () => {
        return (
            <Grid item xs={12} sm={2} md={2} >
                <Controller
                    as={<TextField />}
                    error={Boolean(errors.alcohol_start_datetime)}
                    name="alcohol_start_datetime"
                    style={{ width: 136, marginTop: 14 }}
                    label="Start Date"
                    type="date"
                    rules={{ required: "Start Date is required" }}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    control={control}
                    defaultValue=""
                    helperText={errors.alcohol_start_datetime && errors.alcohol_start_datetime.message}
                />
            </Grid>
        )
    }

    const AlcoholEndDate = () => {
        return (
            <Grid item xs={12} sm={2} md={2} >
                <Controller
                    as={<TextField />}
                    error={Boolean(errors.alcohol_end_datetime)}
                    name="alcohol_end_datetime"
                    label="End Date"
                    style={{ width: 136, marginTop: 14 }}
                    type="date"
                    rules={{ required: "End Date is required" }}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    control={control}
                    defaultValue=""
                    helperText={errors.alcohol_end_datetime && errors.alcohol_end_datetime.message}
                />
            </Grid>
        )
    }

    const TobaccoFrequency = () => {
        return (
            <Grid item xs={12} sm={2} md={2} >
                <FormControl
                    style={{ minWidth: 86 }}
                    error={Boolean(errors.tobacco_frequency)}
                >
                    <InputLabel id="demo-simple-select-label">
                        Frequency
            </InputLabel>

                    <Controller
                        as={
                            <Select>
                                <MenuItem value={30}>Daily</MenuItem>
                                <MenuItem value={10}>Twice a Week</MenuItem>
                                <MenuItem value={20}>Once a Month</MenuItem>
                            </Select>
                        }
                        name="tobacco_frequency"
                        rules={{ required: "Frequency is required" }}
                        control={control}
                        defaultValue=""
                    />
                    <FormHelperText>
                        {errors.tobacco_frequency && errors.tobacco_frequency.message}
                    </FormHelperText>
                </FormControl>
            </Grid>
        )
    }

    const TobaccoQuantity = () => {
        return (
            <Grid item xs={12} sm={2} md={2} >
                <Controller
                    as={<TextField />}
                    error={Boolean(errors.tobacco_quantity)}
                    name="tobacco_quantity"
                    rules={{ required: "Quantity is required" }}
                    control={control}
                    defaultValue=""
                    label="Quantity"
                    type="text"
                    helperText={errors.tobacco_quantity && errors.tobacco_quantity.message}
                    fullWidth
                />
            </Grid>
        )
    }

    const TobaccoStartDate = () => {
        return (
            <Grid item xs={12} sm={2} md={2} >
                <Controller
                    as={<TextField />}
                    error={Boolean(errors.tobacco_start_datetime)}
                    name="tobacco_start_datetime"
                    style={{ width: 136, marginTop: 14 }}
                    label="Start Date"
                    type="date"
                    rules={{ required: "Start Date is required" }}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    control={control}
                    defaultValue=""
                    helperText={errors.tobacco_start_datetime && errors.tobacco_start_datetime.message}
                />
            </Grid>
        )
    }

    const TobaccoEndDate = () => {
        return (
            <Grid item xs={12} sm={2} md={2} >
                <Controller
                    as={<TextField />}
                    error={Boolean(errors.tobacco__end_datetime)}
                    name="tobacco__end_datetime"
                    label="End Date"
                    style={{ width: 136, marginTop: 14 }}
                    type="date"
                    rules={{ required: "End Date is required" }}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    control={control}
                    defaultValue=""
                    helperText={errors.tobacco__end_datetime && errors.tobacco__end_datetime.message}
                />
            </Grid>
        )
    }
    const SleepFrequency = () => {
        return (
            <Grid item xs={12} sm={2} md={2} >
                <FormControl
                    style={{ minWidth: 86 }}
                    error={Boolean(errors.sleep_frequency)}
                >
                    <InputLabel id="demo-simple-select-label">
                        Frequency
            </InputLabel>

                    <Controller
                        as={
                            <Select>
                                <MenuItem value={30}>Daily</MenuItem>
                                <MenuItem value={10}>Twice a Week</MenuItem>
                                <MenuItem value={20}>Once a Month</MenuItem>
                            </Select>
                        }
                        name="sleep_frequency"
                        rules={{ required: "Frequency is required" }}
                        control={control}
                        defaultValue=""
                    />
                    <FormHelperText>
                        {errors.sleep_frequency && errors.sleep_frequency.message}
                    </FormHelperText>
                </FormControl>
            </Grid>
        )
    }

    const SleepQuantity = () => {
        return (
            <Grid item xs={12} sm={2} md={2} >
                <Controller
                    as={<TextField />}
                    error={Boolean(errors.sleep_quantity)}
                    name="sleep_quantity"
                    rules={{ required: "Quantity is required" }}
                    control={control}
                    defaultValue=""
                    label="Quantity"
                    type="text"
                    helperText={errors.sleep_quantity && errors.sleep_quantity.message}
                    fullWidth
                />
            </Grid>
        )
    }

    const SleepStartDate = () => {
        return (
            <Grid item xs={12} sm={2} md={2} >
                <Controller
                    as={<TextField />}
                    error={Boolean(errors.sleep_start_datetime)}
                    name="sleep_start_datetime"
                    style={{ width: 136, marginTop: 14 }}
                    label="Start Date"
                    type="date"
                    rules={{ required: "Start Date is required" }}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    control={control}
                    defaultValue=""
                    helperText={errors.sleep_start_datetime && errors.sleep_start_datetime.message}
                />
            </Grid>
        )
    }

    const SleepEndDate = () => {
        return (
            <Grid item xs={12} sm={2} md={2} >
                <Controller
                    as={<TextField />}
                    error={Boolean(errors.sleep_end_datetime)}
                    name="sleep_end_datetime"
                    label="End Date"
                    style={{ width: 136, marginTop: 14 }}
                    type="date"
                    rules={{ required: "End Date is required" }}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    control={control}
                    defaultValue=""
                    helperText={errors.sleep_end_datetime && errors.sleep_end_datetime.message}
                />
            </Grid>
        )
    }

    if (!open) {
        return null;
    }
    return (
        <Modal
            onClose={onClose}
            open={open}
        >
            <Card
                className={classes.root} >
                     <div style={{ textAlign:"center",fontSize:20 }}>
                <label>LifeStyle</label>
                </div>
                <CardBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4} md={4} >
                                <Grid item xs={12} sm={2} md={2} >
                                    <Typography style={{ fontWeight: 600 }} variant="body2">
                                        Alcohol
                                </Typography>
                                </Grid>
                                <Grid item xs={12} sm={2} md={2} >
                                    <FormControl
                                        style={{ minWidth: 120 }}
                                        error={Boolean(errors.alcohol_current_status)}
                                    >
                                        <InputLabel id="demo-simple-select-label">
                                            Current Status
                                </InputLabel>

                                        <Controller
                                            as={
                                                <Select>
                                                    <MenuItem value='Current'>Current</MenuItem>
                                                    <MenuItem value={10}>Never</MenuItem>
                                                    <MenuItem value='Quit'>Quit</MenuItem>
                                                </Select>
                                            }
                                            name="alcohol_current_status"
                                            rules={{ required: "Current Status is required" }}
                                            control={control}
                                            defaultValue=""
                                        />
                                        <FormHelperText>
                                            {errors.alcohol_current_status && errors.alcohol_current_status.message}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                                {alcohol_current_status === 'Quit' && (
                                    <React.Fragment>
                                        {AlcoholFrequency()}
                                        {AlcoholQuantity()}
                                        {AlcoholStartDate()}
                                        {AlcoholEndDate()}
                                    </React.Fragment>
                                )}
                                {alcohol_current_status === 'Current' && (
                                    <React.Fragment>
                                        {AlcoholFrequency()}
                                        {AlcoholQuantity()}
                                        {AlcoholStartDate()}
                                        {/* {AlcoholEndDate()} */}
                                    </React.Fragment>
                                )}

                            </Grid>
                            <Grid item xs={12} sm={4} md={4} >
                                <Grid item xs={12} sm={2} md={2} >
                                    <Typography style={{ fontWeight: 600 }} variant="body2">
                                        Tobacco
                                </Typography>
                                </Grid>
                                <Grid item xs={12} sm={2} md={2} >
                                    <FormControl
                                        style={{ minWidth: 120 }}
                                        error={Boolean(errors.tobacco_current_status)}
                                    >
                                        <InputLabel id="demo-simple-select-label">
                                            Current Status
                                </InputLabel>

                                        <Controller
                                            as={
                                                <Select>
                                                    <MenuItem value='Current'>Current</MenuItem>
                                                    <MenuItem value={10}>Never</MenuItem>
                                                    <MenuItem value='Quit'>Quit</MenuItem>
                                                </Select>
                                            }
                                            name="tobacco_current_status"
                                            rules={{ required: "Current Status is required" }}
                                            control={control}
                                            defaultValue=""
                                        />
                                        <FormHelperText>
                                            {errors.tobacco_current_status && errors.tobacco_current_status.message}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                                {tobacco_current_status === 'Quit' && (
                                    <React.Fragment>
                                        {TobaccoFrequency()}
                                        {TobaccoQuantity()}
                                        {TobaccoStartDate()}
                                        {TobaccoEndDate()}
                                    </React.Fragment>
                                )}
                                {tobacco_current_status === 'Current' && (
                                    <React.Fragment>
                                        {TobaccoFrequency()}
                                        {TobaccoQuantity()}
                                        {TobaccoStartDate()}
                                        {/* {AlcoholEndDate()} */}
                                    </React.Fragment>
                                )}

                            </Grid>
                            <Grid item xs={12} sm={4} md={4} >
                                <Grid item xs={12} sm={2} md={2} >
                                    <Typography style={{ fontWeight: 600 }} variant="body2">
                                        Sleep Pattern
                                </Typography>
                                </Grid>
                                <Grid item xs={12} sm={2} md={2} >
                                    <FormControl
                                        style={{ minWidth: 120 }}
                                        error={Boolean(errors.sleep_current_status)}
                                    >
                                        <InputLabel id="demo-simple-select-label">
                                            Current Status
                                </InputLabel>

                                        <Controller
                                            as={
                                                <Select>
                                                    <MenuItem value='Current'>Current</MenuItem>
                                                    <MenuItem value={10}>Never</MenuItem>
                                                    <MenuItem value='Quit'>Quit</MenuItem>
                                                </Select>
                                            }
                                            name="sleep_current_status"
                                            rules={{ required: "Current Status is required" }}
                                            control={control}
                                            defaultValue=""
                                        />
                                        <FormHelperText>
                                            {errors.sleep_current_status && errors.sleep_current_status.message}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                                {sleep_current_status === 'Quit' && (
                                    <React.Fragment>
                                        {SleepFrequency()}
                                        {SleepQuantity()}
                                        {SleepStartDate()}
                                        {SleepEndDate()}
                                    </React.Fragment>
                                )}
                                {sleep_current_status === 'Current' && (
                                    <React.Fragment>
                                        {SleepFrequency()}
                                        {SleepQuantity()}
                                        {SleepStartDate()}
                                        {/* {AlcoholEndDate()} */}
                                    </React.Fragment>
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

LifeStyle.defaultProps = {
    open: false,
    onClose: () => { }
};

export default LifeStyle;
