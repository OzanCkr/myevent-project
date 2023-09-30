import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets-products/wallp1.webp";
import "../styles/Home.css";
import { useState } from "react";
import "../styles/app.css";
import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";

function Home() {
  const [results, setResults] = useState([]);

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && (
            <SearchResultsList results={results} />
          )}
        </div>
        <h1> Oz's </h1>
        <p> Let's blow off some steam!</p>
        <Link to="/shop">
          <button> Book now! </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
