import axios from 'axios';
let axiosWithAuth = () => axios.create();

export const FETCH_PATIENTS = 'FETCH_PATIENTS';
export const FETCH_PATIENTS_SUCCESS = 'FETCH_PATIENTS_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const SAVE_PATIENT = 'SAVE_PATIENT';
export const SAVE_PATIENT_SUCCESS = 'SAVE_PATIENT_SUCCESS';
export const UPDATE_PATIENT = 'UPDATE_PATIENT';
export const UPDATE_PATIENT_SUCCESS = 'UPDATE_PATIENT_SUCCESS';
export const DELETE_PATIENT = 'DELETE_PATIENT';
export const DELETE_PATIENT_SUCCESS = 'DELETE_PATIENT_SUCCESS';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOAD_TOKEN = 'LOAD_TOKEN';
export const LOG_OUT = 'LOG_OUT';

export const logOut = () => ({
  type: LOG_OUT
});

export const loadToken = t => {
  axiosWithAuth = () =>
    axios.create({
      headers: {
        'Content-Type': 'application/json',
        authorization: t
      }
    });
  return {
    type: LOAD_TOKEN,
    payload: t
  };
};

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN });
  return axios
    .post('https://immu-tracker2.herokuapp.com/api/staff/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      axiosWithAuth = () =>
        axios.create({
          headers: {
            'Content-Type': 'application/json',
            authorization: `${res.data.token}`
          }
        });
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    });
};

export const fetchPatients = () => dispatch => {
  dispatch({ type: FETCH_PATIENTS });
  return axiosWithAuth()
    .get('https://immu-tracker2.herokuapp.com/api/records')
    .then(({ data }) =>
      dispatch({ type: FETCH_PATIENTS_SUCCESS, payload: data })
    )
    .catch(err => dispatch({ type: REQUEST_ERROR, payload: err }));
};

export const savePatient = patient => dispatch => {
  dispatch({ type: SAVE_PATIENT });
  return axiosWithAuth()
    .post('http://localhost:5000/api/patients', patient)
    .then(({ data }) => dispatch({ type: SAVE_PATIENT_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_ERROR, payload: err }));
};

export const updatePatient = patient => dispatch => {
  dispatch({ type: UPDATE_PATIENT });
  return axiosWithAuth()
    .put(`http://localhost:5000/api/patients/${patient.id}`, patient)
    .then(({ data }) =>
      dispatch({ type: UPDATE_PATIENT_SUCCESS, payload: data })
    )
    .catch(err => dispatch({ type: REQUEST_ERROR, payload: err }));
};

export const deletePatient = patient => dispatch => {
  dispatch({ type: DELETE_PATIENT });
  return axiosWithAuth()
    .delete(`https://immu-tracker2.herokuapp.com/api/${patient.id}/records`, patient)
    .then(({ data }) =>
      dispatch({ 
        type: DELETE_PATIENT_SUCCESS, 
        payload: data 
      })
      

    )
    .catch(err => dispatch({ type: REQUEST_ERROR, payload: err }));
};
