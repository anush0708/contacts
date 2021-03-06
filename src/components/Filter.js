import React  from 'react'
import "../App.css"
const Filter=({persons,setFilter,setFilteredPersons,setName})=>{
  let icon=document.getElementsByClassName("searchIcon")
  let input=document.getElementsByClassName("searchInput")
  let close=document.getElementsByClassName("searchClose")
  const viewSearch =(event)=>{
    input[0].classList.add("inputOpenState")
    close[0].classList.add("searchOpenClose")
  }
  
    const closeView =(event)=>{
    input[0].classList.remove("inputOpenState")
    close[0].classList.remove("searchOpenClose")
  }
    const searchName=(event)=>
    {
        setName(event.target.value)
        console.log(event.target.value)
        event.target.value.length>0?setFilter(true):setFilter(false)
        setFilteredPersons(persons.filter((person)=>person.name.includes(event.target.value)))
    }
    return <>
    
      <div className="search"> 
          <svg className="searchIcon" viewBox="0 0 512 512" width="95" title="search" onClick={viewSearch}>
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
          </svg>
          <input type="text" className="searchInput" autofocus placeholder=" " onChange={searchName}></input>
          <svg className="searchClose" viewBox="0 0 352 512" width="100" title="times" onClick={closeView}>
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          </svg>
      </div>


    </>
  }
  export default Filter