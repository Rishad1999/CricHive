import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useState } from "react";

export const SearchPlayer = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      console.log(searchQuery);
      const db = getFirestore(); // Initialize Firestore using the Firebase app instance
      // const querySnapshot = await getDocs(
      //   query(collection(db, "players"), where("name", "==", searchQuery))
      // );
      const querySnapshot = await getDocs(
        query(
          collection(db, "players"),
          orderBy("name"), // Order the results by name
          where("name", ">=", searchQuery) // Use a case-insensitive comparison
        )
      );
      console.log("DOCS.DATA", querySnapshot.docs);
      const results = querySnapshot.docs.map((doc) => doc.data());
      setSearchResults(results);
      onSearchResults(results);
      console.log("result", results);
    } catch (error) {
      console.error("Error searching Firestore:", error);
    }
  };

  const handleInputChange = async (e) => {
    console.log("handleInputChange called");
    setSearchQuery(e.target.value);
    if (e.target.value.length >= 2) {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(
          query(
            collection(db, "players"),
            where("name", ">=", e.target.value),
            where("name", "<=", e.target.value + "\uf8ff"), // Use "\uf8ff" to ensure that suggestions match the beginning of the value
            orderBy("name"),
            limit(5)
          )
        );
        const suggestions = querySnapshot.docs.map((doc) => doc.data());
        setSuggestions(suggestions);
        console.log("suggestions", suggestions);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]); // Clear suggestions when input is less than 2 characters
    }
  };

  const handleSuggestionClick = (suggestionName) => {
    setSearchQuery(suggestionName); // Set the suggestion as the search query
    setSuggestions([]); // Clear suggestions after clicking
  };

  return (
    <form className="flex items-center">
      <label for="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
          onChange={handleInputChange}
          required
        />
        {searchQuery.length >= 2 && (
          <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id} // Replace with the actual unique identifier
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(suggestion.name)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        type="submit"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-emerald-600 rounded-lg border border-blue-700 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleSearch}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <span className="sr-only">Search</span>
      </button>
      {/* {searchQuery.length >= 2 && (
        <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id} // Replace with the actual unique identifier
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(suggestion.name)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )} */}
    </form>
  );
};