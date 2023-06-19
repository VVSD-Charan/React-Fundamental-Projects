import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
//Import all actions required
import {CLEAR_CART,REMOVE,INCREASE,DECREASE,LOADING,DISPLAY_ITEMS} from './actions';
import cartItems from "./data";
import { getTotals } from "./utils";

const url = 'https://www.course-api.com/react-useReducer-cart-project';


const AppContext = createContext();

const initialState = {
    loading : false,
    cart : new Map()
}

export const AppProvider = ({children}) =>
{
    const [state,dispatch]=useReducer(reducer,initialState);

    const {totalAmount,totalCost}=getTotals(state.cart);
    
    //Function to clear cart
    const clearCart = () =>{
        dispatch({type : CLEAR_CART});
    }

    //Function to remove an item from cart
    const remove = (id) =>{
        dispatch({type:REMOVE,payload:{id}})
    }

    //Function to increase quantity of an item
    const increase = (id) =>{
        dispatch({type:INCREASE,payload:{id}});
    }

    //Function to decrease quantity of item
    const decrease = (id) =>{
        dispatch({type:DECREASE,payload:{id}});
    }

    //Fetch data from API
    const fetchData=async () =>{
        dispatch({type:LOADING});
        const response=await fetch(url);
        const cart=await response.json();
        dispatch({type:DISPLAY_ITEMS,payload:{cart}});
    }

    //Useeffect to load page initially
    useEffect(()=>
    {
        fetchData();
    },[])

    return <AppContext.Provider value={{...state,clearCart,remove,increase,decrease,totalAmount,totalCost,fetchData}}>
        {children}
    </AppContext.Provider>
};

export const useGlobalContext = () =>
{
    return useContext(AppContext);
}