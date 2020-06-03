import React from "react";
import './CurrentMedication.css';
import CardBody from '../../components/Card/CardBody';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import MenuItem from '@material-ui/core/MenuItem';
import { Modal, Card } from '@material-ui/core';
import CardFooter from '../../components/Card/CardFooter';
import Button from '../CustomButtons/Button';


class CurrentMedication extends React.Component {
    state = {
        rows: [{}]
    };
    handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
            [name]: value
        };
        this.setState({
            rows
        });
    };
    handleAddRow = () => {
        const item = {
            name: "",
            mobile: ""
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };
    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };
    handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
    }
    render() {
        const root = {
            position: 'absolute',
            top: '46%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            outline: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)',
            width: 865,
            maxHeight: '100%',
            overflowY: 'auto',
            maxWidth: '100%'
        }
        return (
            <Modal

                open={this.props.open}
            >
                {/* <div style={{ flexGrow: 1 }}> */}
                <Card style={root}>
                <div style={{ textAlign:"center",fontSize:20 }}>
                <label>Current Medication</label>
                </div>
                    <CardBody>
                        <form noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={12} >

                                    <table
                                        className="crud"
                                        id="tab_logic"
                                    >
                                        <thead>
                                            <tr >
                                                <th className="text-center">Drug Name</th>
                                                <th className="text-center">Strength</th>
                                                <th className="text-center">Drug Type </th>
                                                {/* <th className="text-center">Dose Unit</th> */}
                                                <th className="text-center">Frequency</th>
                                                <th className="text-center">Duration </th>
                                                <th className="text-center">Action </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.rows.map((item, idx) => (
                                                <tr id="addr0" key={idx} >
                                                    {/* <td >{idx}</td> */}
                                                    <td onClick={this.handleAddRow}>
                                                        <TextField
                                                            id="drug_name"
                                                            placeholder="Drug Name"
                                                            variant="outlined"
                                                            name="drug_name"
                                                            value={this.state.rows[idx].name}
                                                            onChange={this.handleChange(idx)}
                                                        />
                                                    </td >
                                                    <td >
                                                        <TextField
                                                            id="strength"
                                                            placeholder="Strength"
                                                            label="mg"
                                                            variant="outlined"
                                                            name="strength"
                                                            value={this.state.rows[idx].name}
                                                            onChange={this.handleChange(idx)}
                                                        />
                                                    </td >
                                                    <td >
                                                        <TextField style={{ minWidth: 154 }}
                                                            id="dose_type"
                                                            select
                                                            name="dose_type"
                                                            label="Dose Type"
                                                            value={this.state.rows[idx].name}
                                                            onChange={this.handleChange(idx)}

                                                        >

                                                            <MenuItem value={10}>Cap</MenuItem>
                                                            <MenuItem value={20}>Tab</MenuItem>
                                                            <MenuItem value={30}>Suspension</MenuItem>
                                                            <MenuItem value={30}>Drops</MenuItem>
                                                            <MenuItem value={30}>Ointment</MenuItem>

                                                        </TextField>
                                                    </td >
                                                    <td >
                                                        <TextField style={{ minWidth: 154 }}
                                                            id="frequency"
                                                            select
                                                            name="frequency"
                                                            label="Frequency"
                                                            value={this.state.rows[idx].name}
                                                            onChange={this.handleChange(idx)}

                                                        >

                                                            <MenuItem value={10}>OD</MenuItem>
                                                            <MenuItem value={20}>BD</MenuItem>
                                                            <MenuItem value={30}>TDS</MenuItem>
                                                            <MenuItem value={30}>QID</MenuItem>
                                                            <MenuItem value={30}>SOS</MenuItem>
                                                            <MenuItem value={30}>HS</MenuItem>
                                                            <MenuItem value={30}>STAT</MenuItem>

                                                        </TextField>
                                                    </td >
                                                    <td >
                                                        <TextField
                                                            id="duration"
                                                            placeholder="Duration"
                                                            variant="outlined"
                                                            name="duration"
                                                            value={this.state.rows[idx].name}
                                                            onChange={this.handleChange(idx)}
                                                        />
                                                    </td >
                                                    <td>

                                                        <CancelTwoToneIcon onClick={this.handleRemoveSpecificRow(idx)} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <AddCircleTwoToneIcon onClick={this.handleAddRow} />


                                </Grid>
                                <CardFooter style={{ float: 'right' }}>
                                    <Button style={{ width: 72 }} type="submit" >Submit</Button>
                                    <Button style={{ width: 72 }} onClick={this.props.onClose} type="submit" >Cancel</Button>
                                </CardFooter>
                            </Grid>
                        </form>
                    </CardBody>
                </Card>

            </Modal>
        );
    }
}

export default CurrentMedication;

