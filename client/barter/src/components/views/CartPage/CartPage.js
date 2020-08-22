import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    getCartItems,
    removeCartItem,
} from '../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock';
function CartPage(props) {
    const dispatch = useDispatch();
    

    useEffect(() => {

        let cartItems = [];
        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                });
                dispatch(getCartItems(cartItems, props.user.userData.cart))
                    .then((response) => {
                        if (response.payload.length > 0) {

                        }
                    })
            }
        }

    }, [props.user.userData])

    


    const removeFromCart = (productId) => {

        dispatch(removeCartItem(productId))
            .then((response) => {
                if (response.payload.cartDetail.length <= 0) {
                    alert('Removed succesfully')
                } else {
                    alert('No connections to be removed')
                }
            })
    }

   


    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h1>My Connections</h1>
            <div>

                <UserCardBlock
                    products={props.user.cartDetail}
                    removeItem={removeFromCart}
                />

            </div>

        </div>
    )
}

export default CartPage
