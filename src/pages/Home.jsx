import { useState } from "react";
import { supabase } from "../supabase/client";

function Home() {
  const [title, setTitle] = useState("");
  const [product, setProduct] = useState([]);
  async function handleRDSubmit(e) {
    e.preventDefault();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("title", title);
    if (error) {
      console.log("error reading product");
      return;
    }
    setProduct(data);
    console.log(data);
  }
  // async function handleCUSubmit(e) {
  //   e.preventDefault();
  //   const { error } = await supabase
  //     .from("products")
  //     .insert("*")

  // }
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-200 gap-5">
      <div className=" bg-red-400 sm:w-md px-3 py-3 rounded-xl w-9/10">
        <p className="text-gray-200 text-xl font-mono font-extrabold">
          Create update
        </p>
        <form className="flex flex-col mt-3 gap-3 px-3">
          <input
            type="text"
            className="focus:outline-0 focus:border-l-3 border-cyan-900 bg-red-200 px-3 rounded-md py-1"
            placeholder="Title"
            required
          />
          <input
            type="text"
            className="focus:outline-0 focus:border-l-3 border-cyan-900 bg-red-200 px-3 rounded-md py-1"
            placeholder="Describtion"
            required
          />
          <input
            type="number"
            className="focus:outline-0 focus:border-l-3 border-cyan-900 bg-red-200 px-3 rounded-md py-1 w-1/3"
            placeholder="Quantity"
            min={1}
            required
          />
          <div className="tn flex gap-5 justify-end">
            <button
              type="submit"
              className="bg-amber-300 shadow hover:scale-95 transition-all cursor-pointer rounded text-gray-700 px-3 py-1"
            >
              Create
            </button>
            <button
              type="submit"
              className="bg-amber-300 shadow hover:scale-95 transition-all cursor-pointer rounded text-gray-700 px-3 py-1"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <div className="bg-gray-800 sm:w-md px-3 py-2 rounded-xl w-9/10">
        <p className="text-xl font-mono text-gray-200 font-semibold">
          Read Delete{product?.title}
        </p>
        <form
          onSubmit={handleRDSubmit}
          className="bg-green-400 mt-5 p-3 rounded"
        >
          <div className="mt-3 grid gap-2 grid-cols-2">
            <input
              type="text"
              placeholder="Title"
              value={title}
              className="focus:outline-0 focus:border-l-3 border-cyan-950  bg-amber-400 w-full rounded px-2 py-1"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Id"
              className="col-span-1 focus:outline-0 focus:border-l-3 border-cyan-950  bg-amber-400 w-full rounded px-2 py-1"
            />
            <input
              type="number"
              placeholder="Price"
              min={1}
              className="focus:outline-0 focus:border-l-3 border-cyan-950  bg-amber-400 w-full rounded px-2 py-1"
            />
          </div>
          <div className="flex justify-center gap-3 mt-3">
            <button
              type="submit"
              className=" bg-amber-100 rounded text-gray-900 px-3 py-1"
            >
              Delete
            </button>
            <button
              type="submit"
              className="cursor-pointer px-3 py-1 text-gray-900 bg-amber-100 rounded-md"
            >
              Get Product(s)
            </button>
          </div>
        </form>
      </div>
      {product?.title}
    </div>
  );
}

export default Home;
