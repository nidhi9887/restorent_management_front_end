import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMenuItem } from "../../feature/addMenuItemSlice";

const AddFoodItems = () => {
  const {loading,error, massage}= useSelector((state)=>state.addMenuItemSlice)
  const dispatch=useDispatch();
  const [formData,setfomrData]=useState({
    itemName:'',
    description:'',
    price:'',
    image:'',
    isveg:'',
    category:'',

  })
  const handleInputChange=(e)=>{
    setfomrData({

      ...formData,
      [e.target.id]:e.target.value,
      
    }
  )

  }
  console.log(formData);
    const handleSubmit=(e)=>{
      e.preventDefault();
     const res=  dispatch(addMenuItem(formData));
    }
  return (
    <form className="flex justify-center" method="post" action="http://localhost:8080/api/addMenuItem" onSubmit={handleSubmit}>
      <div className="flex-col h-full flex gap-10 text-center  w-[30%]">
        <div>
          <h1 className="text-red-500 font-bold">TFC</h1>
        </div>
        <div>
          <h2>Add Food Items</h2>
        </div>

        <input
          className="border-t-0 border-x-0 outline-none text-lg"
          placeholder="Enter food Item name"
          id="itemName"
          value={formData.itemName}
          onChange={handleInputChange}
          name="foodName"
          type="text"
        />
        <input
          className="border-t-0 border-x-0 outline-none text-lg"
          placeholder="Enter food Description"
          id="description"
          value={formData.description}
          onChange={handleInputChange}
          name="description"
          type="text"
        />
        <input
          className="border-t-0 border-x-0 outline-none text-lg"
          value={formData.price}
          id="price"
          onChange={handleInputChange}
          placeholder="Price"
          type="number"
        />
        <div className="flex justify-around text-lg">
          <label>
            <input type="radio" name="isveg" value="true" onChange={handleInputChange} id='isveg' /> Veg
          </label>
        
          <label>
            <input type="radio" name="isveg" value="false" onChange={handleInputChange} id='isveg'  /> Non-Veg
          </label>
        </div>
        <div className="text-center">
    <label htmlFor="image" className="cursor-pointer w-full inline-block px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
      Add Image
    </label>

    <input type="file" id="image" value={formData.image} className="hidden" onChange={handleInputChange}  accept="image/*" />

    <p id="file-name" className="mt-4 text-lg text-gray-700 " >{formData.image||'No file chosen'}</p>
    <label htmlFor="category">Choose a category:</label>
        <select id="category" name="food-category" onChange={handleInputChange}>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="dairy">Dairy Products</option>
            <option value="meat">Meat</option>
            <option value="seafood">Seafood</option>
            <option value="grains">Grains & Cereals</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="desserts">Desserts</option>
        </select>
  </div>
        <div className="w-full flex justify-center p-2">
        <button className="h-9 w-36 rounded-3xl flex justify-center hover:bg-red-500 text-white items-center gap-2 no-underline border-none bg-red-600" type="submit"> <span>Add item</span> </button>
        </div>
      </div>
    </form>
  );
};

export default AddFoodItems;
