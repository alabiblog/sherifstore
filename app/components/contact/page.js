"use client"

import Image from "next/image"
import { BiMessageError } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup"
import Popup from "../popup/page";


const Schema = yup.object().shape({
  fullName: yup.string().required("Full Name Is Required"),
  email: yup.string().required("Email Is Required"),
  note: yup.string().required("note Is Required"),
})

export default function Service(){
  const [open,setOpen] = useState(false)

  const {handleBlur,handleChange,handleSubmit,touched,errors,values} = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      note: "",
    },
    validationSchema: Schema,
    onSubmit: (values, { resetForm }) => {
      setOpen(true)
      console.log("Form submitted:", values)

      // ✅ Clear the form after submit
      resetForm()
    }
  })

  return(
    <main className="min-h-screen">
      <div className="relative">
        <Image
          height={100}
          width={1000}
          src={"/serr.jpg"}
          alt="serr"
          className="w-100 h-50 opacity-40 lg:w-350 lg:h-80"/>
        <p className="text-2xl text-green-300 font-extrabold absolute top-20 right-40 lg:right-140 lg:top-35 lg:text-5xl">Contact</p>
      </div>

      <div className="flex justify-center mt-15">
        <BiMessageError  className="text-8xl text-black"/>
      </div>
      <p className="text-2xl text-center mt-5  text-green-300">Say Hello</p>
      <p className="text-3xl text-center mt-5 text-black font-extrabold ">Get In Touch With Us</p>

      <div className="p-5 ">
        <div className="flex gap-3 mt-5">
          <div className="h-15 w-15 rounded-full bg-green-300 flex justify-center items-center">
            <LuPhoneCall className="text-4xl text-white"/>
          </div>
          <div className="mt-2">
            <p className="text-sm text-green-300 ">Call Us Now</p>
            <p className="text-lg text-black font-extrabold">+234 **** **** **</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <div className="h-15 w-15 rounded-full bg-green-300 flex justify-center items-center">
            <MdOutlineMessage  className="text-4xl text-white"/>
          </div>
          <div className="mt-2">
            <p className="text-sm text-green-300 ">Support Email</p>
            <p className="text-lg text-black font-extrabold">@sherifstore@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <div className="h-15 w-15 rounded-full bg-green-300 flex justify-center items-center">
            <CiLocationOn className="text-4xl text-white"/>
          </div>
          <div className="mt-2">
            <p className="text-sm text-green-300 ">Our Address</p>
            <p className="text-lg text-black font-extrabold">Abuja *******</p>
          </div>
        </div>
      </div>

      <div className="h-150 shadow-2xl bg-gradient-to-br from-green-200 rounded-xl to-green-300 mx-2 shadow-green-500">
        <form onSubmit={handleSubmit}>
          <p className="text-2xl font-bold text-black text-center mt-10">Contact Us</p>
          <div className="mt-15 mx-2">
            <TextField
              fullWidth
              color="primary"
              focused
              type="text"
              id="fullName"
              placeholder="Enter Full Name"
              label="Full Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullName}/>
            {touched.fullName && errors.fullName ? <span className="text-sm text-red-500">{errors.fullName}</span> : null}
          </div>

          <div className="mt-10 mx-2">
            <TextField
              fullWidth
              color="primary"
              focused
              type="text"
              id="email"
              placeholder="sherifstore@gmail.com"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}/>
            {touched.email && errors.email ? <span className="text-sm text-red-500">{errors.email}</span> : null}
          </div>

          <div className="mt-10 mx-2">
            <TextField
              fullWidth
              color="primary"
              focused
              type="text"
              rows={5}
              multiline
              id="note"
              placeholder="Note"
              label="Note"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.note}/>
            {touched.note && errors.note ? <span className="text-sm text-red-500">{errors.note}</span> : null}
          </div>
           
          <button type="submit" className="text-blue-600 font-extrabold text-lg border bg-gradient-to-br from-green-500 to-green-100 rounded-xl to-green-800 w-90 mt-4 mx-5 ">Submit</button>
        </form>
      </div>

      <Popup open={open} onClose={() => setOpen(false)}/>

      


    <div className="w-full h-[800px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31517.642289258954!2d7.472392535114455!3d9.090589349206946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a42a5e3f47d%3A0xa5b2f06d94fb9ecb!2sMaitama%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1759602883165!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}   // ✅ object, not string
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="h-30 ng-gray-50" >

    </div>
 

    </main>
  )
}






































// "use client"

// import Image from "next/image"
// import { BiMessageError } from "react-icons/bi";
// import { LuPhoneCall } from "react-icons/lu";
// import { MdOutlineMessage } from "react-icons/md";
// import { CiLocationOn } from "react-icons/ci";
// import { TextField } from "@mui/material";
// import { useState } from "react";
// import { useFormik } from "formik";
// import * as yup from "yup"
// import Popup from "../popup/page";


// const Schema = yup.object().shape({
//   fullName: yup.string().required("Full Name Is Required"),
//   email: yup.string().required("Email Is Required"),
//   note: yup.string().required("note Is Required"),
  

// })

// export default function Service(){
//  const[open,setOpen]= useState(false)
    

//     const{handleBlur,handleChange,handleSubmit,touched,errors,values}=useFormik({
//       initialValues: {
//         fullName: "",
//         email: "",
//         note: "",
        
//       },
//       onSubmit:((resetForm)=>{
//         setOpen(true)
//         resetForm()
//         console.log(resetForm)
        
//       }),
//       validationSchema: Schema
//     })

//     return(
//         <main className="min-h-screen">
//             <div className="relative">
//          <Image
//          height={100}
//          width={1000}
//          src={"/serr.jpg"}
//          alt="serr"
//          className="w-100 h-50 opacity-40 lg:w-350 lg:h-80"/>
//          <p className="text-2xl text-green-300 font-extrabold absolute top-20 right-40">Contact</p>
//          </div>
//           <div className="flex justify-center mt-15">
//                      <BiMessageError  className="text-8xl text-black"/>
//                   </div>
//                   <p className="text-2xl text-center mt-5  text-green-300">Say Hello</p>
//                   <p className="text-3xl text-center mt-5 text-black font-extrabold ">Get In Touch With Us</p>
//           <div className="p-5 ">
//           <div className="flex gap-3 mt-5">
//             <div className="h-15 w-15 rounded-full bg-green-300 flex justify-center items-center">
//                 <LuPhoneCall className="text-4xl text-white"/>
//             </div>
//             <div className="mt-2">
//                 <p className="text-sm text-green-300 ">Call Us Now</p>
//                 <p className="text-lg text-black font-extrabold">+234 **** **** **</p>
//             </div>
//           </div>
//           <div className="flex gap-3 mt-5">
//             <div className="h-15 w-15 rounded-full bg-green-300 flex justify-center items-center">
//                 <MdOutlineMessage  className="text-4xl text-white"/>
//             </div>
//             <div className="mt-2">
//                 <p className="text-sm text-green-300 ">Support Email</p>
//                 <p className="text-lg text-black font-extrabold">@sherifstore@gmail.com</p>
//             </div>
//           </div>
//           <div className="flex gap-3 mt-5">
//             <div className="h-15 w-15 rounded-full bg-green-300 flex justify-center items-center">
//                 <CiLocationOn className="text-4xl text-white"/>
//             </div>
//             <div className="mt-2">
//                 <p className="text-sm text-green-300 ">Our Address</p>
//                 <p className="text-lg text-black font-extrabold">Abuja *******</p>
//             </div>
//           </div>
//           </div>
//           <div className="h-150 shadow-2xl bg-gradient-to-br from-green-200 rounded-xl  to-green-300 mx-2 shadow-green-500">
//            <form onSubmit={handleSubmit}>
//              <p className="text-2xl font-bold text-black text-center  mt-10">Contact Us</p>
//            <div className="mt-15 mx-2">
//              <TextField
//              fullWidth
//              color="primary"
//              focused
//               type="text"
//               id="fullName"
//               placeholder="Enter Full Name"
//               label="Full Name"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.fullName}/>
//           {touched.fullName && errors.fullName ? <span className="text-sm text-red-500">{errors.fullName}</span> : null}

//            </div>
//            <div className="mt-10 mx-2">
//              <TextField
//              fullWidth
//              color="primary"
//              focused
//               type="text"
//               id="email"
//               placeholder="sherifstore@gmail.com"
//               label="Email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}/>
//           {touched.email && errors.email ? <span className="text-sm text-red-500">{errors.email}</span> : null}

//            </div>
//            <div className="mt-10 mx-2">
//              <TextField
//              fullWidth
//              color="primary"
//              focused
//               type="text"
//               rows={5}
//               multiline
//               id="note"
//               placeholder="Note"
//               label="Note"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.note}/>
//           {touched.note && errors.note ? <span className="text-sm text-red-500">{errors.note}</span> : null}

//            </div>
           
//            <button type="submit" className=" text-blue-600 font-extrabold text-lg border  bg-gradient-to-br from-green-500 rounded-xl  to-green-800  w-90 mt-4 mx-5">Sumbit</button>
//            </form>

//           </div>
//           <Popup open={open} onClose={() => setOpen(false)}/>
         
         
         
         
//          </main>
//     )
// }







 






