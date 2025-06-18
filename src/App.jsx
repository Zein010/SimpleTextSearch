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
      <div className="grid grid-flow-col grid-cols-4 gap-4">
        <div className="col-span-3   ">
          <h1 className="text-4xl mb-4">Search</h1>
          <input
            type="text"
            onInput={(e) => setSearchText(e.target.value)}
            id="searchText"
            className="mb-4 bg-gray-50 border border-gray-300  text-sm rounded-lg block w-full p-2.5    "
            placeholder="Search"
            required
          />
          <div>
            {searchText == "" || !searchText ? (
              <p>Enter text to search posts</p>
            ) : displayedArticles.length == 1 ? (
              <p>
                <b>1 post</b> was found
              </p>
            ) : displayedArticles.length == 0 ? (
              <p>
                <b>No posts</b> were found
              </p>
            ) : (
              <p>
                <b>{displayedArticles.length} posts</b> were found
              </p>
            )}
          </div>
          <div id="articlesDiv">
            {displayedArticles.map(
              (article, index) => {
                return (
                  <>
                    {articleDiv(article, searchText)}
                    {index < displayedArticles.length - 1 ? (
                      <hr className="my-4 text-gray-300" />
                    ) : (
                      ""
                    )}
                  </>
                );
              } // Assuming article is a function that returns JSX
            )}
          </div>
        </div>
        <div className="col-span-1 ...">
          <div className="  rounded border border-gray-200 shadow-sm  p-6">
            <p className="font-normal ">
              <b>Generated Articles.</b> Articles on Frontend Development. All
              articles are writte by <u>AI</u>. (Only the articles are
              AI-Generated)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
