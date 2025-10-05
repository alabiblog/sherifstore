"use client"
import { useEffect, useState } from "react";

export default function Pageload() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake delay just to show preloader (2 seconds)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50  flex items-center justify-center bg-gradient-to-br from-cyan-100  via-teal-200 to-sky-300">
      {/* Spinner */}
      <div className="w-24 h-24 text-blue-500 flex justify-center items-center border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin">SHERIF <br/> <span className="text-orange-500">STORE</span></div>
    </div>
  );
}










// export default function Pageload(){
//     return(
//         <main>
            
//         </main>
//     )
// }