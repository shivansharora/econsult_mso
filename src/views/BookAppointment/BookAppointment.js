import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { useForm, Controller } from "react-hook-form";
import { Link as RouterLink } from 'react-router-dom';

// core components
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import BookIcon from '@material-ui/icons/Book';
import Type from './Type';
import Category from './Category'
import Doctor from './Doctors'
import moment from 'moment';

import {
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	FormHelperText,
	TextField,
	Checkbox
} from "@material-ui/core";



const styles = theme => ({
	root: {
		padding: '16px'

	}
});
const useStyles = makeStyles(styles);

const BookAppointment = () => {
	const { handleSubmit, errors, control, watch } = useForm();
	const onSubmit = data => {
		alert(JSON.stringify(data));
	};
	// const [startDate, setStartDate] = useState(new Date());


	const type = watch('type');
	const category = watch('category')
	const classes = useStyles();

	return (
		<div className={classes.root} style={{ marginTop: '3px' }} >
			<Grid container spacing={2}>
				<Grid item xs={12} sm={9} md={9} >
					<Card >
						<CardHeader style={{ width: '177px', padding: '11px' }} color="success" >
							<CardIcon color="success">
								<BookIcon />
							</CardIcon>
							<h4 className={classes.cardTitleWhite}>Book Appointment</h4>
						</CardHeader>
						<CardBody>
							<form onSubmit={handleSubmit(onSubmit)}>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={12} md={12} >
										<Controller
											as={<TextField />}
											error={Boolean(errors.name)}
											name="name"
											rules={{ required: "Patient Name is required" }}
											control={control}
											defaultValue=""
											label="Patient Name"
											type="text"
											helperText={errors.name && errors.name.message}
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										<FormControl
											style={{ minWidth: 230 }}
											error={Boolean(errors.type)}
										>
											<InputLabel id="demo-simple-select-label">
												Type
									        </InputLabel>

											<Controller
												as={
													<Select>
														{Type.map(option => (
															<MenuItem key={option.value} value={option.value}>
																{option.label}
															</MenuItem>
														))}
													</Select>
												}
												name="type"
												rules={{ required: "Type is required" }}
												control={control}
												defaultValue=""
											/>
											<FormHelperText>
												{errors.type && errors.type.message}
											</FormHelperText>
										</FormControl>
									</Grid>

									{type === 'Category' && (
										<React.Fragment>
											<Grid item xs={12} sm={4} md={4} >

												<FormControl
													style={{ minWidth: 230 }}
													error={Boolean(errors.category)}
												>
													<InputLabel id="demo-simple-select-label">
														Category
								                    </InputLabel>

													<Controller
														as={
															<Select>
																{Category.map(option => (
																	<MenuItem key={option.value} value={option.value}>
																		{option.label}
																	</MenuItem>
																))}
															</Select>
														}
														name="category"
														rules={{ required: "Category is required" }}
														control={control}
														defaultValue=""
													/>
													<FormHelperText>
														{errors.category && errors.category.message}
													</FormHelperText>
												</FormControl>
											</Grid>

											{category && (
												<Grid item xs={12} sm={4} md={4} >

													<FormControl
														style={{ minWidth: 230 }}
														error={Boolean(errors.doctor)}
													>
														<InputLabel id="demo-simple-select-label">
															Doctors
							  							</InputLabel>

														<Controller
															as={
																<Select>
																	{Doctor.map(option => (
																		<MenuItem key={option.value} value={option.value}>
																			{option.label}
																		</MenuItem>
																	))}
																</Select>
															}
															name="doctor"
															rules={{ required: "Doctor is required" }}
															control={control}
															defaultValue=""
														/>
														<FormHelperText>
															{errors.doctor && errors.doctor.message}
														</FormHelperText>
													</FormControl>
												</Grid>
											)}
										</React.Fragment>

									)}
									{type === 'Individual' && (
										<Grid item xs={12} sm={4} md={4} >
											<FormControl
												style={{ minWidth: 230 }}
												error={Boolean(errors.doctor)}
											>
												<InputLabel id="demo-simple-select-label">
													Doctors
												</InputLabel>

												<Controller
													as={
														<Select>
															{Doctor.map(option => (
																<MenuItem key={option.value} value={option.value}>
																	{option.label}
																</MenuItem>
															))}
														</Select>
													}
													name="doctor"
													rules={{ required: "Doctor is required" }}
													control={control}
													defaultValue=""
												/>
												<FormHelperText>
													{errors.doctor && errors.doctor.message}
												</FormHelperText>
											</FormControl>
										</Grid>
									)}
									<Grid item xs={12} sm={12} md={12} >
										<Controller
											as={<TextField />}
											error={Boolean(errors.datetime)}
											name="datetime"
											label="Appointment Date Time"
											type="datetime-local"
											rules={{ required: "Datetime is required" }}
											className={classes.textField}
											// minDate={moment().toDate()}

											InputLabelProps={{
												shrink: true,
											}}
											control={control}
											defaultValue=""
											helperText={errors.datetime && errors.datetime.message}
										/>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
									<FormControl
												style={{ minWidth: 230 }}
												// error={Boolean(errors.camp)}
											>
												<InputLabel id="demo-simple-select-label">
													Camp
												</InputLabel>

												<Controller
													as={
														<Select>
																<MenuItem value="Pathology Camp">Pathology Camp</MenuItem>
														    <MenuItem value="Awareness Camp">Pathology Camp</MenuItem>
														</Select>
													}
													name="camp"
													// rules={{ required: "Camp is required" }}
													control={control}
													defaultValue=""
												/>
												{/* <FormHelperText>
													{errors.camp && errors.camp.message}
												</FormHelperText> */}
											</FormControl>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
									<FormControl
												style={{ minWidth: 230 }}
											>
												<InputLabel id="demo-simple-select-label">
													Promo Code
												</InputLabel>

												<Controller
													as={
														<Select>
																<MenuItem value="Pathology Camp">Pathology Camp</MenuItem>
														    <MenuItem value="Awareness Camp">Pathology Camp</MenuItem>
														</Select>
													}
													name="promo_code"
													control={control}
													defaultValue=""
												/>
												{/* <FormHelperText>
													{errors.promo_code && errors.promo_code.message}
												</FormHelperText> */}
											</FormControl>
									</Grid>
									<Grid item xs={12} sm={12} md={12} >
									<label>Is Pregnant</label>
								   <Controller control={control} as={<Checkbox />}
										 name="is_pregnant"
										 defaultValue={false}
 
										 />
                                    </Grid>
									<Grid item xs={12} sm={12} md={12} >
										<CardFooter style={{ float: 'right' }}>
											<Button type="submit" >Book</Button>
											<Button
												component={RouterLink}
												to="/book_appointment_list"
											>Cancel</Button>
										</CardFooter>
									</Grid>
								</Grid>
							</form>
						</CardBody>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default BookAppointment;