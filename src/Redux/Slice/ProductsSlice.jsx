import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  val: [],
  compare: [],
  nextId: 1,
}
const productsSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.val.push({
                ...action.payload,
                id: state.nextId
            })
            state.nextId += 1
        },
        deleteItem: (state, action) => {
            const dlt = window.confirm("Are You Sure")
            if (dlt) {
                state.val = state.val.filter(p => p.id !== action.payload)
                state.compare = state.compare.filter(id => id !== action.payload)
            }
        },
        toggleCompare: (state, action) => {
            const id = action.payload
            if (state.compare.includes(id)) {
                state.compare = state.compare.filter((pid) => pid !== id)
            } else {
                if (state.compare.length < 2) {
                    state.compare.push(id)
                }
                else {
                    alert("Can Only Compare Two Products")
                }
            }
        },
        clearCompare: (state) => { state.compare = [] }
    }
})
export const { addItem, deleteItem, toggleCompare, clearCompare } = productsSlice.actions
export default productsSlice.reducer
