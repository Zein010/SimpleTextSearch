import { useEffect, useState } from "react";
import "./App.css";
import articleDiv from "./articleDiv";
import data from "./data.json";

function App() {
  const [searchText, setSearchText] = useState("");
  const [displayedArticles, setDisplayedArticles] = useState([]);
  useEffect(() => {
    // This effect runs whenever searchText changes
    const articlesDiv = document.getElementById("articlesDiv");
    if (articlesDiv) {
      articlesDiv.scrollTop = 0; // Scroll to top when search text changes
    }
    // Update displayed articles based on search text
    setDisplayedArticles(
      frontendArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchText.toLowerCase()) ||
          article.content.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const frontendArticles = data;
  return (
    <>
      <div class="grid grid-flow-col grid-cols-4 gap-4">
        <div class="col-span-3   ">
          <h1 className="text-4xl mb-4">Search</h1>
          <input
            type="text"
            onInput={(e) => setSearchText(e.target.value)}
            id="searchText"
            className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5    "
            placeholder="Search"
            required
          />
          <div>
            {searchText == "" || !searchText
              ? "Enter text to search posts"
              : displayedArticles.length == 1
              ? "<b>1 post</b> was found"
              : displayedArticles.length == 0
              ? "No posts were found"
              : displayedArticles.length + " posts found"}
          </div>
          <div id="articlesDiv">
            {displayedArticles.map(
              (article) => articleDiv(article, searchText) // Assuming article is a function that returns JSX
            )}
          </div>
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
