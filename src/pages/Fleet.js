import React from "react";

const Header = () => (
  <header className="absolute w-full z-10">
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-white">Godrive</div>
      <ul className="hidden md:flex space-x-6 text-white">
        <li>
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Our Fleet
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Service Rates
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Pages
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Service
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <button className="text-white bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition">
          Login / Register
        </button>
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </nav>
  </header>
);

const HeroSection = () => (
  <section className="relative h-screen">
    <img
      src="https://img.freepik.com/premium-photo/elegant-business-woman-white-casual-clothes-walks-luxury-car-man-with-suitcase-opens-vehicle-door-having-business-trip-together_506452-21699.jpg"
      alt="Luxury car interior"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute inset-0 flex items-center justify-center text-white px-4 text-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Drive Of Your Life
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Offering the Best Limo Service in New York. Experience It Now!
        </p>
      </div>
    </div>
  </section>
);

const ProdriveFleet = () => {
  const fleet = [
    {
      title: "Economy Premium",
      description:
        "Mercedes-Benz, Cadillac, BMW 5 Series, Cadillac XTS or similar",
      image: "https://your-image-source-link-here.jpg",
      price: "$49",
      perks: ["Free Cancellation", "24/7 Support"],
      reverse: false,
    },
    {
      title: "Business Class",
      description:
        "Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar",
      image: "https://your-image-source-link-here.jpg",
      price: "$99",
      perks: ["Free Cancellation", "24/7 Support"],
      reverse: true,
    },
    {
      title: "Business Van",
      description:
        "Mercedes-Benz V-Class, Mercedes-Benz Sprinter, Cadillac Escalade or similar",
      image: "https://your-image-source-link-here.jpg",
      price: "$189",
      perks: ["Free Cancellation", "24/7 Support"],
      reverse: false,
    },
    {
      title: "First Class",
      description:
        "Mercedes-Benz S-Class, BMW 7 Series, Cadillac Escalade or similar",
      image: "https://your-image-source-link-here.jpg",
      price: "$259",
      perks: ["Free Cancellation", "24/7 Support"],
      reverse: true,
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-900">
          The Prodrive Fleet
        </h2>
        <p className="mt-4 text-gray-600">
          We take pride in our diverse fleet, each one is designed to provide
          the best comfort, safety, and style.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {fleet.map((car, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:space-x-8 bg-gray-100 shadow-lg p-6 rounded-lg ${
              car.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 flex justify-center">
              <img
                src={car.image}
                alt={car.title}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 text-left">
              <h3 className="text-2xl font-bold text-gray-900">{car.title}</h3>
              <p className="text-gray-700 mt-2">{car.description}</p>
              <ul className="text-gray-600 mt-4">
                {car.perks.map((perk, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">•</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900">
                  {car.price}
                </span>
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Fleet = () => (
  <div>
    <Header />
    <HeroSection />
    <ProdriveFleet />
    {/* Add more sections as needed */}
  </div>
);

export default Fleet;
