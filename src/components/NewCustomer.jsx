import React, { useState } from 'react'

const NewCustomer = () => {
    const [formdata,setformData]=useState({
        name:"",
        address:"",
        contact:""
    })
    const handleInputChange=(e)=>{
        setformData({
            ...formdata,
            [e.target.name]:e.target.value

        })
    }
  return (
    <div> <form className="flex justify-center" >
    <div className="flex-col h-full flex gap-10 text-center  w-[30%]">
      <div>
        <h1 className="text-red-500 font-bold">TFC</h1>
      </div>
      <div>
        <h2>Add User Details</h2>
      </div>
      <input
        className="border-t-0 border-x-0 outline-none text-lg"
        placeholder="Enter your name"
        id="itemName"
        value={formdata.name}
        name="name"
        onChange={handleInputChange}
        required
        type="text"
      />
      <input
        className="border-t-0 border-x-0 outline-none text-lg"
        placeholder="Enter your address"
        id="address"
        value={formdata.address}
        onChange={handleInputChange}
        name="address"
        type="text"
        required
      />
      <input
        className="border-t-0 border-x-0 outline-none text-lg"
        value={formdata.contact}
        onChange={handleInputChange}
        id="contact"
        name='contact'
        placeholder="Contact number"
        required
        type="tel"
      />
     <div className="w-full flex justify-center p-2">
          <button
            className="h-9 w-36 rounded-3xl flex justify-center hover:bg-red-500 text-white items-center gap-2 no-underline border-none bg-red-600"
            type="submit"
          >
            {" "}
            <span>Next</span>{" "}
          </button>
        </div>
    
    </div>
  </form></div>
  )
}

export default NewCustomer