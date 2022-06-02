import './App.css';
import React, { useState,useEffect} from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import phoneService from './services/log'
import ConfirmAlert from './components/ConfirmAlert';
import Notification from './components/Notification'

const App = () => {
  const [isFilter,setFilter]=useState(false)
  const [personPopUp,setPersonPopUp]=useState()
  const [ persons, setPersons ] = useState([]) 
  const [name,setName]=useState('')
  const [filteredPersons,setFilteredPersons]=useState([])
  const [toggle,setToggle]=useState(0)
  const [toggleContent,setToggleContent]=useState("")
  const [display,setDisplay]=useState(0)
  const [dlt,setDlt]=useState({})

  useEffect(() => {
    phoneService.getAll().then(txt=>setPersons(txt))
  }, [])
  
  
  const search=(val)=>
    {
      let newArr=[...persons]
      newArr.push(val)
      setFilteredPersons(newArr.filter((person)=>person.name.includes(name)))
    }
  
  const  deleteContact=(event)=>
  {
    const deletePerson=persons.find(person=>person.name===event.target.value)

     setToggleContent(`do you want to delete ${deletePerson.name}`)
     setDisplay(1)
     setDlt(deletePerson)
     
  }
  const deleteField=()=>{
    toggle?phoneService.deleteContact(dlt.id).then(txt=>console.log(txt,"deleted")):<p></p>
    toggle?setPersons(persons.filter(person=>person.id!==dlt.id)):<p></p>
   }
  const updateContact=(obj)=>
  {
    const temp=persons.find(person=>person.name===obj.name)
    
    // const decision =window.confirm(` ${obj.name} already exists in your phonebook.Do you want to replace old number with new number?`)
    setDisplay(1)
      const decision=toggle
    // console.log(temp,"updateing")
    // console.log(persons.map(person=>person.id===temp.id?obj:person))
    decision?phoneService.update(temp.id,obj).then(txt=>setPersons(persons.map(person=>person.id===temp.id?txt:person))):<p>
    </p>
  }
  

  
  
  return (
    <div className="phonebook">
      {display&&<ConfirmAlert setToggle={setToggle} toggle={toggle} toggleContent={toggleContent} setDisplay={setDisplay} deleteField={deleteField}/>}
      <div className="header">
         <h2 id="header2">Phonebook</h2>
      </div>
      
      <div className="operation">
        <Notification  noti={personPopUp}/>
        <div className="addForm">
          <h3 >New Entry </h3>
          <PersonForm persons={persons} setPersons={setPersons} isFilter={isFilter} search={search} updateContact={updateContact} setPopUp={setPersonPopUp}  />
        </div>
      </div>
      
      <div>
        <div className="filterHeader">
      <h3>Phonebook Contacts</h3>
      <Filter persons={persons} setFilter={setFilter} setFilteredPersons={setFilteredPersons} setName={setName} />
      </div>
      <Persons persons={isFilter?filteredPersons : persons } deleteContact={deleteContact} />
      </div>
      <footer>
        <p>© 2021 author: Anush Komroju</p>
    </footer>
    </div>

  )
}
export default App


