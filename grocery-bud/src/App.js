import "./App.css";
import React, { useState, useEffect } from "react";
import Loading from "./component/loading";
import Alerts from "./component/alerts";

function App() {
  const [number, setNumber] = useState(0);
  const [showClearBtn, setShowClearBtn] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const submitData = (e) => {
    e.preventDefault();
    setItems([...items, value]);
    setNumber(items.length + 1);
    console.log(items);
    setValue("");

    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
    setShowClearBtn(true);

    if (items.includes(value)) {
      setAdded(false);
      setAlreadyAdded(true);
      setNumber(items.length)

      setTimeout(() => {
        setAlreadyAdded(false);
      }, 2000);
      return setItems(items);
    }
  };

  const clearItems = () => {
    setItems([]);
    setNumber(0);
    setShowClearBtn(false);
  };
  const deleteItem = (index) => {
    const newItems = items.filter((item) => items.indexOf(item) !== index);
    setItems(newItems);
    setNumber(items.length - 1);
    setRemoved(true);
    setTimeout(() => {
      setRemoved(false);
    }, 2000);
  };

  return (
    <div className="App">
      <div className="container">
        {added && <Alerts text="Added new Item" />}
        {removed && <Alerts text="Item removed" red />}
        {alreadyAdded && (
          <Alerts text="You already have this item in your list" orange />
        )}
        <h1>Grocery Bud</h1>
        <form action="">
          <input
            type="text"
            placeholder="e.g Milk"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn" onClick={(e) => submitData(e)}>
            Submit
          </button>
        </form>
        <p className="item-count">Hi there! You have {number} items</p>
        {items.map((item, index) => {
          return (
            <div className="item-container" key={index}>
              <p className="item">{item}</p>
              <div>
                <button onClick={() => deleteItem(index)}>
                  <svg
                    className="delete"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
        {showClearBtn && (
          <button className="btn2" onClick={clearItems}>
            Clear list
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
