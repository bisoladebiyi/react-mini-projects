import "./App.css";
import React, { useState, useEffect, useRef, useReducer } from "react";
import Loading from "./component/loading";
import Alerts from "./component/alerts";


const reducer = (state, action) => {
    
    if(action.type==='ADD_ITEM'){
        const newItems = [...state.items, action.payload]
        return {
            ...state,
            items: newItems,
            showAlert: true,
            alertContent: "Item Added",
            color: "green"
        }
    }
    if(action.type === 'NO_ITEM') {
        return {
            ...state,
            showAlert: true,
            alertContent: "Please add item",
            color: "orange"
        }
    }
    if(action.type === 'END_ALERT') {
        return {
            ...state,
            showAlert: false
        }
    }
    if(action.type === 'REMOVE_ITEM') {
        const newItems = state.items.filter((item)=> item.id !== action.payload)
        return {
            ...state,
            items: newItems,
            showAlert: true,
            alertContent: "Item Removed",
            color: "red"
        }
    }
    if(action.type === 'CLEAR_ITEMS') {
        return {
            ...state,
            items: [],
            showAlert: true,
            alertContent: "Items Cleared",
            color: "red"
        }
    }
    return state;
}

const defaultState = {
    items: [],
    showAlert: false,
    alertContent: "",
    color: "green"
}
function App() {
//   const input = document.querySelector(".input")
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, defaultState)
  const refInput = useRef(null)


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      refInput.current.focus()
    }, 3000);

  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const submitData = (e) => {
    e.preventDefault();

    if(value) {
        const newItem = {id: new Date().getTime().toString(), value}
        dispatch({type: 'ADD_ITEM', payload: newItem})
        setValue("")
        setNumber(state.items.length + 1)
    } else {
        dispatch({type: 'NO_ITEM'})
    }
  };

  const endAlert = () => {
      dispatch({type: 'END_ALERT'})

  }

  return (
    <div className="App">
      <div className="container">
       {state.showAlert && <Alerts close={endAlert} text={state.alertContent} color={state.color} />}
        <h1>Grocery Bud</h1>
        <form action="">
          <input
            type="text"
            placeholder="e.g Milk"
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            ref={refInput}
          />
          <button className="btn" onClick={(e) => submitData(e)}>
            Submit
          </button>
        </form>
        <p className="item-count">Hi there! You have {number} items</p>
        {state.items.map((item) => {
            const { value, id } = item
          return (
            <div className="item-container" key={id}>
              <p className="item">{value}</p>
              <div>
                <button onClick={(()=> { 
                    dispatch({type: 'REMOVE_ITEM', payload: id}) 
                    setNumber(state.items.length - 1)})}>
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
        {state.items.length > 0 ? (
          <button className="btn2" onClick={()=> {
              dispatch({type: 'CLEAR_ITEMS'})
              setNumber(0)}}>
            Clear list
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default App;

