import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className="px-5 py-3 flex items-center justify-between shadow-lg"
      style={{ background: "#1A2517" }}>
      <div className="flex space-x-10">
        <h1 className="text-[#ACC8A2] text-4xl font-bold">Mobile Comparison</h1>
        {/* <Link to={"/Add"}>
        <h1 className="p-3 ml-10 font-bold text-xl transition duration-300 text-[#ACC8A2] hover:text-[#8FAA80] cursor-pointer">Add Products</h1>
        </Link> */}
        {/* <Link to={"/Show"}>
        <h1 className="p-3 ml-10 font-bold text-xl transition duration-300 text-[#ACC8A2] hover:text-[#8FAA80] cursor-pointer">Show Products</h1>
        </Link> */}
        {/* <Link to={"/Compare"}>
        <h1 className="p-3 ml-10 font-bold text-xl transition duration-300 text-[#ACC8A2] hover:text-[#8FAA80] cursor-pointer">Compare Products</h1>
      </Link> */}
      </div>
    </div>
  )
}
export default Navbar