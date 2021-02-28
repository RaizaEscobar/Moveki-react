import React  from 'react'



const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className= {isOpen ?" grid grid-rows4 text-center items-center bg-yellow-500" : "hidden"} onClick={toggle}>
            <a className="P-4 m-3.5" href="#home">Home</a>
            <a className="P-4 m-3.5" href="#footer">Contact</a>
        </div>
    )
}

export default Dropdown
