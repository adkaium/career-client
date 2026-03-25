import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {name: "Marketing & Sale", icon: "📣", count: 1526},
  {name: "Customer Help", icon: "🎧", count: 185},
  {name: "Finance", icon: "🏦", count: 168},
  {name: "Software", icon: "💡", count: 1856},
  {name: "Software", icon: "💡", count: 1856},
  {name: "Software", icon: "💡", count: 1856},
  {name: "Human Resource", icon: "👨‍💼", count: 165},
  {name: "Human Resource", icon: "👨‍💼", count: 165},
];

const CategorySection = ({setSelectedCategory}) => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-2">
        Browse by category
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Find the job that’s perfect for you
      </p>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          320: {slidesPerView: 1},
          640: {slidesPerView: 2},
          768: {slidesPerView: 3},
          1024: {slidesPerView: 5},
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.name}>
            <div
              onClick={() => setSelectedCategory(cat.name)}
              className="border rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3 className="font-semibold">{cat.name}</h3>
              <p className="text-sm text-gray-500">
                {cat.count} Jobs Available
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySection;
