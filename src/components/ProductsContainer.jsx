import { useLoaderData } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProduct = meta.pagination.total;

  const [layout, setLayout] = useState("grid");

  const setActiveStyle = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-primary-content"
    } `;
  };

  return (
    <>
      {/* header */}
      <div className="flex justify-between items-center mt-8 border-b border-blue-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProduct} product{totalProduct > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyle("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyle("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* product */}
      <div>
        {totalProduct === 0 ? (
          <h5 className="text-2xl mt-16">Sorry no more products</h5>
        ) : layout === "grid" ? (
          <ProductGrid />
        ) : (
          <ProductList />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;
