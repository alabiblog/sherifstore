"use client"
import { useState } from "react"
import products from "../products/page"

export default function Home() {
  const [query, setQuery] = useState("")
  const [cart, setCart] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  const [loadingId, setLoadingId] = useState(null) // <-- Added loading state

  // Filter products based on search
  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.price.toString().includes(query) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  )

  // Add product to cart (with quantity) and show spinner
  const handleAddToCart = (item) => {
    setLoadingId(item.id)
    setTimeout(() => {
      setCart((prev) => {
        const found = prev.find((p) => p.id === item.id)
        if (found) {
          return prev.map((p) =>
            p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
          )
        }
        return [...prev, { ...item, quantity: 1 }]
      })
      setLoadingId(null)
    }, 2000)
  }

  // Increase quantity
  const handleIncrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  // Decrease quantity
  const handleDecrease = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  // Dummy payment handler
  const handlePay = () => {
    setCart([])
    setShowPopup(true)
  }

  return (
    <main className="p-6">
      {/* Search bar */}
      <div className="mb-6">
        <input
          type="search"
          placeholder="Search products,price.."
          className="w-full max-w-md h-12 px-4 border rounded-xl shadow"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>

      {/* Product list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-tr from-green-500 via-green-200 to-green-300 border rounded-2xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-xl mb-3"
            />
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-600 mb-2">${item.price}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
            <div className="border p-2 w-30 mt-2 flex justify-center items-center">
              <button
                className=" text-sm text-white/90 bg-green-600 px-4 py-2 rounded-lg flex items-center justify-center"
                onClick={() => handleAddToCart(item)}
                disabled={loadingId === item.id}
              >
                {loadingId === item.id ? (
                  <span className="w-5 h-5 border-2 border-white border-t-green-600 rounded-full animate-spin mr-2"></span>
                ) : (
                  "Add To Cart"
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart and Pay button */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-white border rounded-xl shadow-lg p-4 z-50 w-80">
          <h3 className="font-bold mb-2">Cart ({cart.reduce((a, b) => a + b.quantity, 0)})</h3>
          <ul className="mb-2">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center mb-2">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded mr-2" />
                <span className="flex-1 text-sm">{item.name} - ${item.price}</span>
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-l"
                    onClick={() => handleDecrease(item.id)}
                  >-</button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-r"
                    onClick={() => handleIncrease(item.id)}
                  >+</button>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-lg w-full"
            onClick={handlePay}
          >
            Pay
          </button>
        </div>
      )}

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Payment Successful!</h2>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-lg mt-2"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="bored h-20"></div>
    </main>
  )
}















// "use client"
// import { useState } from "react"
// import products from "../products/page"

// export default function Home() {
//   const [query, setQuery] = useState("")
//   const [cart, setCart] = useState([])
//   const [showPopup, setShowPopup] = useState(false)

//   // Filter products based on search
//   const filtered = products.filter((item) =>
//     item.name.toLowerCase().includes(query.toLowerCase()) ||
//     item.price.toString().includes(query) ||
//     item.description.toLowerCase().includes(query.toLowerCase())
//   )

//   // Add product to cart (with quantity)
//   const handleAddToCart = (item) => {
//     setCart((prev) => {
//       const found = prev.find((p) => p.id === item.id)
//       if (found) {
//         return prev.map((p) =>
//           p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
//         )
//       }
//       return [...prev, { ...item, quantity: 1 }]
//     })
//   }

//   // Increase quantity
//   const handleIncrease = (id) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     )
//   }

//   // Decrease quantity
//   const handleDecrease = (id) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0)
//     )
//   }

//   // Dummy payment handler
//   const handlePay = () => {
//     setCart([])
//     setShowPopup(true)
//   }

//   return (
//     <main className="p-6">
//       {/* Search bar */}
//       <div className="mb-6">
//         <input
//           type="search"
//           placeholder="Search products,price.."
//           className="w-full max-w-md h-12 px-4 border rounded-xl shadow"
//           onChange={(e) => setQuery(e.target.value)}
//           value={query}
//         />
//       </div>

//       {/* Product list */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filtered.map((item) => (
//           <div
//             key={item.id}
//             className="bg-gradient-to-tr from-green-500 via-green-200 to-green-300 border rounded-2xl p-4 shadow hover:shadow-lg transition"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-40 object-cover rounded-xl mb-3"
//             />
//             <h2 className="text-xl font-bold">{item.name}</h2>
//             <p className="text-gray-600 mb-2">${item.price}</p>
//             <p className="text-sm text-gray-500">{item.description}</p>
//             <div className="border p-2 w-30 mt-2 flex justify-center items-center">
//               <button
//                 className="text-sm text-white/90 bg-green-600 px-4 py-2 rounded-lg"
//                 onClick={() => handleAddToCart(item)}
//               >
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Cart and Pay button */}
//       {cart.length > 0 && (
//         <div className="fixed bottom-6 right-6 bg-white border rounded-xl shadow-lg p-4 z-50 w-80">
//           <h3 className="font-bold mb-2">Cart ({cart.reduce((a, b) => a + b.quantity, 0)})</h3>
//           <ul className="mb-2">
//             {cart.map((item) => (
//               <li key={item.id} className="flex items-center mb-2">
//                 <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded mr-2" />
//                 <span className="flex-1 text-sm">{item.name} - ${item.price}</span>
//                 <div className="flex items-center">
//                   <button
//                     className="px-2 py-1 bg-gray-200 rounded-l"
//                     onClick={() => handleDecrease(item.id)}
//                   >-</button>
//                   <span className="px-2">{item.quantity}</span>
//                   <button
//                     className="px-2 py-1 bg-gray-200 rounded-r"
//                     onClick={() => handleIncrease(item.id)}
//                   >+</button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <button
//             className="bg-green-600 text-white px-4 py-2 rounded-lg w-full"
//             onClick={handlePay}
//           >
//             Pay
//           </button>
//         </div>
//       )}

//       {/* Popup Modal */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//           <div className="bg-white rounded-xl shadow-lg p-8 text-center">
//             <h2 className="text-2xl font-bold mb-4 text-green-600">Payment Successful!</h2>
//             <button
//               className="bg-green-600 text-white px-4 py-2 rounded-lg mt-2"
//               onClick={() => setShowPopup(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="bored h-20"></div>
//     </main>
//   )
// }












