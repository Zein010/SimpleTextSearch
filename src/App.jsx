import { useEffect, useState } from "react";
import "./App.css";

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
  const frontendArticles = [
    {
      title: "What is HTML?",
      content:
        "HTML is the structure of a webpage. It defines the layout and content.",
      date: "2025-06-01",
    },
    {
      title: "CSS Basics",
      content:
        "CSS styles your HTML. It controls colors, fonts, spacing, and layout.",
      date: "2025-06-02",
    },
    {
      title: "Intro to JavaScript",
      content:
        "JavaScript adds interactivity to websites like buttons, sliders, and popups.",
      date: "2025-06-03",
    },
    {
      title: "DOM Explained",
      content: "The DOM is how JavaScript accesses and changes HTML elements.",
      date: "2025-06-04",
    },
    {
      title: "Responsive Design",
      content:
        "Websites should look good on all screen sizes using media queries.",
      date: "2025-06-05",
    },
    {
      title: "Flexbox Guide",
      content: "Flexbox is a CSS layout system for aligning and spacing items.",
      date: "2025-06-06",
    },
    {
      title: "CSS Grid Overview",
      content: "Grid lets you design web layouts in rows and columns.",
      date: "2025-06-07",
    },
    {
      title: "JavaScript Events",
      content:
        "Handle user actions like clicks, scrolls, and input with event listeners.",
      date: "2025-06-08",
    },
    {
      title: "Forms in HTML",
      content: "Forms collect user input and send it to servers.",
      date: "2025-06-09",
    },
    {
      title: "Validation in JS",
      content: "Check form inputs with JavaScript before submitting.",
      date: "2025-06-10",
    },
    {
      title: "What is React?",
      content:
        "React is a JavaScript library for building dynamic UIs with components.",
      date: "2025-06-11",
    },
    {
      title: "JSX in React",
      content: "JSX is a syntax in React that mixes HTML with JavaScript.",
      date: "2025-06-12",
    },
    {
      title: "React Props & State",
      content: "Props pass data; state tracks changes in React components.",
      date: "2025-06-13",
    },
    {
      title: "Hooks in React",
      content:
        "Hooks like useState and useEffect add features to function components.",
      date: "2025-06-14",
    },
    {
      title: "Intro to Vue.js",
      content: "Vue is a progressive JavaScript framework for UIs.",
      date: "2025-06-15",
    },
    {
      title: "Single Page Apps",
      content: "SPAs load one HTML page and update content dynamically.",
      date: "2025-06-16",
    },
    {
      title: "CSS Transitions",
      content: "Add smooth animations to elements using CSS transitions.",
      date: "2025-06-17",
    },
    {
      title: "JavaScript Arrays",
      content: "Arrays store lists of items and offer many useful methods.",
      date: "2025-06-18",
    },
    {
      title: "Promises in JS",
      content: "Promises handle async tasks like fetching data from APIs.",
      date: "2025-06-19",
    },
    {
      title: "Async/Await",
      content: "Simplifies handling promises for cleaner async code.",
      date: "2025-06-20",
    },
    {
      title: "APIs with Fetch",
      content: "Use fetch() to get data from APIs in JavaScript.",
      date: "2025-06-21",
    },
    {
      title: "Intro to TypeScript",
      content: "TypeScript adds types to JavaScript for safer code.",
      date: "2025-06-22",
    },
    {
      title: "Using npm",
      content: "npm installs packages and manages dependencies for projects.",
      date: "2025-06-23",
    },
    {
      title: "Frontend vs Backend",
      content: "Frontend is the UI; backend handles data and logic.",
      date: "2025-06-24",
    },
    {
      title: "Using Git for Projects",
      content: "Git tracks code changes and helps with collaboration.",
      date: "2025-06-25",
    },
    {
      title: "What is Webpack?",
      content: "Webpack bundles JS, CSS, and assets for production.",
      date: "2025-06-26",
    },
    {
      title: "Accessibility Basics",
      content:
        "Make websites usable for everyone, including screen reader users.",
      date: "2025-06-27",
    },
    {
      title: "SEO for Developers",
      content: "Use proper HTML and tags to help pages rank in search engines.",
      date: "2025-06-28",
    },
    {
      title: "Deploying to Netlify",
      content:
        "Netlify lets you host frontend apps easily with Git integration.",
      date: "2025-06-29",
    },
    {
      title: "Using DevTools",
      content: "Browser DevTools help you debug and optimize frontend code.",
      date: "2025-06-30",
    },
  ];
  function getHighlightedText(content, searchText) {
    if (!searchText || searchText == "") return content;

    // Escape special characters in the search text
    const escapedSearchText = searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const searchRegex = new RegExp(`(${escapedSearchText})`, "gi");

    const parts = content.split(searchRegex);

    return parts.map((part, i) =>
      part.toLowerCase() === searchText.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200">
          {part}
        </mark>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  }
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
          <div>Enter text to search posts</div>
          <div id="articlesDiv">
            {displayedArticles.map((article, index) => (
              <div
                key={index}
                className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm"
              >
                <h2 className="text-xl font-semibold">
                  {getHighlightedText(article.title, searchText)}
                </h2>
                <p className="text-gray-500 text-sm">
                  {new Date(article.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700">
                  {getHighlightedText(article.content, searchText)}
                </p>
              </div>
            ))}
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
