import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export default function CartScreen(props) {
    const productId = useParams().id;
    // const { search } = useLocation();
    // const qty = search ? Number(search.split("=")[1]) : 1;
    const [searchParms] = useSearchParams();
    const qty = Number(searchParms.get("qty"));;
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CART : ProductID: {productId} Qty: {qty}</p>
        </div>
    );
}
