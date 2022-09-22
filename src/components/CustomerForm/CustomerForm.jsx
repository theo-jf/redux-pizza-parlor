// MAGGIE ONLY
import { useState } from 'react';
import { useDispatch} from 'react-redux'



function CustomerForm() {
    const [name, setName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    // dispatch SET_CUST



    return (
        <>
            <h2>Step 2: Customer Information</h2>
            <form>
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

                <div className="radioButtons">
                    <input type="radio" value="pickup" name="gender" /> Pickup
                    <input type="radio" value="delivery" name="gender" /> Delivery
                </div>

                <button className="nextButton">NEXT</button>

            </form>
        

        </>
    
    )
}
export default CustomerForm;