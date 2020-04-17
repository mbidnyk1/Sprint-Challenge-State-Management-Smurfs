import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchSmurfs} from '../store/actions/smurfActions';
import SmurfCard from './SmurfCard';

const SmurfList = props => {


    useEffect(() => {
        props.fetchSmurfs();
    },[]);

    return (
        <div>
            <h1>Smurfs</h1>
            {props.isFetching && (
                <Loader type="Puff" color="00BFFF" height={100} width={100} />
            )}
                     
                     {/* {props.smurfState.name && <h3>'{props.smurfState.name}'</h3> }   */}
                     {props.smurfState && props.smurfState.map((smurf, index) => {
                    return <SmurfCard key={index} smurf={smurf} />
                })}
                
            {props.error && <p className='error'>{props.error}</p>}   
        </div>
    )
}

const mapStateToProps = state => {
    console.log('smurf State',state.smurf.smurfState)
    return {
        smurfState:state.smurf.smurfState,
        isFetching: state.smurf.isFetching,
        error: state.smurf.error
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfList);