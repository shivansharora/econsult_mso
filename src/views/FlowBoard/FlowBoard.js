import React, { useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import Grid from '@material-ui/core/Grid';
import Table from '../../components/Table/Table';
import ComputerIcon from '@material-ui/icons/Computer';
import EditIcon from '@material-ui/icons/Edit';




const styles = theme => ({
    root: {
        padding: '16px'

    }
});
const useStyles = makeStyles(styles);

const FlowBoard = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ marginTop: '13px' }} >
            <Grid >
                <Grid item xs={12} sm={12} md={12} >
                    <Card style={{ marginTop: '14px',boxShadow:'0 2px 8px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)' }}>
                        <CardHeader style={{ width: '131px', padding: '8px', marginTop: '-17px' }} color="success" >
                            <CardIcon color="success">
                                <ComputerIcon />
                            </CardIcon>
                            <h4 className={classes.cardTitleWhite}>Flow Board</h4>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="primary"
                                tableHead={["Patient Name", "Doctor", "Time", "Current Status", "Action"]}
                                tableData={[
                                    ["Shivam", "Arun Kumar", "16:00", "Waiting For Doctor", <EditIcon />]

                                ]}

                            />
                        </CardBody>
                    </Card>
                </Grid> 
            </Grid>
        </div>
    );
};

export default FlowBoard;