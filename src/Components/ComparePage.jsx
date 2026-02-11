import { useSelector } from "react-redux"
function ComparePage() {
  const { val, compare } = useSelector(state => state.product)
  const products = val.filter((p) => compare.includes(p.id))
  if (products.length < 2) {
    return (
      <p className="text-center mt-10 text-[#1A2517] text-4xl">
        Select at least 2 products to compare
      </p>
    )
  }
  const lowestPrice = Math.min(...products.map(p => p.price))
  const highestRating = Math.max(...products.map(p => p.rating))
  return (
    <div className="max-w-6xl mx-auto mt-10 overflow-x-auto">
      <table className="w-full border-collapse text-center">
        <thead>
          <tr>
            <th className="p-4 bg-[#1A2517] text-[#ACC8A2] border border-[#ACC8A2]">
              Feature
            </th>
            {products.map((p)=> (
              <th
                key={p.id}
                className="p-4 bg-[#1A2517] text-[#ACC8A2] border border-[#ACC8A2]">
                {p.name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* Brand */}
          <tr>
            <td className="p-3 font-semibold bg-[#1A2517] text-[#ACC8A2] border">
              Brand
            </td>
            {products.map((p)=> (
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
            {products.map((p)=> (
              <td
                key={p.id}
                className={`p-3 border font-semibold ${p.price === lowestPrice ? "bg-[#ACC8A2] text-[#1A2517]" : ""}`}>
                ${p.price}
              </td>
            ))}
          </tr>

          {/* Rating */}
          <tr>
            <td className="p-3 font-semibold bg-[#1A2517] text-[#ACC8A2] border">
              Rating
            </td>
            {products.map(p => (
              <td
                key={p.id}
                className={`p-3 border font-semibold ${p.rating === highestRating
                    ? "bg-[#ACC8A2] text-[#1A2517]"
                    : ""
                  }`}
              >
                ⭐ {p.rating}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default ComparePage
