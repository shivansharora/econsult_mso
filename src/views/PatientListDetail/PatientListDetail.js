import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { colors } from '@material-ui/core';

import { Page } from 'components';
import PatientDetail from '../../views/PatientListDetail/components/PatientDetail/PatientDetail';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    marginTop: '-33px',
    padding: '8px'
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const PatientListDetail = props => {
  // const { match, history } = props;
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Patient Detail"
    >
      <PatientDetail></PatientDetail>


    </Page>
  );
};

PatientListDetail.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default PatientListDetail;
