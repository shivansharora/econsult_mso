export default function validate(values) {
  let errors = {};

  ///////////////////////////// Name ////////////////////////////////////
  if (!values.name) {
    errors.name = 'Name is required';
  }
  //////////////////////////// Mobile ///////////////////////////////////
  if (!values.mobile) {
    errors.mobile = 'Mobile is required';
  } else if (isNaN(values.mobile)) {
    errors.mobile = 'User must write digits only not characters';
  } else if (values.mobile.length !== 10) {
    errors.mobile = 'Number length should be 10';
  }
  //////////////////////////// Email ////////////////////////////////////
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  /////////////////////////// DOB //////////////////////////////////////
  // if (!values.dob) {
  //   errors.dob = 'Date is required';
  // }
  /////////////////////////// Age //////////////////////////////////////
  // if (!values.age) {
  //   errors.age = 'Age is required';
  // } else if (isNaN(values.age)) {
  //   errors.age = 'User must write digits only not characters';
  // }
  /////////////////////////// Marital Status //////////////////////////////////////
  if (!values.marital_status) {
    errors.marital_status = 'Marital Status is required';
  }
  /////////////////////////// Gender //////////////////////////////////////
  if (!values.gender) {
    errors.gender = 'Gender is required';
  }
  /////////////////////////// Address //////////////////////////////////////
  if (!values.address) {
    errors.address = 'Address is required';
  }
  /////////////////////////// City //////////////////////////////////////
  if (!values.city_id) {
    errors.city_id = 'City is required';
  }
  /////////////////////////// State //////////////////////////////////////
  if (!values.state_id) {
    errors.state_id = 'State is required';
  }
  /////////////////////////// Pincode //////////////////////////////////////
  if (!values.pincode) {
    errors.pincode = 'Pincode is required';
  } else if (isNaN(values.pincode)) {
    errors.pincode = 'User must write digits only not characters';
  } else if (values.pincode.length !== 6) {
    errors.pincode = 'Pincode length should be 6';
  }
  /////////////////////////// Emergency Contact //////////////////////////////////////
  if (!values.emergency_contact_no) {
    errors.emergency_contact_no = 'Emergency Contact is required';
  } else if (isNaN(values.emergency_contact_no)) {
    errors.emergency_contact_no = 'User must write digits only not characters';
  } else if (values.emergency_contact_no.length !== 10) {
    errors.emergency_contact_no = 'Emergency Contact length should be 10';
  }
  /////////////////////////// Alternate Number //////////////////////////////////////
  if (!values.alternate_contact_no) {
    errors.alternate_contact_no = 'Alternate Number is required';
  } else if (isNaN(values.alternate_contact_no)) {
    errors.alternate_contact_no = 'User must write digits only not characters';
  } else if (values.alternate_contact_no.length !== 10) {
    errors.alternate_contact_no = 'Alternate Number length should be 10';
  }
  ///////////////////////////////// emergencyContactPerson ///////////////////////////////  
  if (!values.emergency_contact_person) {
    errors.emergency_contact_person = 'Emergency Contact Person is required';
  }
  ///////////////////////////////// emergencyContactRelationship /////////////////////////////// 
  if (!values.emergency_contact_relationship) {
    errors.emergency_contact_relationship = 'Emergency Contact Relationship is required';
  }
  return errors;
};
