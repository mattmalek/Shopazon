import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';

export default function CartScreen(props) {
    const productId = useParams().id;
    // const { search } = useLocation();
    // const qty = search ? Number(search.split("=")[1]) : 1;
    const [searchParms] = useSearchParams();
    const qty = Number(searchParms.get("qty"));;
    const dispatch = useDispatch();
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CART : ProductID: {productId} Qty: {qty}</p>
        </div>
    );
}
