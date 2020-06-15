import React, { useState,useEffect } from 'react';
import { makeStyles,withStyles } from "@material-ui/core/styles";
import Button from '../CustomButtons/Button';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import axios from '../../utils/axios';
import Fab from '@material-ui/core/Fab';
import Vitals from '../Forms/Vitals';

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
	Tooltip
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
      cardTitleWhite: {
		color: "#FFFFFF",
		marginTop: "0px",
		minHeight: "auto",
		fontWeight: "300",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: "3px",
		textDecoration: "none"
	},
	icon:{
		cursor:'pointer'
	},
	fab: {
		margin: 2,
		backgroundColor: '#66a668',
		width: 50,
		height: 42
	},
});

const useStyles = makeStyles(styles);

const VitalList = () => {
	const classes = useStyles();

	const [openEdit, setOpenEdit] = useState(false);

	const handleEditOpen = () => {
	  setOpenEdit(true);
	};
  
	const handleEditClose = () => {
	  setOpenEdit(false);
	};

	return (
		<div className={classes.root} >
			<Grid >
				<Grid item xs={12} sm={12} md={12} >
					<Button style={{ float: 'right', marginTop: '-16px' }} onClick={handleEditOpen}>Add</Button>
					<Card style={{ marginTop: '8px',boxShadow:'0 2px 8px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)' }}>
						<CardHeader style={{ width: '85px', padding: '7px', marginTop: '-17px' }} color="success" >
							<h4 className={classes.cardTitleWhite}>Vitals</h4>
						</CardHeader>
						<CardBody>
						<TableContainer className={classes.container}>
								<Table stickyHeader aria-label="sticky table">
									<TableHead >
										<StyledTableRow >
											<TableCell style={{ backgroundColor: '#6a7075', color: 'white' }}>Weight</TableCell>
											<TableCell style={{ backgroundColor: '#6a7075', color: 'white' }}>Height</TableCell>
											<TableCell style={{ backgroundColor: '#6a7075', color: 'white' }}>Blood Pressure</TableCell>
											<TableCell style={{ backgroundColor: '#6a7075', color: 'white' }}>Pulse</TableCell>
											<TableCell style={{ backgroundColor: '#6a7075', color: 'white' }}>Respiration</TableCell>
											<TableCell style={{ backgroundColor: '#6a7075', color: 'white' }}>Temperature</TableCell>
											<TableCell style={{ backgroundColor: '#6a7075', color: 'white' }}>Temp. Method</TableCell>
											<TableCell style={{ backgroundColor: '#6a7075', color: 'white' }}>BMI</TableCell>
											<TableCell style={{ backgroundColor: '#6a7075', color: 'white' }}>BMI Status</TableCell>
											<TableCell align="right" style={{ backgroundColor: '#6a7075', color: 'white' }}>Actions</TableCell>
										</StyledTableRow>
									</TableHead>
									<TableBody>
										{/* {family.map(family => ( */}
											<StyledTableRow
												hover
												// key={family.id}
											>
												<TableCell></TableCell>
												<TableCell></TableCell>
												<TableCell></TableCell>
												<TableCell></TableCell>
												<TableCell></TableCell>
												<TableCell></TableCell>
												<TableCell></TableCell>
												<TableCell></TableCell>
												<TableCell></TableCell>


												<TableCell align="right">
													<Link
														color="inherit"
														onClick={handleEditOpen}
														variant="h6"
													>
														<Tooltip title="Edit" aria-label="Edit">
															<Fab className={classes.fab}>

																<EditIcon
																/>
															</Fab>
														</Tooltip>
													</Link>
												</TableCell>
											</StyledTableRow>
										{/* ))} */}
									</TableBody>
								</Table>
							</TableContainer>
							<Vitals 
							onClose={handleEditClose}
							open={openEdit}
							/>
						</CardBody>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}

export default VitalList;