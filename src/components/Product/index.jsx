import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const { products } = useSelector((s) => s);
  const dispatch = useDispatch();
  const getDelete = (data) => {
    dispatch({ type: "ADD_DELETE", payload: data.id });
  };

  return (
    <div
      id="Product"
      style={{
        display: "flex",
        width: "1200px",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "auto",
        padding: "30px 0",
        gap: "50px",
      }}
    >
      {products.map((el) => (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg w-[300px]" src={el.img} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {el.name}
              </h5>
            </a>
            <h3 className="text-white">{el.price} com</h3>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
            <button
              onClick={() => getDelete(el)}
              style={{
                fontSize: "30px",
                color: "red",
              }}
              className=" ml-[200px]"
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
