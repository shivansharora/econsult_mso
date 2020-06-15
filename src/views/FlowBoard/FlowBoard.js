import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import Grid from '@material-ui/core/Grid';
import ComputerIcon from '@material-ui/icons/Computer';
import ChangeStatusForm from './StatusChangeForm/StatusChangeForm'
import axios from '../../utils/axios1';
import { Link as RouterLink } from 'react-router-dom';

import {
	createMuiTheme,
} from "@material-ui/core/styles";

import {
	TableContainer,
	Link,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@material-ui/core';


const theme = createMuiTheme({
	overrides: {
		MuiTooltip: {
			tooltip: {
				fontSize: "1em",
				color: "black",
				backgroundColor: "#84b786",
			}
		}
	}
});


const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},

	},
}))(TableRow);


const styles = theme => ({
	root: {
		padding: '16px'

	}
});
const useStyles = makeStyles(styles);

const FlowBoard = () => {
	const classes = useStyles();
  const [patients, setPatients] = useState([]);

	useEffect(() => {
    let mounted = true;

    const fetchFlowBoardPatient = () => {
      if (localStorage.getItem("jwt") != '' || localStorage.getItem("jwt") !== undefined) {
        let token = "Bearer " + localStorage.getItem("jwt");
       axios.get('/get_flow_board_list',{ headers: { Authorization: token } }).then(response => {
        if (mounted) {
          setPatients(response.data);
          console.log(response.data)
        }
      }).catch(error => {
				if (error.response.data != "") {
					alert(error.response.data.error);
				} else {
					alert(error.response.statusText);
				}
			});
    }
    };

    fetchFlowBoardPatient();

    return () => {
      mounted = false;
    };
  }, []);


	return (
		<div className={classes.root} style={{ marginTop: '13px' }} >
			<Grid >
				<Grid item xs={12} sm={12} md={12} >
					<Card style={{ marginTop: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)' }}>
						<CardHeader style={{ width: '131px', padding: '8px', marginTop: '-17px' }} color="success" >
							<CardIcon color="success">
								<ComputerIcon />
							</CardIcon>
							<h4 className={classes.cardTitleWhite}>Flow Board</h4>
						</CardHeader>
						<CardBody>
							<TableContainer className={classes.container}>
								<Table stickyHeader aria-label="sticky table">
									<TableHead >
										<StyledTableRow >
											<TableCell style={{ backgroundColor: '#6a7075', color: 'white' }}>Patient Name</TableCell>
											<TableCell style={{ backgroundColor: '#6a7075', color: 'white' }}>Doctor</TableCell>
											<TableCell style={{ backgroundColor: '#6a7075', color: 'white' }}>Appointment Date</TableCell>
											<TableCell style={{ backgroundColor: '#6a7075', color: 'white' }}>Appointment Time</TableCell>
											<TableCell style={{ backgroundColor: '#6a7075', color: 'white' }}>Time</TableCell>
											<TableCell align="right" style={{ backgroundColor: '#6a7075', color: 'white' }}>Current Status</TableCell>
										</StyledTableRow>
									</TableHead>
									<TableBody>
									{patients.map(patients => (
										<StyledTableRow
											hover
										key={patients.id}
										>
											<TableCell>{patients.patient.name}</TableCell>
											<TableCell>{patients.doctor.name}</TableCell>
											<TableCell>{patients.appointment_date}</TableCell>
											<TableCell>{patients.appointment_time}</TableCell>
											<TableCell>{patients.flow_board.timestamp.substr(12, 20)}</TableCell>

                     {patients.flow_board.status === 'Waiting for doctor' || patients.flow_board.status === 'Details being recorded' ?
											<TableCell align="right">
												<Link
													color="inherit"
													variant="h6"
													component={RouterLink}
													to={`/change_flowboard_status/${patients.id}/${patients.patient.id}`}
												>
													{patients.flow_board.status}
													</Link>
											</TableCell>:	 
											<TableCell align="right" style={{ color:'red' }}>
											{patients.flow_board.status}
											</TableCell>
											 } 
										
										</StyledTableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</CardBody>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default FlowBoard;