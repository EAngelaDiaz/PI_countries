import axios from 'axios';

import {
    GET_COUNTRIES,
    GET_ACTIVITIES,
    GET_BY_NAME,
    GET_BY_ID,
    FILTER_BY_CONTINENT,
    FILTER_BY_ACTIVITY,
    ORDER_BY_ALPHABET,
    ORDER_BY_POPULATION,

    
       
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

export const getActivities = () => {
    const endpoint = 'http://localhost:3001/activities';
    return async (dispatch) => {
        const {data} = await axios.get(endpoint);
            return dispatch({
                 type: GET_ACTIVITIES,
                 payload: data,
              });
            };
        };

export const getByName = (name) => {
    const endpoint = `http://localhost:3001/countries/?name=${name}`;
    return async (dispatch) => {
        try {
        const {data} = await axios.get(endpoint);
            return dispatch({
                 type: GET_BY_NAME,
                 payload: data,
            });
         } catch (error){
            console.log(error)
         } 
        };
    };

export const getById = (id) => {
    const endpoint = `http://localhost:3001/countries/${id}`;
    return async (dispatch) => {
        try{ 
        const {data} = await axios.get(endpoint);
        console.log(data);
            return dispatch({
                 type: GET_BY_ID,
                 payload: data,
            });
        } catch (error) {
            console.log(error);
        }
        };
    }; 

export const filterByContinent = (payload) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload,
    };
};    

export const filterByActivity = (payload) => {
    console.log(payload)
    return {
        type: FILTER_BY_ACTIVITY,
        payload,
    };
};

export const orderByAlphabet = (payload) => {
    return {
        type: ORDER_BY_ALPHABET,
        payload,
    };

};

export const orderByPopulation = (payload) => {
    return {
        type: ORDER_BY_POPULATION,
        payload,
    };

};



export const postActivity = (payload) => {
    return async function (dispatch){
        try{
        const data = await axios.post('http://localhost:3001/activities',payload);
        console.log(data);
        return data

        } catch (error) {
        console.log(error);
        }
    }
 }



