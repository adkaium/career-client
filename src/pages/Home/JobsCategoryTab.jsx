import React from "react";

const categories = [
  {name: "Management", icon: "📊"},
  {name: "Marketing & Sale", icon: "📣"},
  {name: "Finance", icon: "🏦"},
  {name: "Human Resource", icon: "👨‍💼"},
  {name: "Retail & Products", icon: "🛍️"},
  {name: "Content Writer", icon: "📝"},
];

const JobsCategoryTabs = ({selectedCategory, setSelectedCategory}) => {
  return (
    <div className="py-16 bg-gray-50">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Jobs of the day
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-500 mt-2 mb-8">
        Search and connect with the right candidates faster.
      </p>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-medium transition
              
              ${
                selectedCategory === cat.name
                  ? "border-blue-500 text-blue-600 bg-blue-50 shadow-sm"
                  : "border-gray-200 text-gray-600 bg-white hover:border-blue-400"
              }
            `}
          >
            <span>{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobsCategoryTabs;
