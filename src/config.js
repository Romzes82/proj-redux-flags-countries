// const BASE_URL = 'https://restcountries.com/v2/';
// 5e6580590c998f443c09db6e652be409

// const API_KEY = process.env.REACT_APP_API_KEY;

const BASE_URL = 'https://restcountries.com/v3.1/'

export const ALL_COUNTRIES =
    BASE_URL +
    'all?fields=name,capital,flags,population,region';

export const searchByCountry = (name) => BASE_URL + 'name/' + name;

export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');

// https://restcountries.com/v3.1/alpha?codes=AUT,FRA,SMR,SVN,CHE,VAT