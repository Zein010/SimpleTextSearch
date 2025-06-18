import { useState } from "react";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div class="grid grid-flow-col grid-cols-4 gap-4">
        <div class="col-span-3   ">
          <h1 className="text-4xl mb-4">Search</h1>
          <input
            type="text"
            onInput={(e) => setSearchText(e.target.value)}
            id="searchText"
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
          <div>Enter text to search posts</div>
        </div>
        <div class="col-span-1 ...">
          <div className="  rounded border border-gray-200 shadow-sm  p-6">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <b>bitsofcode.</b> Articles on Frontend Development. All articles
              are writte by <u>Ire Aderinokun</u>, Frontend Developer and User
              Interface Designer.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
