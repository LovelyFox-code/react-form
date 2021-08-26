import React from 'react';
import { ReactComponent as Male } from '../gender/assets/images/male.svg'
import { ReactComponent as Female } from '../gender/assets/images/female.svg'
import { ReactComponent as Trans } from '../gender/assets/images/trans.svg'

const genders = {
    "Male": Male,
    "Female": Female,
    "Other": Trans
}

function Button(props) {
    const Gender = genders[props.gender];
    return (
        <button type="button" onClick={props.onClick} className={props.className}>
            <Gender />
            <p>{props.gender}</p>
        </button>
    )
}

export default Button;