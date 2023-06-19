import {CLEAR_CART,REMOVE,INCREASE,DECREASE,LOADING,DISPLAY_ITEMS} from './actions';

export const reducer = (state,action) =>
{
    //Action to clear cart
    if(action.type === CLEAR_CART)
    {
        return {...state,cart:new Map()};
    }

    //Action to remove an item from cart
    if(action.type === REMOVE)
    {
        const newCart =new Map(state.cart);
        newCart.delete(action.payload.id);

        return {...state,cart : newCart};
    }

    //Action to increase quantity of item
    if(action.type===INCREASE)
    {
        const newCart = new Map(state.cart);
        const itemId = action.payload.id;

        const item=newCart.get(itemId);
        const newItem={...item,amount:item.amount+1};

        newCart.set(itemId,newItem);
        return {...state,cart:newCart};
    }

    //Action to decrease quantity of item
    if(action.type === DECREASE)
    {
        const newCart=new Map(state.cart);
        const itemId=action.payload.id;

        const item=newCart.get(itemId);

        if(item.amount==1)
        {
            newCart.delete(itemId);
        }
        else
        {
            const newItem={...item,amount:item.amount-1};
            newCart.set(itemId,newItem);
        }
        return {...state,cart:newCart}
    }

    //If action is to loading
    if(action.type===LOADING)
    {
        return {...state,loading:true};
    }

    //If action is to display items
    if(action.type===DISPLAY_ITEMS)
    {
        const newCart=new Map(action.payload.cart.map((item)=>[item.id,item]));
        return {...state,loading:false,cart:newCart};
    }

    throw new Error(`No matching action type : ${action.type}`);
}