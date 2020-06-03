import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  TablePagination
} from '@material-ui/core';
import Tabs from '../../components/Tabs/Tab';
import CustomTabs from '../../components/CustomTabs/CustomTabs'
import SearchBar from '../../components/SearchBar/SearchBar';
import axios from '../../utils/axios';


import CategoryCard from './Cat/DoctorCard/DoctorCard'

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 7,
    marginTop: -30,
    float: 'right'
  },
  title: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main
    }
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const DoctorCategory = () => {

  const classes = useStyles();
  const [CatOne, setCatOne] = useState([]);
  const [CatTwo, setCatTwo] = useState([]);
  const [CatThree, setCatThird] = useState([]);
  const [CatFour, setCatForth] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCatOne, setFilteredCatOne] = useState([]);
  const [filteredCatTwo, setFilteredCatTwo] = useState([]);
  const [filteredCatThree, setFilteredCatThree] = useState([]);
  const [filteredCatFour, setFilteredCatFour] = useState([]);

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

    const fetchCatOne = () => {
      axios.get('/api/doctorcategory').then(response => {
        if (mounted) {
          setCatOne(response.data.CatOne);
          // console.log(response.data.CatOne);
        }
      });
    };

    const fetchCatSecond = () => {
      axios.get('/api/categorytwo').then(response => {
        if (mounted) {
          setCatTwo(response.data.CatTwo);
          // console.log(response.data.CatTwo);
        }
      });
    };

    const fetchCatThird = () => {
      axios.get('/api/categorythree').then(response => {
        if (mounted) {
          setCatThird(response.data.CatThree);
        }
      });
    };

    const fetchCatForth = () => {
      axios.get('/api/categoryfour').then(response => {
        if (mounted) {
          setCatForth(response.data.CatFour);
        }
      });
    };

    fetchCatOne();
    fetchCatSecond();
    fetchCatThird();
    fetchCatForth();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    setFilteredCatOne(
      CatOne.filter(doctor => {
        return Object.keys(doctor).some(key =>
          doctor[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, CatOne]);

  useEffect(() => {
    setFilteredCatTwo(
      CatTwo.filter(doctor => {
        return Object.keys(doctor).some(key =>
          doctor[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, CatTwo]);

  useEffect(() => {
    setFilteredCatThree(
      CatThree.filter(doctor => {
        return Object.keys(doctor).some(key =>
          doctor[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, CatThree]);

  useEffect(() => {
    setFilteredCatFour(
      CatFour.filter(doctor => {
        return Object.keys(doctor).some(key =>
          doctor[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, CatFour]);

  return (
    <div style={{ marginTop: '35px' }} className={classes.root}>
      <Grid>
        <Grid item xs={12} sm={12} md={12} >
          <CustomTabs
            headerColor="success"
            tabs={[
              {
                tabName: "Category 1",
                // tabIcon: LocalHospitalIcon,
                tabContent: (
                  <div>

                    <Grid
                      container
                      spacing={3}
                    >
                      <Grid item xs={12} sm={12} md={12} >
                        <SearchBar
                          onSearch={e => setSearch(e.target.value)}

                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} >
                        <div className={classes.header}>
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                          >

                            {filteredCatOne.length} Records found. Page {page + 1} of{' '}
                            {Math.ceil(filteredCatOne.length / rowsPerPage)}
                          </Typography>
                        </div>
                      </Grid>
                      {filteredCatOne.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(doctor => (
                        <Grid
                          item
                          key={doctor.id}
                          md={3}
                          sm={3}
                          xs={12}
                        >

                          <CategoryCard doctor={doctor} />
                        </Grid>

                      ))}
                    </Grid>

                    <div className={classes.paginate}>
                      <TablePagination
                        component="div"
                        count={filteredCatOne.length}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, 10, 25]}
                      />
                    </div>
                  </div>

                )
              },
              {
                tabName: "Category 2",
                // tabIcon: StoreIcon,
                tabContent: (
                  <div>

                    <Grid
                      container
                      spacing={3}
                    >
                      <Grid item xs={12} sm={12} md={12} >
                        <SearchBar
                          onSearch={e => setSearch(e.target.value)}

                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} >
                        <div className={classes.header}>
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                          >

                            {filteredCatTwo.length} Records found. Page {page + 1} of{' '}
                            {Math.ceil(filteredCatTwo.length / rowsPerPage)}
                          </Typography>
                        </div>
                      </Grid>
                      {filteredCatTwo.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(doctor => (
                        <Grid
                          item
                          key={doctor.id}
                          md={3}
                          sm={3}
                          xs={12}
                        >

                          <CategoryCard doctor={doctor} />
                        </Grid>
                      ))}
                    </Grid>

                    <div className={classes.paginate}>
                      <TablePagination
                        component="div"
                        count={filteredCatTwo.length}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, 10, 25]}
                      />
                    </div>
                  </div>
                )
              },
              {
                tabName: "Category 3",
                // tabIcon: SupervisorAccountIcon,
                tabContent: (
                  <div>

                    <Grid
                      container
                      spacing={3}
                    >
                      <Grid item xs={12} sm={12} md={12} >
                        <SearchBar
                          onSearch={e => setSearch(e.target.value)}

                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} >
                        <div className={classes.header}>
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                          >

                            {filteredCatThree.length} Records found. Page {page + 1} of{' '}
                            {Math.ceil(filteredCatThree.length / rowsPerPage)}
                          </Typography>
                        </div>
                      </Grid>
                      {filteredCatThree.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(doctor => (
                        <Grid
                          item
                          key={doctor.id}
                          md={3}
                          sm={3}
                          xs={12}
                        >

                          <CategoryCard doctor={doctor} />
                        </Grid>
                      ))}
                    </Grid>

                    <div className={classes.paginate}>
                      <TablePagination
                        component="div"
                        count={filteredCatThree.length}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, 10, 25]}
                      />
                    </div>
                  </div>
                )
              },
              {
                tabName: "Category 4",
                // tabIcon: SupervisorAccountIcon,
                tabContent: (
                  <div>

                    <Grid
                      container
                      spacing={3}
                    >
                      <Grid item xs={12} sm={12} md={12} >
                        <SearchBar
                          onSearch={e => setSearch(e.target.value)}

                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} >
                        <div className={classes.header}>
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                          >

                            {filteredCatFour.length} Records found. Page {page + 1} of{' '}
                            {Math.ceil(filteredCatFour.length / rowsPerPage)}
                          </Typography>
                        </div>
                      </Grid>
                      {filteredCatFour.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(doctor => (
                        <Grid
                          item
                          key={doctor.id}
                          md={3}
                          sm={3}
                          xs={12}
                        >

                          <CategoryCard doctor={doctor} />
                        </Grid>
                      ))}
                    </Grid>

                    <div className={classes.paginate}>
                      <TablePagination
                        component="div"
                        count={filteredCatFour.length}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, 10, 25]}
                      />
                    </div>
                  </div>
                )
              }
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default DoctorCategory;
