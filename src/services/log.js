import axios from "axios"
const baseURL="/api/persons"

const getAll=()=>{
 const res=axios.get(baseURL)
  return res.then(Response=> Response.data)

}


const create=(personObject)=>{
const res=axios.post(baseURL,personObject)
  return res.then(Response=> Response.data)
}

const deleteContact=(id)=>{
  const res=axios.delete(`${baseURL}/${id}`)
  console.log("deleting")
  return res.then(Response=> Response.data)
}

const update=(id,obj)=>{
  const res=axios.put(`${baseURL}/${id}`,obj)
  console.log("updating in server")
  return res.then(Response=> Response.data)
}

const logging=  { getAll,create,deleteContact,update }

export default logging