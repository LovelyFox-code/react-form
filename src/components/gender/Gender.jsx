import React, { useState } from 'react';
import Icon from '../gender/assets/images/icon.svg';
import Button from '../button/Button'




function Gender(props) {

    const [isActive, setActive] = useState("false");

    const handleToggle = (index, gender) => {
        setActive(index);
        props.callback(gender);
    };


    const buttons = props.genders.map((gender, index) => (
        <Button gender={gender} onClick={() => handleToggle(index, gender)} className={isActive === index ? "btn-gender-active" : "btn-gender " }/>
    ));
    
    return (
        <div>
            <img className="logo-icon" src={Icon} alt="icon" />
            <p className="form-name">Sign Up with email</p>
            <p>Gender</p>
            <div className="btn-group">
                {buttons}
            </div>
        </div>
    )
}

export default Gender;