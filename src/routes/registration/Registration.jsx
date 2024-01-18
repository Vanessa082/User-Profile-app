import { useState } from "react";
import Navigation from "../../nav/Navigation";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function Registration() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [profile, setProfile] = useLocalStorage('userProfile', {});

    const handleSubmit = (e) => {
        e.preventDefault();


        const newProfile = {
            firstName,
            lastName,
            email,
            phoneNumber,
        };

        setProfile(newProfile);

        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
    };

    history.push('/profiledetail')
    return (
        <div>
            <Navigation />
            <h1>Registration Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
