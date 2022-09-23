// EVERYONE !!!!!1!!!!!!

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {

    const dispatch = useDispatch();

    const backClass = useSelector(store => store.back);
    const totalClass = useSelector(store => store.total);


    const total = useSelector(store => store.totalPrice);
    const history = useHistory();

    // const changeBackClass = () => {
    //     let action;
    //     (history.location.pathname === '/CustomerForm') ? 
    //     action = ({type: 'MAKE_SHOWN'}) :
    //     (history.location.pathname === '/ConfirmOrder') ?
    //     action = ({type: 'MAKE_SHOWN'}) :
    //     action = ({type: 'MAKE_HIDDEN'});
    //     dispatch(action);
    // }

    console.log('history in header', history)
    const retreatPosthaste = () => {
        history.goBack()
    }



    console.log('History:', history);

    return(
        <header className='App-header'>
            <p className={backClass} onClick={retreatPosthaste}>👈</p>
            <h1 className='App-title'>Prime Pizza! 🫠</h1>
            <h2 className={totalClass}>Total: {Number(total.toFixed(2))}</h2>
        </header>
    )
}