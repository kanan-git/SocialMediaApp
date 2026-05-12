import React, { useState, useEffect } from "react";
import icons from "../../../utilities/constants/icons.bsClassNames.js";
import styles from "./Settings.module.css";

function Settings() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [mobile, setMobile] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repeatNewPassword, setRepeatNewPassword] = useState("");
    const [isFormSame, setIsFormSame] = useState(true);

    function currentValuesOnLoad() {
        setFirstname("Lorem");
        setLastname("Ipsum");
        setUsername("loremipsum123");
        setEmail("loremipsum2000@gmail.com");
        setCountry("az");
        setCity("baku");
        setMobile("+994501234567");
        setDateOfBirth("2000-01-13");
    };
    function clearChanges() {
        currentValuesOnLoad();
    };
    function submitForm(e) {
        // e.preventDefault();
        const data = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            country: country,
            city: city,
            mobile: mobile,
            dateOfBirth: dateOfBirth,
            oldPassword: oldPassword,
            newPassword: newPassword
        };
        // console.log(data);
    };
    function isValuesDifferent() {
        if(firstname != "Lorem") {
            return setIsFormSame(false);
        };
        if(lastname != "Ipsum") {
            return setIsFormSame(false);
        };
        if(username != "loremipsum123") {
            return setIsFormSame(false);
        };
        if(email != "loremipsum2000@gmail.com") {
            return setIsFormSame(false);
        };
        if(country != "az") {
            return setIsFormSame(false);
        };
        if(city != "baku") {
            return setIsFormSame(false);
        };
        if(mobile != "+994501234567") {
            return setIsFormSame(false);
        };
        if(dateOfBirth != "2000-01-13") {
            return setIsFormSame(false);
        };
        if(oldPassword != "") {
            return setIsFormSame(false);
        };
        if(newPassword != "") {
            return setIsFormSame(false);
        };
        if(repeatNewPassword != "") {
            return setIsFormSame(false);
        };
        return setIsFormSame(true);
    };

    useEffect(() => {
        currentValuesOnLoad();
    }, []);
    useEffect(() => {
        isValuesDifferent();
    }, [firstname, lastname, username, email, country, city, mobile, dateOfBirth, oldPassword, newPassword, repeatNewPassword]);

    return (
        <section className={"main_container " + styles.settings}>
            {/* center section settings */}
            <h1>settings</h1>
            <form action="" onSubmit={e => submitForm(e)}>
                <div>
                    <span>
                        <label htmlFor="firstname">firstname:</label>
                        <input type="text" placeholder="ex: John" value={firstname} onChange={e => setFirstname(e.target.value)} name="firstname" id="firstname" />
                    </span>
                    <span>
                        <label htmlFor="lastname">lastname:</label>
                        <input type="text" placeholder="ex: Doe" value={lastname} onChange={e => setLastname(e.target.value)} name="lastname" id="lastname" />
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor="username">username:</label>
                        <input type="text" placeholder="ex: johndoe123" value={username} onChange={e => setUsername(e.target.value)} name="username" id="username" />
                    </span>
                    <span>
                        <label htmlFor="email">email:</label>
                        <input type="email" placeholder="ex: johndoe1999@gmail.com" value={email} onChange={e => setEmail(e.target.value)} name="email" id="email" />
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor="country">country:</label>
                        <select name="country" id="country" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} name="country" id="country">
                            <option value={false}>--- select ---</option>
                            <option value="az">azerbaijan</option>
                            <option value="tr">turkey</option>
                            <option value="us">united states</option>
                        </select>
                    </span>
                    <span>
                        <label htmlFor="city">city:</label>
                        <select name="city" id="city" placeholder="City" value={city} onChange={e => setCity(e.target.value)} name="city" id="city">
                            <option value={false}>--- select ---</option>
                            <option value="baku">baku</option>
                            <option value="ganja">ganja</option>
                            <option value="ankara">ankara</option>
                            <option value="istanbul">istanbul</option>
                            <option value="washington">washington</option>
                        </select>
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor="mobile">mobile number:</label>
                        <input type="tel" placeholder="ex: +994509876543" value={mobile} onChange={e => setMobile(e.target.value)} name="mobile" id="mobile" />
                    </span>
                    <span>
                        <label htmlFor="dateOfBirth">date of birth:</label>
                        <input type="date" placeholder="ex: 1999-12-31" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} name="dateOfBirth" id="dateOfBirth" />
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor="oldPassword">confirm old password:</label>
                        <input type="password" placeholder="Confirm old password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} name="oldPassword" id="oldPassword" />
                    </span>
                    <span>
                        <label htmlFor="newPassword">set new password:</label>
                        <input type="password" placeholder="Set new password" value={newPassword} onChange={e => setNewPassword(e.target.value)} name="newPassword" id="newPassword" />
                    </span>
                    <span>
                        <label htmlFor="repeatNewPassword">repeat new password:</label>
                        <input type="password" placeholder="Repeat new password" value={repeatNewPassword} onChange={e => setRepeatNewPassword(e.target.value)} name="repeatNewPassword" id="repeatNewPassword" />
                    </span>
                </div>
                <div>
                    <span>
                        <button type="reset" onClick={clearChanges} disabled={isFormSame}>cancel</button>
                        <button type="submit" disabled={isFormSame}>save</button>
                    </span>
                    <span>
                        <button type="button">delete account</button>
                    </span>
                </div>
            </form>
        </section>
    );
};

export default Settings;
