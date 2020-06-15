import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { useForm, Controller } from "react-hook-form";
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// core components
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import CardAvatar from '../../components/Card/CardAvatar';
import axios from '../../utils/axios1';
import SearchIcon from '@material-ui/icons/Search';
import ProjectCard from './PatientCard/PatientCard'
import {
	TextField,
	Typography
} from "@material-ui/core";



const styles = theme => ({
	root: {
		padding: '16px'

	},
	input: {
		display: 'block',
		boxSizing: 'border-box',
		width: '100%',
		borderRadius: '4px',
		border: '1px solid black',
		padding: '10px 15px',
		marginBottom: '2px',
		fontSize: '14px'
	}
});
const useStyles = makeStyles(styles);

const BookAppointment = () => {

	const { control, handleSubmit, errors, register, watch } = useForm();

	
	const [isSent, setIsSent] = useState(false)
  const [patients, setPatients] = useState([]);


	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const classes = useStyles();

	const PatientDetail = () => {
		return (
			<Grid item xs={12} sm={12} md={12} >
				<div className={classes.results}>
					<Typography
						color="textSecondary"
						gutterBottom
						variant="body2"
					>
						{patients.length} Records found. Page {page + 1} of{' '}
						{Math.ceil(patients.length / rowsPerPage)}
					</Typography>
					{patients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(project => (
						<ProjectCard
							key={project.id}
							project={project}
						/>
					))}
				</div>
			</Grid>
		)
	}

	const onSubmit = data => {
		console.log(data)
		if (localStorage.getItem("jwt") != '' || localStorage.getItem("jwt") !== undefined) {
			let token = "Bearer " + localStorage.getItem("jwt");
		 axios.get('/patients',{ headers: { Authorization: token } }).then(response => {
				setPatients(response.data);
				console.log(response.data)
				setIsSent(true)
		}).catch(error => {
			if (error.response.data != "") {
				alert(error.response.data.error);
			} else {
				alert(error.response.statusText);
			}
		});
	}
	};

	return (
		<div className={classes.root} style={{ marginTop: '3px' }} >
			<Grid container spacing={2}>
				<Grid item xs={12} sm={8} md={8} >
					<Card >
						<CardHeader style={{ width: '304px', padding: '11px' }} color="success" >
							<CardIcon color="success">
								<SearchIcon />
							</CardIcon>
							<h4 className={classes.cardTitleWhite}>Search Patients</h4>
						</CardHeader>
						<CardBody>
							<form onSubmit={handleSubmit(onSubmit)}>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={4} md={4} >
										<Controller
											as={<TextField />}
											name="pid"
											control={control}
											defaultValue=''
											label="ID"
											type="text"
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										<Controller
											as={<TextField />}
											name="name"
											control={control}
											defaultValue=''
											label="Name"
											type="text"
											fullWidth
										/>
									</Grid>

									<Grid item xs={12} sm={4} md={4} >
										<CardFooter style={{ float: 'right' }}>
											<Button
												variant="contained"
												color="secondary"
												className={classes.button}
												type="submit"
												startIcon={<SearchIcon />}
											>
												Search
										</Button>
										</CardFooter>
									</Grid>
									{/* <Grid item xs={12} sm={8} md={8} >
									<Button
									className={classes.filterButton}
									color="primary"
									style={{ float: 'right' }}
									size="small"
									variant="outlined"
									component={RouterLink}
									to="/create_patient"
								>
									<PersonAddIcon className={classes.filterIcon} />
									Create New 
								</Button>
									</Grid> */}
								</Grid>
							</form>
						</CardBody>
					</Card>
				</Grid>

				{isSent ? PatientDetail() : null}

			</Grid>
		</div>
	);
};

export default BookAppointment;