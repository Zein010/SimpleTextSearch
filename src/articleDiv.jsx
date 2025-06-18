function articleDiv(article, searchText) {
  
  return (
    <>
      <div className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold">
          {getHighlightedText(article.title, searchText)}
        </h2>
        <p className="text-gray-500 text-sm">
          {new Date(article.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p className="text-gray-700">
          {getHighlightedText(article.content, searchText)}
        </p>
      </div>
    </>
  );

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
}
export default articleDiv;
