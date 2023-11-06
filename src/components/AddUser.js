import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addUser } from "../reducer/userActions";

const AddUser = () => {
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [IsNameValid, SetIsNameValid] = useState(true);
    const [IsEmailValid, SetIsEmailValid] = useState(true);
    const [IsPhoneValid, SetIsPhoneValid] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if( name.trim().length === 0 ) {
            SetIsNameValid(false);
            return;
        }else{ SetIsNameValid(true); }
        if( email.trim().length === 0 || !email.includes('@') ) {
            SetIsEmailValid(false);
            return;
        }else{ SetIsEmailValid(true); }
        if( phone.trim().length === 0 || phone.trim().length < 10 ) {
            SetIsPhoneValid(false);
            return;
        }else{ SetIsPhoneValid(true); }
        
        const newUSer = {
            name,
            email,
            phone
        }

        dispatch(addUser(newUSer));

        setName('');
        setPhone('');
        setEmail('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    name="username"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {!IsNameValid && <p>Please enter the username</p>}
            </div>
            <div>
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {!IsEmailValid && <p>Please enter valid Email</p>}
            </div>
            <div>
                <input
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                {!IsPhoneValid && <p>Please enter valid Phone number</p>}
            </div>
            <button type="submit">Add User</button>
        </form>
    );
}
export default AddUser;