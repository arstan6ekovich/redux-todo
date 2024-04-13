import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Admin = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { products } = useSelector((s) => s);

  const dispatch = useDispatch();
  const AddProducts = () => {
    if (img === "" || name === "" || price === "") {
      alert("aa");
    } else if (name === products) {
      alert("Class");
    } else {
      let obj = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        img,
        name,
        price,
      };
      setImg("");
      setName("");
      setPrice("");
      dispatch({ type: "ADD_TO_PRODUCT", payload: obj });
      console.log(obj);
      localStorage.setItem("product", JSON.stringify(obj));
    }
  };

  return (
    <div
      id="Admin"
      className="mx-auto w-[500px]"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "80vh",
      }}
    >
      <form className="w-[500px]">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Img
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            onChange={(e) => setName(e.target.value)}
            name="floating_email"
            id="floating_email"
            value={name}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            value={price}
            name="floating_email"
            onChange={(e) => setPrice(e.target.value)}
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product Price
          </label>
        </div>
      </form>
      <button
        onClick={() => AddProducts()}
        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
      >
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Add to Product
        </span>
      </button>
    </div>
  );
};

export default Admin;
