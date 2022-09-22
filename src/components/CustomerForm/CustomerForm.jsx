// MAGGIE ONLY
import { useState } from 'react';
import { useDispatch} from 'react-redux';

function CustomerForm() {
    const [name, setName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('unchecked');
    
    const dispatch = useDispatch();

    const handleNext = event => {
        event.preventDefault();
        console.log('in handleNext function');
        console.log('in handleNext here is what we are going to dispatch:', name, streetAddress, city, zip, type);
        // create action for dispatch with payload object with customer data
        const action = {
            type: 'SET_CUST',
            payload: {
                customer_name: name,
                street_address: streetAddress,
                city: city,
                zip: zip,
                type: type,
            }
        }
        dispatch(action);
        // clear inputs
        setName('');
        setStreetAddress('');
        setCity('');
        setZip('');
        setType('unchecked');

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

                <div onChange={(event) => setType(event.target.value)} className="radioButtons">
                    <input type="radio" value="pickup" name="gender" /> Pickup
                    <input type="radio" value="delivery" name="gender" /> Delivery
                </div>

                <button className="nextButton">NEXT</button>

            </form>
        

        </>
    
    )
}
export default CustomerForm;