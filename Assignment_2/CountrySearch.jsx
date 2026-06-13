import { useState } from "react";
function CountrySearch() {
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Argentina", "Armenia",
    "Australia", "Austria", "Bangladesh", "Belgium", "Bhutan",
    "Bolivia", "Brazil", "Bulgaria", "Cambodia", "Canada",
    "Chile", "China", "Colombia", "Croatia", "Cuba",
    "Czech Republic", "Denmark", "Dominican Republic", "Ecuador",
    "Egypt", "Estonia", "Finland", "France", "Germany",
    "Ghana", "Greece", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Japan", "Jordan", "Kenya", "Malaysia",
    "Mexico", "Morocco", "Nepal", "Netherlands",
    "New Zealand", "Nigeria", "Norway", "Pakistan",
    "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russia", "Saudi Arabia",
    "Singapore", "South Africa", "South Korea",
    "Spain", "Sri Lanka", "Sweden", "Switzerland",
    "Thailand", "Turkey", "Ukraine",
    "United Arab Emirates", "United Kingdom",
    "United States", "Vietnam"
  ];

  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Country Search</h2>

      <input
        type="text"
        className="form-control"
        placeholder="Type a country name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="list-group mt-3">
        {filteredCountries.map((country, index) => (
          <li key={index} className="list-group-item">
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountrySearch;
