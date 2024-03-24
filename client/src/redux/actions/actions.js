import axios from 'axios';

import {
    GET_COUNTRIES,
    GET_BY_NAME,
    GET_BY_ID
    
    
} from '../action-types/action-types';

export const getCountries = () => {
    const endpoint = 'http://localhost:3001/countries';
    return async (dispatch) => {
       const {data} = await axios.get(endpoint);
          return dispatch({
             type: GET_COUNTRIES,
             payload: data,
          });
        };
    };

export const getByName = (name) => {
    const endpoint = `http://localhost:3001/countries/?name=${name}`;
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
            return dispatch({
                 type: GET_BY_NAME,
                 payload: data,
            });
        };
    };

export const getById = (id) => {
    console.log(typeof(id));
    const endpoint = `http://localhost:3001/countries/${id}`;
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
        console.log(data);
            return dispatch({
                 type: GET_BY_ID,
                 payload: data,
            });
        };
    }; 



