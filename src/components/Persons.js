import React  from 'react'
const Persons=({persons,deleteContact})=>{
    

    return <div className="details">
      {persons?persons.map((person)=><li key={person.id}>Name : {person.name} <br></br>Number : {person.number}<br></br> <button onClick={deleteContact} value={person.name}>delete</button> </li>):<p>Nothing to show</p>}
      {/* {isFilter?search(searchVal):<></>} */}
    </div>
  }
  export default Persons