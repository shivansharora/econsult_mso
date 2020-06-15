import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
	Modal,
	Card
} from '@material-ui/core';
import moment from 'moment';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import { useForm, useFieldArray, Controller } from "react-hook-form";
import './CurrentMedication.css';

import Button from '../CustomButtons/Button';
import {
	Select,
	FormControl,
	InputLabel,
	Grid,
	FormHelperText,
	MenuItem,
	TextField

} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'absolute',
		top: '46%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		outline: 'none',
		boxShadow: theme.shadows[20],
		width: 800,
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

const CurrentMedication = props => {
	const { open, onClose, className } = props;

	const classes = useStyles();

	const { control, handleSubmit, errors, register } = useForm({
		defaultValues: {
			current: [{ drug_name: "", strength: '', drug_type: '', frequency: '', duration: '' }],
		}

	});

	const {
		fields: currentFields,
		append: currentAppend,
		remove: currentRemove
	} = useFieldArray({ control, name: "current" });



	const onSubmit = data => {

		console.log(data);

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
				<div style={{ textAlign: "center", fontSize: 20 }}>
					<label>Current Medication</label>
				</div>
				<CardBody>
					<form onSubmit={handleSubmit(onSubmit)}>
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
										<th className="text-center">Frequency</th>
										<th className="text-center">Duration </th>
										<th className="text-center">Action </th>
									</tr>
								</thead>
								<tbody>

									{currentFields.map((item, index) => {
										return (
											<tr id="addr0" key={index} >
												<td >
													<Controller
														as=
														{<TextField />}
														name={`current[${index}].drug_name`}
														control={control}
														label="Drug Name"
														style={{ width: 100 }}
														defaultValue=""
													/>
												</td >
												<td >
													<Controller
														as=
														{<TextField />}
														name={`current[${index}].strength`}
														control={control}
														label="mg"
														style={{ width: 100 }}
														defaultValue=""
													/>
												</td >
												<td >
													<FormControl
														style={{ minWidth: 100 }}
														error={Boolean(errors.drug_type)}
													>
														<InputLabel id="demo-simple-select-label">
															Drug Type
											</InputLabel>

														<Controller
															as={
																<Select>
																	<MenuItem value={10}>Cap</MenuItem>
																	<MenuItem value={20}>Tab</MenuItem>
																	<MenuItem value={30}>Suspension</MenuItem>
																	<MenuItem value={30}>Drops</MenuItem>
																	<MenuItem value={30}>Ointment</MenuItem>
																</Select>
															}
															name={`current[${index}].drug_type`}
															control={control}
															defaultValue=""
														/>
													</FormControl>
												</td>
												<td >
													<FormControl
														style={{ minWidth: 100 }}
														error={Boolean(errors.frequency)}
													>
														<InputLabel id="demo-simple-select-label">
															Frequency
											</InputLabel>

														<Controller
															as={
																<Select>

																	<MenuItem value={10}>OD</MenuItem>
																	<MenuItem value={20}>BD</MenuItem>
																	<MenuItem value={30}>TDS</MenuItem>
																	<MenuItem value={30}>QID</MenuItem>
																	<MenuItem value={30}>SOS</MenuItem>
																	<MenuItem value={30}>HS</MenuItem>
																	<MenuItem value={30}>STAT</MenuItem>
																</Select>
															}
															name={`current[${index}].frequency`}
															control={control}
															defaultValue=""
														/>
													</FormControl>
												</td>
												<td >

													<Controller
														as=
														{<TextField />}
														name={`current[${index}].duration`}
														control={control}
														label="Duration"
														style={{ width: 100 }}
														defaultValue=""
													/>
												</td>

												<td >
													<HighlightOffIcon
														className={classes.icon}
														onClick={() => currentRemove(index)}
													/>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>

							<section>
								<AddCircleIcon
									onClick={() => {
										currentAppend({ drug_name: "", strength: '', drug_type: '', frequency: '', duration: '' });
									}}
								/>
							</section>
						</Grid>
						<CardFooter style={{ float: 'right' }}>
							<Button style={{ width: 72 }} type="submit" >Submit</Button>
							<Button style={{ width: 72 }} onClick={props.onClose} type="submit" >Cancel</Button>
						</CardFooter>
					</form>
				</CardBody>
			</Card>

		</Modal>
	);
};

CurrentMedication.defaultProps = {
	open: false,
	onClose: () => { }
};

export default CurrentMedication;


