import React from 'react'
import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';
import { useLoaderData } from 'react-router-dom';

const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
export const loader = async({params})=>{
  const {id} = params;
  const {data} = await axios.get(`${singleCocktailUrl}${id}`);
  return {id, data};
}

const Cocktail = () => {
  const {id, data} = useLoaderData();
  return (
    <h2>Cocktail</h2>
  )
}

export default Cocktail