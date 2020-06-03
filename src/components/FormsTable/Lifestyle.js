import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '../CustomButtons/Button';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
// import CardIcon from '../Card/CardIcon';
import CardBody from '../Card/CardBody';
// import CardFooter from '../Card/CardFooter';
import Grid from '@material-ui/core/Grid';
// import Person from "@material-ui/icons/Person";
import Table from '../Table/Table';
// import VisibilityIcon from '@material-ui/icons/Visibility';
import Lifestyle from '../Forms/LifeStyle';
import EditIcon from '@material-ui/icons/Edit';
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
	}
});

const useStyles = makeStyles(styles);

const LifestyleList = () => {
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
							<h4 className={classes.cardTitleWhite}>Lifestyle</h4>
						</CardHeader>
						<CardBody>
							<Table
								tableHeaderColor="primary"
								tableHead={[ "Title","Current Status","Frequency","Quantity","Start Date","End Date", "Action"]}
								tableData={[
									["Alcohol", "Current","Daily","10","25/06/2015","31/03/2020",
									 <EditIcon
									 onClick={handleEditOpen}
									className={classes.icon}
									 />]
								]}
							/>
							<Lifestyle 
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

export default LifestyleList;