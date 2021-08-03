import React, { useState } from "react";
import { data } from "../data";

const Tours = () => {
  const [city, setCity] = useState(data);
  const [ show , setShow ] = useState(false)
  const [ btnText, setBtnText ] = useState(true)
  const changeDesc = () => {
    setShow(!show)
    setBtnText(!btnText)
  }
  const remove = (id) => {
    let newCities = city.filter((city)=> city.id !== id)
    setCity(newCities)
  }
  return (
    <div>
      <h1 className="tour-heading">Our Tours</h1>
      {city.map((city) => {
        const { id, title, description, price, img } = city;
        return (
          <div key={id} className="tour-container">
            <img src={img} alt="" />
            <div className="city-info">
              <div className="name-price">
                <h3 className="tour-name">{title}</h3>
                <h3 className="price">{price}</h3>
              </div>
              <p className="desc">
                  {show ? description : `${description.substring(0,200)}...`}
          <button className="tour-btn" onClick={changeDesc}>{btnText ? "Read more" : "Show less"}</button>
              </p>
              <div className="btn2-container">
              <button className="tour-btn2" onClick={()=>remove(id)}>Not Interested</button>
              </div>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tours;