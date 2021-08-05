import React, { useState } from "react";
import { data } from "../data";


// Birthday Reminder
const Birthdays = () => {
  const [people, setPeople] = useState(data);
  const [heading, setHeading] = useState(people.length);
  const remove = () => {
    setPeople([])
    setHeading(0)
     
  }
  const deleteItem = (id) => {
      let newItems = people.filter((person)=> person.id !== id)
      setPeople(newItems)
      setHeading(newItems.length)
  }
  return (
    <div className="container">
        <h1>{heading} birthdays!</h1>
      {people.map((person) => {
        const { id, name, age, img } = person;
        return (
          <div className="person-container" key={id}>
            <div className="person">
              <img src={img} alt="" className="img" />
              <div className="person-info">
                <h3 className="name">{name}</h3>
                <p className="age">{age}</p>
              </div>
            </div>
            <button className="btn2" onClick={() => deleteItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={remove}>Remove all</button>
    </div>
  );
};

export default Birthdays;
