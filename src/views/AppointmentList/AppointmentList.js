import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, TablePagination } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { Link as RouterLink } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import axios from '../../utils/axios';
import Paginate from '../../components/Paginate/Paginate';
import SearchBar from '../../components/SearchBar/SearchBar';
import ProjectCard from './AppointmentCard/AppointmentCard';


const styles = theme => ({
  root: {
    padding: '16px'

  },
  results: {
    marginTop: theme.spacing(2)
  },
  paginate: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  }
});
const useStyles = makeStyles(styles);

const AppointmentList = () => {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  useEffect(() => {
    let mounted = true;

    const fetchProjects = () => {
      axios.get('/api/bookinglist').then(response => {
        if (mounted) {
          setProjects(response.data.projects);
        }
      });
    };

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    setFilteredPatients(
      projects.filter(project => {
        return Object.keys(project).some(key =>
          project[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, projects]);



  return (
    <div className={classes.root} style={{ marginTop: '13px' }} >
      <Grid >
        <Grid item xs={12} sm={12} md={12} >
          <SearchBar
            onSearch={e => setSearch(e.target.value)}
          />
          <Button
            className={classes.filterButton}
            color="primary"
            style={{ float: 'right' }}
            size="small"
            variant="outlined"
            component={RouterLink}
            to="/book_appointment"
          >
            <PersonAddIcon className={classes.filterIcon} /> Book Appointment
        </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} >
          <div className={classes.results}>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {filteredPatients.length} Records found. Page {page + 1} of{' '}
              {Math.ceil(filteredPatients.length / rowsPerPage)}
            </Typography>
            {filteredPatients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(project => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
          <div className={classes.paginate}>
            <TablePagination
              component="div"
              count={filteredPatients.length}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              page={page}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
            />
          </div>
        </Grid>


      </Grid>
    </div>
  );
};

export default AppointmentList;
