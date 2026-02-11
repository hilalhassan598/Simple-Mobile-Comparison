import { useSelector, useDispatch } from "react-redux"
import { deleteItem, toggleCompare } from "../Redux/Slice/ProductsSlice"
import { useState } from "react"
import { redirect } from "react-router-dom"
import AddProductForm from "./AddProductForm"
import { Link } from "react-router-dom"

function ProductList() {
  const [showAdd, setShowAdd] = useState(false)
  const { val, compare } = useSelector(state => state.product)
  const dispatch = useDispatch()
  const products = val.filter((p) => compare.includes(p.id))
  const showTable = products.length === 2
  const lowestPrice = Math.min(...products.map(p => p.price))
  const highestRating = Math.max(...products.map(p => p.rating))
  function Rendermessage() {
    if (products.length > 2) {
      return (<p className="text-center mt-10 text-[#1A2517] text-4xl">
        Select Only 2 products to compare
      </p>)
    }
    else {
      return (<p className="text-center mt-10 text-[#1A2517] text-4xl">
        Select Atlease 2 products to compare
      </p>)
    }
  }
  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-4">
      <Link to={"/add"}>
        <button
        onClick={()=>setShowAdd(!showAdd)}
          className="px-3 py-1 rounded bg-red-600 text-white">
          {!showAdd ? "Add Product" : "Close Form"}
        </button>
      </Link>
      {showAdd && <AddProductForm/>}
      {val.map(product => (
        <div
          key={product.id}
          className="flex justify-between items-center p-4 rounded-lg"
          style={{ backgroundColor: "#1A2517", color: "#ACC8A2" }}>
          <div>
            <p className="font-bold">{product.name}</p>
            <p>{product.brand}</p>
            <p>${product.price} | ⭐ {product.rating}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(toggleCompare(product.id))}
              className="px-3 py-1 rounded font-semibold bg-[#ACC8A2] text-[#1A2517] hover:bg-[#9BB88E] transition">
              {compare.includes(product.id) ? "Remove" : "Compare"}
            </button>
            <button
              onClick={() => dispatch(deleteItem(product.id))}
              className="px-3 py-1 rounded bg-red-600 text-white">
              Delete
            </button>
          </div>
        </div>
      ))}
      {showTable ?
        (<div className="max-w-6xl mx-auto mt-10 overflow-x-auto">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr>
                <th className="p-4 bg-[#1A2517] text-[#ACC8A2] border border-[#ACC8A2]">
                  Feature
                </th>
                {products.map((p) => (
                  <th
                    key={p.id}
                    className="p-4 bg-[#1A2517] text-[#ACC8A2] border border-[#ACC8A2]">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 font-semibold bg-[#1A2517] text-[#ACC8A2] border">
                  Brand
                </td>
                {products.map((p) => (
                  <td key={p.id} className="p-3 border">
                    {p.brand}
                  </td>
                ))}
              </tr>

              {/* Price */}
              <tr>
                <td className="p-3 font-semibold bg-[#1A2517] text-[#ACC8A2] border">
                  Price ($)
                </td>
                {products.map((p) => (
                  <td
                    key={p.id}
                    className={`p-3 border font-semibold ${p.price === lowestPrice ? "bg-[#ACC8A2] text-[#1A2517]" : ""}`}>
                    ${p.price}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold bg-[#1A2517] text-[#ACC8A2] border">
                  Rating
                </td>
                {products.map(p => (
                  <td
                    key={p.id}
                    className={`p-3 border font-semibold ${p.rating === highestRating ? "bg-[#ACC8A2] text-[#1A2517]" : ""}`}>
                    ⭐ {p.rating}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>) : <Rendermessage />}
    </div>
  )
}

export default ProductList
