import React from 'react'

const Navbar = ({ filter, categories }) => {
    return (
        <div className="navbar">
            <ul className="nav">
                {categories.map((categories)=> {
                    const index = categories.index;
                return  <li key={index}><button className="btn" onClick={()=>filter(categories)}>{categories}</button></li>
                })}
            </ul>
        </div>
    )
}

export default Navbar
