import React, { Component } from 'react';

import {
  Modal,
  Grid,
  Card,
  Typography
} from '@material-ui/core';

import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';

import TextField from '@material-ui/core/TextField';
import convert from 'convert-units'
import round from '../../utils/round';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../CustomButtons/Button';
import CustomInput from '../CustomInput/CustomInput';




class Vitals extends Component {

  static defaultProps = {
    formatter: new Intl.NumberFormat('en-GB')
  }

  constructor(props) {
    super(props)
    this.state = {
      weight_in_kg: '',
      weight_in_lbs: '',
      height_in_cm: '',
      height_in_in: '',
      head_circum_in_cm: '',
      head_circum_in_in: '',
      waist_circum_in_cm: '',
      waist_circum_in_in: '',
      temperature_in_f: '',
      temperature_in_c: '',
      bp_systolic: '',
      bp_diastolic: '',
      pulse: '',
      respiration: '',
      temp_loc: '',
      oxygen_sat: '',
      bmi: '',
      bmi_status: '',
      other_notes: ''
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //////////////////////////////// For height//////////////////////////////////////////////////////////
  handleCmChange = evt => {
    const height_in_cm = evt.target.value.replace(/\D/g, '')
    this.setCm(height_in_cm)
  }
  handleInchChange = evt => {
    const height_in_in = evt.target.value.replace(/\D/g, '')
    this.setInch(height_in_in)
  }
  setCm = cm => {
    const inch = convert(cm).from('cm').to('in')
    this.updateHeight(cm, inch)
  }
  setInch = inch => {
    const cm = convert(inch).from('in').to('cm')
    this.updateHeight(cm, inch)
  }

  updateHeight = (height_in_cm, height_in_in) => {
    let c = round(height_in_cm)
    let i = round(height_in_in)

    if (isNaN(c) || isNaN(i) || c === 0) {
      c = i = ''
    }

    this.setState({ height_in_cm: c, height_in_in: i })
  }

  /////////////////////////////// For Head circumference //////////////////////////////////////////////////
  handleHeadCircCmChange = evt => {
    const head_circum_in_cm = evt.target.value.replace(/\D/g, '')
    this.setHeadCircCm(head_circum_in_cm)
  }
  handleHeadCircInchChange = evt => {
    const head_circum_in_in = evt.target.value.replace(/\D/g, '')
    this.setHeadCircInch(head_circum_in_in)
  }
  setHeadCircCm = cm => {
    const inch = convert(cm).from('cm').to('in')
    this.updateHeadCirc(cm, inch)
  }
  setHeadCircInch = inch => {
    const cm = convert(inch).from('in').to('cm')
    this.updateHeadCirc(cm, inch)
  }

  updateHeadCirc = (head_circum_in_cm, head_circum_in_in) => {
    let c = round(head_circum_in_cm)
    let i = round(head_circum_in_in)

    if (isNaN(c) || isNaN(i) || c === 0) {
      c = i = ''
    }

    this.setState({ head_circum_in_cm: c, head_circum_in_in: i })
  }


  /////////////////////////////// For Waist circumference //////////////////////////////////////////////////
  handleWaistCircCmChange = evt => {
    const waist_circum_in_cm = evt.target.value.replace(/\D/g, '')
    this.setWaistCircCm(waist_circum_in_cm)
  }
  handleWaistCircInchChange = evt => {
    const waist_circum_in_in = evt.target.value.replace(/\D/g, '')
    this.setWaistCircInch(waist_circum_in_in)
  }
  setWaistCircCm = cm => {
    const inch = convert(cm).from('cm').to('in')
    this.updateWaistCirc(cm, inch)
  }
  setWaistCircInch = inch => {
    const cm = convert(inch).from('in').to('cm')
    this.updateWaistCirc(cm, inch)
  }

  updateWaistCirc = (waist_circum_in_cm, waist_circum_in_in) => {
    let c = round(waist_circum_in_cm)
    let i = round(waist_circum_in_in)

    if (isNaN(c) || isNaN(i) || c === 0) {
      c = i = ''
    }

    this.setState({ waist_circum_in_cm: c, waist_circum_in_in: i })
  }

  ///////////////////////////////////  For Temperature ////////////////////////////////////////////////////
  handleFChange = evt => {
    const temperature_in_f = evt.target.value.replace(/\D/g, '')
    this.setF(temperature_in_f)
  }

  handleCChange = evt => {
    const temperature_in_c = evt.target.value.replace(/\D/g, '')
    this.setC(temperature_in_c)
  }

  setF = F => {
    const C = convert(F).from('F').to('C')
    this.updateTemp(F, C)
  }

  setC = C => {
    const F = convert(C).from('C').to('F')
    this.updateTemp(F, C)
  }

  updateTemp = (temperature_in_f, temperature_in_c) => {
    let k = round(temperature_in_f)
    let p = round(temperature_in_c)

    if (isNaN(k) || isNaN(p) || k === 0) {
      k = p = ''
    }

    this.setState({ temperature_in_f: k, temperature_in_c: p })
  }
  ///////////////////////////////////  For Weight ////////////////////////////////////////////////////
  handleKiloChange = evt => {
    const weight_in_kg = evt.target.value.replace(/\D/g, '')
    this.setKilos(weight_in_kg)
  }

  handlePoundChange = evt => {
    const weight_in_lbs = evt.target.value.replace(/\D/g, '')
    this.setPounds(weight_in_lbs)
  }

  setKilos = kilos => {
    const pounds = convert(kilos).from('kg').to('lb')
    this.updateWeights(kilos, pounds)
  }

  setPounds = pounds => {
    const kilos = convert(pounds).from('lb').to('kg')
    this.updateWeights(kilos, pounds)
  }

  updateWeights = (weight_in_kg, weight_in_lbs) => {
    let k = round(weight_in_kg)
    let p = round(weight_in_lbs)

    if (isNaN(k) || isNaN(p) || k === 0) {
      k = p = ''
    }

    this.setState({ weight_in_kg: k, weight_in_lbs: p })
  }


  ///////////////////// end ////////////////////////////////////////////

  format = (n) => {
    let x = this.props.formatter.format(n)
    if (x === '0') x = ''
    return x
  }
  onFormSubmit = e => {
    e.preventDefault();
    const { weight_in_kg,
      weight_in_lbs,
      height_in_cm,
      height_in_in,
      head_circum_in_cm,
      head_circum_in_in,
      waist_circum_in_cm,
      waist_circum_in_in,
      temperature_in_f,
      temperature_in_c,
      bp_systolic,
      bp_diastolic,
      pulse,
      respiration,
      temp_loc,
      oxygen_sat,
      bmi,
      bmi_status,
      other_notes } = this.state;

    const formData = {
      weight_in_kg,
      weight_in_lbs,
      height_in_cm,
      height_in_in,
      head_circum_in_cm,
      head_circum_in_in,
      waist_circum_in_cm,
      waist_circum_in_in,
      temperature_in_f,
      temperature_in_c,
      bp_systolic,
      bp_diastolic,
      pulse,
      respiration,
      temp_loc,
      oxygen_sat,
      bmi,
      bmi_status,
      other_notes

    }
    console.log(formData)
  };




  // if (!open) {
  //     return null;
  // }
  render() {
    const kilos = (
      <TextField
        required
        id="weight_in_kg"
        name="weight_in_kg"
        label="kg"
        fullWidth
        onChange={this.handleKiloChange}
        value={this.format(this.state.weight_in_kg)}
      />
    )

    const pounds = (

      <TextField
        required
        id="weight_in_lbs"
        name="weight_in_lbs"
        label="lbs"
        fullWidth
        onChange={this.handlePoundChange}
        value={this.format(this.state.weight_in_lbs)}
      />
    )
    const HeightCm = (
      <TextField
        required
        id="height_in_cm"
        name="height_in_cm"
        label="cm"
        fullWidth
        onChange={this.handleCmChange}
        value={this.format(this.state.height_in_cm)}
      />
    )

    const HeightInch = (

      <TextField
        required
        id="height_in_in"
        name="height_in_in"
        label="in"
        fullWidth
        onChange={this.handleInchChange}
        value={this.format(this.state.height_in_in)}
      />
    )
    const headCircumferenceCm = (

      <TextField
        required
        id="head_circum_in_cm"
        name="head_circum_in_cm"
        label="cm"
        fullWidth
        onChange={this.handleHeadCircCmChange}
        value={this.format(this.state.head_circum_in_cm)}
      />
    )
    const headCircumferenceIn = (

      <TextField
        required
        id="head_circum_in_in"
        name="head_circum_in_in"
        label="in"
        fullWidth
        onChange={this.handleHeadCircInchChange}
        value={this.format(this.state.head_circum_in_in)}
      />
    )

    const waistCircumferenceCm = (

      <TextField
        required
        id="waist_circum_in_cm"
        name="waist_circum_in_cm"
        label="cm"
        fullWidth
        onChange={this.handleWaistCircCmChange}
        value={this.format(this.state.waist_circum_in_cm)}
      />
    )
    const waistCircumferenceIn = (

      <TextField
        required
        id="waist_circum_in_in"
        name="waist_circum_in_in"
        label="in"
        fullWidth
        onChange={this.handleWaistCircInchChange}
        value={this.format(this.state.waist_circum_in_in)}
      />
    )
    const temperatureInF = (

      <TextField
        required
        id="temperature_in_f"
        name="temperature_in_f"
        label="F"
        fullWidth
        onChange={this.handleFChange}
        value={this.format(this.state.temperature_in_f)}
      />
    )
    const temperatureInC = (

      <TextField
        required
        id="temperature_in_c"
        name="temperature_in_c"
        label="C"
        fullWidth
        onChange={this.handleCChange}
        value={this.format(this.state.temperature_in_c)}
      />
    )
    const Bmi = (

      <TextField
        required
        id="bmi"
        name="bmi"
        label="kg/m^2"
        fullWidth
        onChange={this.onChange}
      />
    )
    const BmiStatus = (

      <TextField
        required
        id="bmi_status"
        name="bmi_status"
        label="type"
        fullWidth
        onChange={this.onChange}
      />
    )
    const root = {
      position: 'absolute',
      top: '51%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      outline: 'none',
      boxShadow: '0 2px 8px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)',
      width: 700,
      maxHeight: '100%',
      overflowY: 'auto',
      maxWidth: '100%'
    }
    return (
      <Modal
        onClose={this.props.onClose}
        open={this.props.open}
      >
        <Card style={root}>
          <div style={{ textAlign: "center", fontSize: 20 }}>
            <label>Vitals</label>
          </div>
          <CardBody>
            <form onSubmit={this.onFormSubmit} >
              <Grid container spacing={1}>
                <Grid item xs={12} sm={2} md={2} >
                  <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                    Weight :
                   </Typography>
                </Grid>
                <Grid item xs={12} sm={5} md={5} >
                  {kilos}
                </Grid>
                <Grid item xs={12} sm={5} md={5} >
                  {pounds}
                </Grid>
                <Grid item xs={12} sm={2} md={2} >
                  <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                    Height :
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={5} md={5} >
                  {HeightCm}
                </Grid>
                <Grid item xs={12} sm={5} md={5} >
                  {HeightInch}
                </Grid>
                <Grid item xs={12} sm={2} md={2} >
                  <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                    BP Systolic :
                                </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4} >
                  <TextField
                    required
                    id="bp_systolic"
                    name="bp_systolic"
                    label="mmHg"
                    required
                    // value={values.bp_systolic}
                    onChange={this.onChange}

                  />
                </Grid>
                <Grid item xs={12} sm={2} md={2} >
                  <Typography style={{ fontWeight: 500, marginTop: '30px', marginLeft: '32px' }} variant="body2">
                    BP Diastolic :
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4} >
                  <TextField
                    required
                    id="bp_diastolic"
                    name="bp_diastolic"
                    label="mmHg"
                    required
                    // value={values.bp_diastolic}
                    onChange={this.onChange}

                  />
                </Grid>
                <Grid item xs={12} sm={2} md={2} >
                  <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                    Pulse :
                </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4} >
                  <TextField
                    required
                    id="pulse"
                    name="pulse"
                    label="per min"
                    required
                    // value={values.pulse}
                    onChange={this.onChange}

                  />
                </Grid>
                <Grid item xs={12} sm={2} md={2} >
                  <Typography style={{ fontWeight: 500, marginTop: '30px', marginLeft: '32px' }} variant="body2">
                    Respiration :
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4} >
                  <TextField
                    required
                    id="respiration"
                    name="respiration"
                    label="per min"
                    required
                    // value={values.respiration}
                    onChange={this.onChange}

                  />
                </Grid>
                <Grid item xs={12} sm={2} md={2} >
                  <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                    Temperature :
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={5} md={5} >
                  {temperatureInF}
                </Grid>
                <Grid item xs={12} sm={5} md={5} >
                  {temperatureInC}
                </Grid>
                <Grid item xs={12} sm={2} md={2} >
                  <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                    Temp Location:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4} >
                  <TextField style={{ minWidth: 220 }}
                    id="temp_loc"
                    required
                    select
                    name="temp_loc"
                    label="Select"
                    defaultValue=""
                    // value={values.temp_loc}
                    onChange={this.onChange}

                  >
                    <MenuItem value={1}>Unassigned</MenuItem>
                    <MenuItem value={2}>Oral</MenuItem>
                    <MenuItem value={3}>Tympanic Membrane</MenuItem>
                    <MenuItem value={4}>Rectal</MenuItem>
                    <MenuItem value={5}>Axillary</MenuItem>
                    <MenuItem value={6}>Temporal Artery</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={2} md={2} >
                  <Typography style={{ fontWeight: 500, marginTop: '12px', marginLeft: '26px' }} variant="body2">
                    Oxygen Saturation :
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4} >
                  <TextField
                    required
                    id="oxygen_sat"
                    name="oxygen_sat"
                    label="%"
                    // value={values.oxygen_sat}
                    onChange={this.onChange}

                  />
                </Grid>
                <Grid item xs={12} sm={2} md={2} >
                  <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                    Head Circumference :
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={5} md={5} >
                  {headCircumferenceCm}
                </Grid>
                <Grid item xs={12} sm={5} md={5} >
                  {headCircumferenceIn}
                </Grid>
                <Grid item xs={12} sm={2} md={2} >
                  <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                    Waist Circumference :
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5} md={5} >
                  {waistCircumferenceCm}
                </Grid>
                <Grid item xs={12} sm={5} md={5} >
                  {waistCircumferenceIn}
                </Grid>
                <Grid item xs={12} sm={2} md={2} >
                  <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                    Bmi :
                </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4} >
                  {Bmi}
                </Grid>
                <Grid item xs={12} sm={2} md={2} >
                  <Typography style={{ fontWeight: 500, marginTop: '30px', marginLeft: '32px' }} variant="body2">
                    BMI Status:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4} >
                  {BmiStatus}
                </Grid>
                <Grid item xs={12} sm={2} md={2} >
                  <Typography style={{ fontWeight: 500, marginTop: '23px' }} variant="body2">
                    Other Notes:
                   </Typography>
                </Grid>
                <Grid item xs={12} sm={10} md={10} style={{ marginTop: '8px' }} >
                  <TextField
                    required
                    id="other_notes"
                    name="other_notes"
                    label=""
                    fullWidth
                    // value={values.other_notes}
                    onChange={this.onChange}

                  />
                </Grid>
                <CardFooter style={{ float: 'right' }}>
                  <Button style={{ width: 72 }} type="submit" >Submit</Button>
                  <Button style={{ width: 72 }} onClick={this.props.onClose} >Cancel</Button>
                </CardFooter>

              </Grid>

            </form>
          </CardBody>
        </Card>

      </Modal>
    );
  }
};

// Vitals.defaultProps = {
//     open: false,
//     onClose: () => { }
// };

export default Vitals;
