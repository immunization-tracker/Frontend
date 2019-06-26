import {
  FETCH_PATIENTS,
  FETCH_PATIENTS_SUCCESS,
  REQUEST_ERROR,
  SAVE_PATIENT,
  SAVE_PATIENT_SUCCESS,
  UPDATE_PATIENT,
  UPDATE_PATIENT_SUCCESS,
  DELETE_PATIENT,
  DELETE_PATIENT_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  LOAD_TOKEN,
  LOG_OUT
} from '../actions';

const initialState = {
  loggingIn: false,
  fetchingPatients: false,
  savingPatient: false,
  updatingPatient: false,
  deletingPatient: false,
  patients: [],
  error: null,
  loggedIn: false,
  token: null
};

export const patientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_OUT:
      return { ...state, loggedIn: false };
    case LOAD_TOKEN:
      return { ...state, loggedIn: true, token: action.payload };
    case LOGIN:
      return { ...state, fetchingPatients: true };
    case LOGIN_SUCCESS:
      return { ...state, loggingIn: false, token: action.payload, loggedIn: true };
    case FETCH_PATIENTS:
      return { ...state, fetchingPatients: true };
    case FETCH_PATIENTS_SUCCESS:
      return { ...state, patients: action.payload, fetchingPatients: false };
    case SAVE_PATIENT:
      return { ...state, savingPatient: true };
    case SAVE_PATIENT_SUCCESS:
      return { ...state, patients: action.payload, savingPatient: false };
    case UPDATE_PATIENT:
      return { ...state, updatingPatient: true };
    case UPDATE_PATIENT_SUCCESS:
      return { ...state, patients: action.payload, updatingPatient: false };
    case DELETE_PATIENT:
      return { ...state, deletingPatient: true };
    case DELETE_PATIENT_SUCCESS:
      return { 
        ...state, 
        deletingPatient: false
      };


    case REQUEST_ERROR:
      return { ...initialState, patients: state.patients, error: action.payload };
    default:
      return state;
  }
};
