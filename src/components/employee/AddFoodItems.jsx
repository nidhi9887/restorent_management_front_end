import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMenuItem } from "../../feature/addMenuItemSlice";
import Loading from "../Loading";

const AddFoodItems = () => {
  const { loading, error, massage } = useSelector(
    (state) => state.addMenuItemSlice
  );
  const [imageName, setImageName] = useState("");
  const dispatch = useDispatch();
  const [formData, setformData] = useState({
    itemName: "",
    description: "",
    price: "",
    image: "",
    isveg: "",
    category: "",
  });
  const handleInputChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImageName(file.name);
    const imagedata = new FormData();
    imagedata.append("image", file);
    //  async function fetch(){
    //   const base64=await convertToBase64(file);
    setformData({ ...formData, image: imagedata });
    // }
    // fetch();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const res = dispatch(addMenuItem(formData));
  };
  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      {loading && <Loading />}
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
          required
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
          required
        />
        <input
          className="border-t-0 border-x-0 outline-none text-lg"
          value={formData.price}
          id="price"
          onChange={handleInputChange}
          placeholder="Price"
          required
          type="number"
        />
        <div className="flex justify-around text-lg">
          <label>
            <input
              type="radio"
              name="isveg"
              value="true"
              onChange={handleInputChange}
              id="isveg"
            />{" "}
            Veg
          </label>

          <label>
            <input
              type="radio"
              name="isveg"
              value="false"
              onChange={handleInputChange}
              id="isveg"
            />{" "}
            Non-Veg
          </label>
        </div>
        <div className="text-center">
          <label
            htmlFor="imgage"
            className="cursor-pointer w-full inline-block px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          >
            Add Image
          </label>

          <input
            type="file"
            id="imgage"
            required
            className="hidden"
            onChange={(e) => handleImageUpload(e)}
            accept="image/*"
          />

          <p id="file-name" className="mt-4 text-lg text-gray-700 ">
            {imageName || "No file chosen"}
          </p>
          <select
            id="category"
            className="w-full h-10"
            required
            defaultChecked
            name="food-category"
            onChange={handleInputChange}
          >
            <option>choose type of food item </option>
            <option value="FRUITS">Fruits</option>
            <option value="VEGETABLES">Vegetables</option>
            <option value="DAIRY">Dairy Products</option>
            <option value="MEAT">Meat</option>
            <option value="SEAFOOD">Seafood</option>
            <option value="GRAINS">Grains & Cereals</option>
            <option value="BEVERAGES">Beverages</option>
            <option value="SNACKS">Snacks</option>
            <option value="DESSERTS">Desserts</option>
          </select>
        </div>
        <div className="w-full flex justify-center p-2">
          <button
            className="h-9 w-36 rounded-3xl flex justify-center hover:bg-red-500 text-white items-center gap-2 no-underline border-none bg-red-600"
            type="submit"
          >
            {" "}
            <span>Add item</span>{" "}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddFoodItems;
