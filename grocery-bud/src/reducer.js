export const reducer = (state, action) => {
    
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