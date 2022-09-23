// MAGGIE ONLY
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function CustomerForm() {
    const [name, setName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');
    
    const history = useHistory();

    const dispatch = useDispatch();

    const handleNext = event => {
        event.preventDefault();
        // create action for dispatch with payload object with customer data
        const action = {
            type: 'SET_CUSTOMER',
            payload: {
                customer_name: name,
                street_address: streetAddress,
                city: city,
                zip: zip,
                type: type,
            }
        }
        dispatch(action);
        dispatch({type: 'MAKE_SHOWN'});
        // NEXT button needs to send us to the Confirm Order page
        history.push("/ConfirmOrder");
        // clear inputs
        setName('');
        setStreetAddress('');
        setCity('');
        setZip('');
        setType('');
    }

    return (
        <>
            <h2>Step 2: Customer Information</h2>
            <form onSubmit={handleNext}>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    placeholder="Street Address"
                    value={streetAddress}
                    onChange={(event) => setStreetAddress(event.target.value)}
                />
                <input
                    placeholder="City"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
                <input
                    placeholder="Zip"
                    value={zip}
                    onChange={(event) => setZip(event.target.value)}
                />
                <div className="radioButtons"  onChange={(event) => setType(event.target.value)}>
                    <input type="radio" value="pickup" name="type"/> Pickup
                    <input type="radio" value="delivery" name="type"/> Delivery
                </div>
                <button className="nextButton">NEXT</button>
            </form>
        </>
    )
}
export default CustomerForm;