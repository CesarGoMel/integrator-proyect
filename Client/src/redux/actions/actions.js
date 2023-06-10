import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
         
      } catch (error) {
         window.alert("¡error de adicion!");
         
      }
   };
};
      
   // ACTION | removeFav

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      try {
         const {data} = await axios.delete(endpoint)
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
         });
      } catch (error) {
         window.alert("¡error de eliminacion!");
      }

   };
};


export const filterCards = (gender)=> {
    return {
        type: 'FILTER',
        payload: gender
    }

}

export const OrderCards = (order)=>  {
    return {
        type: 'ORDER',
        payload: order
    }
}