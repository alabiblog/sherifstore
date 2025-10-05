"use client"
import { useState } from "react"
import products from "../products/page"



export default function Home(){
  const [query, setQuery] = useState("")

  // Filter products based on search
  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.price.toString().includes(query) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  )
 
  return(
    <main className=" p-6">
      {/* Search bar */}
      <div className="mb-6">
        <input 
          type="search" 
          placeholder="Search products,price.."
          className="w-full max-w-md h-12 px-4 border rounded-xl shadow"
          onChange={(e)=>setQuery(e.target.value)}
          value={query}
        />
      </div>

      {/* Product list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((item, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-tr from-green-500 via-green-200 to-green-300  border rounded-2xl p-4 shadow hover:shadow-lg transition"
          >
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-40 object-cover rounded-xl mb-3"
            />
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-600 mb-2">${item.price}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="bored h-20">

      </div>
    </main>
  )
}







































// "use client"
// import { useState } from "react"
// import Product from "./product/page"





// export default function Home(){
//   const [query,setQuery]= useState("")

//   const filtered = Product.filter((item)=>
//         item.name.toLowerCase().include(query.toLowerCase()) || 
//         item.price.toString().include(query),

//   )
//   return(
//     <main>
//       <div>
//         <input type="search" value={query} className="w-50 h-10" onChange={(e)=>setQuery(e.target.value)}>
//         </input>
//       </div>
//       <div>
//         {filtered> 0}
//       </div>

//     </main>
//   )
// }








































// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { products } from "./product/page";

// export default function SearchPage() {
//   const [query, setQuery] = useState("");

//   const filtered = products.filter((item) =>
//       item.name.toLowerCase().includes(query.toLowerCase()) ||
//       item.price.toString().includes(query)
//   );

//   return ( 
//     <div className="p-6 max-w-3xl  mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Search Products</h2>

//       <input
//         type="text"
//         placeholder="Search by name or price..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)} 
//         className="w-full p-2 border rounded-lg mb-6 focus:outline-none focus:ring focus:border-blue-400"
//       />

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {filtered.length > 0 ? (
//           filtered.map((item) => (
//             <div
//               key={item.id}
//               className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//             >
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 width={200}
//                 height={150}
//                 className="rounded-lg object-cover w-full h-40"
//               />
//               <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
//               <p className="text-gray-500">{item.description}</p>
//               <p className="font-bold mt-1">${item.price}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-400">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// }






























