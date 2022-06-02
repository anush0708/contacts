import '../confirmAlert.css'
const ConfirmAlert=({setToggle,toggle,toggleContent,setDisplay,deleteField})=>{
    const handleToggle=(e)=>{
        e.target.id==="yesButton"?setToggle(1):setToggle(0)
        setDisplay(0)
        console.log(toggle)
        deleteField()
    }
    return<>
    <div className=""></div>
    <div className="confirmAlert">
        <div>
        <p>
           {toggleContent} {toggle}
        </p>
        </div>
    <div>
        <button id="yesButton" onClick={handleToggle}> YES </button>
        <button id="noButton" onClick={handleToggle} > NO </button>
        
    </div>
    </div>
    </>
}
export default ConfirmAlert