import React, { useState } from "react";
import peopleData from "../data/people.json";

const PeopleList = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPeople = peopleData.filter(
    (person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10 animate-fadeIn">
      <header className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Our Amazing Team
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Meet the creative minds behind the work ✨
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="text"
            placeholder="Search by name or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-96 px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700"
          />
          <button
            onClick={onBack}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md transition-colors"
          >
            Back Home
          </button>
        </div>
      </header>

      {filteredPeople.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No results found 😢</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPeople.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-200 hover:-translate-y-1 transform transition-all"
            >
              {/* Only image, no initials */}
              <img
                src={person.image}
                alt={person.name}
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover shadow-md hover:scale-105 transition-transform duration-300"
              />

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                {person.name}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base mb-2">{person.role}</p>
              <p className="text-yellow-500 text-sm sm:text-base font-medium break-all">
                {person.email}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PeopleList;
