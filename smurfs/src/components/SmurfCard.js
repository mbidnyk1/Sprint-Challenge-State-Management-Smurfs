import React from 'react';
import { smurfReducer } from '../store/reducers/smurfReducer';

const SmurfCard = props => {
    
    return(
        <>
        <p>{props.smurf.name}</p>
        <p>{props.smurf.age}</p>
        <p>{props.smurf.height}</p>
        </>
    )
}

export default SmurfCard