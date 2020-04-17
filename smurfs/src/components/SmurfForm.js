import React, { useState } from 'react';
import axios from 'axios';

const SmurfForm = () => {
    
    const[newSmurf, setNewSmurf] = useState(
        {
            name: "",
            age: "",
            height: ""
        }
    )

    const handleChanges = e => {
        setNewSmurf({...newSmurf,[e.target.name] : e.target.value})
    }

    const sumbitForm = (e,newSmurf) => {
        e.preventDefault()
        console.log('onSubmit',newSmurf)
        axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(
            setNewSmurf(
            {
                name: "",
                age: "",
                height: ""
            })
        )
        .catch(err => {
        console.log(err.res)
        })
    }
    console.log({newSmurf})
    return(
    <>
    <form onSubmit={(e) => sumbitForm(e,newSmurf)}>
    <label>Name:</label>
    <input 
      type='text'
      name='name'
      value={newSmurf.name}
      onChange={handleChanges}
      />
      <label>Age:</label>
      <input 
      type='number'
      name='age'
      value={newSmurf.age}
      onChange={handleChanges}
      />
      <label>Height:</label>
      <input 
      type='text'
      name='height'
      value={newSmurf.height}
      onChange={handleChanges}
      />
      <button type='submit'>submit</button>
      </form>
      </>
    )
}

export default SmurfForm