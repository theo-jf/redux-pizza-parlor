// EVERYONE !!!!!1!!!!!!

import { useSelector } from "react-redux";

export default function Header() {

    const total = useSelector(store => store.totalPrice);

    return(
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza! 🫠</h1>
            <h2>Total: {total}</h2>
        </header>
    )
}