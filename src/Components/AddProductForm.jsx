import React, { useState } from "react"
import { addItem } from "../Redux/Slice/ProductsSlice"
import { useDispatch } from "react-redux"

function AddProductForm() {
    const dispatch = useDispatch()
    const [product, setProduct] = useState({
        name: "",
        brand: "",
        price: 0,
        rating: ""
    })
    const [nameErr, setNameErr] = useState("")
    const [brandErr, setBrandErr] = useState("")
    const [priceErr, setPriceErr] = useState("")
    const [ratingErr, setRatingErr] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        console.log("Form submitted")
        setNameErr("")
        setBrandErr("")
        setPriceErr("")
        setRatingErr("")
        if (product.name.trim() === "") {
            setNameErr("Product Name Must Be Filled")
            return
        }
        if (product.brand.trim() === "") {
            setBrandErr("Brand Name Must Be Filled")
            return
        }
        if (product.price <= 0) {
            setPriceErr("Invalid Pricing")
            return
        }
        if (product.rating === "" || product.rating < 0 || product.rating > 5) {
            setRatingErr("Invalid Rating, Should Be In Between 0-5")
            return
        }
        dispatch(addItem(product))
        setProduct({
            name: "",
            brand: "",
            price: 0,
            rating: ""
        })
    }

    return (
        <div
            className="max-w-xl mx-auto mt-10 p-6 rounded-xl shadow-lg"
            style={{ backgroundColor: "#1A2517" }}
        >
            <h2
                className="text-2xl font-semibold mb-6 text-center"
                style={{ color: "#ACC8A2" }}
            >
                Add Product
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Product Name */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-[#ACC8A2]">
                        Product Name
                    </label>
                    <input
                        onChange={(e) => {
                            setProduct({
                                ...product,
                                name: e.target.value
                            })
                        }}
                        value={product.name}
                        type="text"
                        placeholder="iPhone 15"
                        className="w-full rounded-lg px-4 py-2 border outline-none
                       focus:ring-2"
                        style={{ borderColor: "#ACC8A2" }}
                    />
                    <p className="font-bold text-red-600">{nameErr}</p>
                </div>

                {/* Brand */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-[#ACC8A2]">
                        Brand
                    </label>
                    <input
                        onChange={(e) => setProduct({
                            ...product,
                            brand: e.target.value
                        })}
                        value={product.brand}
                        type="text"
                        placeholder="Apple"
                        className="w-full rounded-lg px-4 py-2 border outline-none
                       focus:ring-2"
                        style={{ borderColor: "#ACC8A2" }}
                    />
                    <p className="font-bold text-red-600">{brandErr}</p>
                </div>

                {/* Price & Rating */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-[#ACC8A2]">
                            Price ($)
                        </label>
                        <input
                            onChange={(e) => setProduct({
                                ...product,
                                price: Number(e.target.value)
                            })}
                            value={product.price}
                            type="number"
                            placeholder="799"
                            
                            className="w-full rounded-lg px-4 py-2 border outline-none
                         focus:ring-2"
                            style={{ borderColor: "#ACC8A2" }}
                        />
                        <p className="font-bold text-red-600">{priceErr}</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-[#ACC8A2]">
                            Rating
                        </label>
                        <input
                            onChange={(e) => setProduct({
                                ...product,
                                rating:Number(e.target.value)
                            })}
                            value={product.rating}
                            type="number"
                            step="0.1"
                            min="0"
                            max="5"
                            placeholder="4.6"
                            
                            className="w-full rounded-lg px-4 py-2 border outline-none
                         focus:ring-2"
                            style={{ borderColor: "#ACC8A2" }}
                        />
                        <p className="font-bold text-red-600">{ratingErr}</p>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 rounded-lg font-semibold transition-colors duration-300 bg-[#ACC8A2] text-[#1A2517] hover:bg-[#8FAA80]"
                    // style={{
                    //     backgroundColor: "#ACC8A2",
                    //     color: "#1A2517"
                    // }}
                >
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default AddProductForm
