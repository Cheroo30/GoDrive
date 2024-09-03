import React, { useState } from "react";
import {
  FaMobileAlt,
  FaCar,
  FaStar,
  FaCalendar,
  FaUser,
  FaCreditCard,
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";

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
      src="https://watermark.lovepik.com/photo/20211208/large/lovepik-appreciation-of-luxury-car-interiors-picture_501689054.jpg"
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
        <div className="flex justify-center flex-wrap gap-4">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition">
            Distance
          </button>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition">
            Hourly
          </button>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition">
            Flat Rate
          </button>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ image, title, description }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
    <img
      src={image}
      alt={title}
      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </p>
    </div>
  </div>
);

// Carousel Component
const CarCarousel = ({ cars, currentCarIndex, setCurrentCarIndex }) => {
  const nextCar = () => {
    setCurrentCarIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const prevCar = () => {
    setCurrentCarIndex(
      (prevIndex) => (prevIndex - 1 + cars.length) % cars.length
    );
  };

  return (
    <div className="relative">
      <div className="flex justify-center items-center space-x-4">
        {cars.map((car, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ${
              index === currentCarIndex
                ? "w-1/2 opacity-100 scale-110"
                : "w-1/4 opacity-30"
            }`}
          >
            <img src={car.image} alt={car.name} className="w-full h-auto" />
          </div>
        ))}
      </div>
      <button
        onClick={prevCar}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextCar}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

// Services and Fleet Component
const ServicesAndFleet = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(1);

  const services = [
    {
      title: "Limousine Service",
      image:
        "https://kaizenaire.com/wp-content/uploads/2023/12/image-1974.jpeg",
      description:
        "Experience luxury and comfort with our premium limousine service.",
    },
    {
      title: "Chauffeur Service",
      image:
        "https://www.mundilimos.com/wp-content/uploads/2021/05/private-chauffeur-service.jpg",
      description: "Professional drivers ensuring a safe and stylish journey.",
    },
    {
      title: "Airport Transfer",
      image:
        "https://partyvehiclesbangkok.com/wp-content/uploads/2017/09/airport1.jpg",
      description:
        "Timely and stress-free transportation to and from the airport.",
    },
  ];

  const cars = [
    {
      name: "Car 1",
      image:
        "https://ymimg1.b8cdn.com/resized/car_model/2765/pictures/2906400/mobile_listing_main_02.jpg",
      passengers: 4,
      luggage: 2,
    },
    {
      name: "Mercedes-Benz S500 L Black 4 Matic",
      image:
        "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/ebfa3412-22b5-479f-a95a-cd3d6a31952b/d2f0bac7-0f60-4d7b-b196-e07c04bd41a8.png",
      passengers: 4,
      luggage: 2,
    },
    {
      name: "Car 3",
      image:
        "https://t4.ftcdn.net/jpg/03/34/86/25/360_F_334862506_aEUglq6z5MscMZ6KumX5MOh2as4VpURG.jpg",
      passengers: 4,
      luggage: 2,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Our Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
        <p className="text-gray-600 text-center mb-8">
          We offer wide range of services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* The Godrive Fleet Section */}
      <section className="container mx-auto px-4 py-2">
        <h2 className="text-3xl font-bold text-center mb-2">
          The Godrive Fleet
        </h2>
        <p className="text-gray-600 text-center mb-8">
          We have a wide range of vehicles to cater to your needs
        </p>
        <div className="flex flex-col md:flex-row justify-center mb-8">
          <button className="bg-black text-white px-6 py-2 mb-4 md:mb-0 md:mr-4">
            Our Cars
          </button>
          <button className="border border-gray-300 px-6 py-2">
            Search Cars
          </button>
        </div>
        <CarCarousel
          cars={cars}
          currentCarIndex={currentCarIndex}
          setCurrentCarIndex={setCurrentCarIndex}
        />
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold">
            {cars[currentCarIndex].name}
          </h3>
          <div className="flex justify-center space-x-4 mt-2">
            <span>{cars[currentCarIndex].passengers} Passengers</span>
            <span>{cars[currentCarIndex].luggage} Luggage</span>
          </div>
        </div>
      </section>
    </div>
  );
};

const HeroSection2 = () => {
  return (
    <section
      className="relative bg-cover bg-center h-96"
      style={{
        backgroundImage:
          'url("https://t3.ftcdn.net/jpg/06/32/23/68/360_F_632236811_9EAV0c08lQ8SUcyQwmWEq7MRBES5YvLo.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Or anywhere you need us to take
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Not only taking to night parties, weddings, casinos, birthdays but we
          also take you to anywhere you want to go.
        </p>
        <a
          href="#"
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold mb-4"
        >
          Online Booking
        </a>
        <p className="text-lg">Call Now 0-123-333-4343</p>
      </div>
    </section>
  );
};

const StepItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full">
        {icon}
      </div>
    </div>
    <div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <FaMobileAlt size={24} />,
      title: "Book Via App Or Web",
      description: "Book your package for the specified location or duration.",
    },
    {
      icon: <FaCar size={24} />,
      title: "Choose Your Ride",
      description:
        "Select the ride from our fleet according to your needs and get confirmation via email.",
    },
    {
      icon: <FaStar size={24} />,
      title: "Enjoy Your Ride",
      description:
        "Enjoy your luxurious ride. You can leave a review after the ride is complete.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 text-gray-800">
            How It Works
          </h3>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2">
            <img
              src="https://www.free-mockup.com/wp-content/uploads/edd/2024/02/Free-Laptop-Website-Mockup.jpg"
              alt="How It Works"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            {steps.map((step, index) => (
              <StepItem key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ChooseUsItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const ArticleItem = ({ image, title, date, comments }) => (
  <div className="flex flex-col">
    <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="flex text-sm text-gray-600">
      <span className="mr-4">{date}</span>
      <span>{comments} Comments</span>
    </div>
  </div>
);

const WhyChooseUsAndArticles = () => {
  const chooseUsItems = [
    {
      icon: <FaCalendar />,
      title: "Easy Online Booking",
      description:
        "Book your ride with just a few clicks on our user-friendly platform.",
    },
    {
      icon: <FaUser />,
      title: "Professional Drivers",
      description:
        "Our experienced and courteous drivers ensure a safe and comfortable journey.",
    },
    {
      icon: <FaCar />,
      title: "Variety of Car Brands",
      description:
        "Choose from a wide selection of premium vehicles to suit your preferences.",
    },
    {
      icon: <FaCreditCard />,
      title: "Online Payment",
      description:
        "Secure and convenient online payment options for hassle-free transactions.",
    },
  ];

  const articles = [
    {
      image:
        "https://img.freepik.com/premium-photo/driving-car-pov-highway-point-view-first-person-perspective_157125-18414.jpg",
      title: "What To Do If Your Rental Car Has An Accident",
      date: "July 29, 2023",
      comments: 0,
    },
    {
      image:
        "https://www.shutterstock.com/image-photo/happy-black-guy-suit-using-600nw-1842706714.jpg",
      title: "When Traveling To Los Angeles Rent Early",
      date: "August 9, 2023",
      comments: 0,
    },
    {
      image:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/47336/e-class-interior-steering-wheel.jpeg?q=80",
      title: "Car Rental Mistakes That Can Cost You Big",
      date: "August 16, 2023",
      comments: 0,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Why Choose Us Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We offer quality services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chooseUsItems.map((item, index) => (
            <ChooseUsItem key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Articles & Tips Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-2">
          Articles & Tips
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Latest news & articles
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleItem key={index} {...article} />
          ))}
        </div>
      </section>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-white font-serif text-3xl mb-4">Godrive</h3>
        <p className="text-gray-400 mb-2">Jakarta, Indonesia</p>
        <p className="text-gray-400 mb-2">123-456-7890</p>
        <p className="text-gray-400 mb-8">support@Godrive.com</p>

        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaYoutube />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaGoogle />
          </a>
        </div>

        <div className="flex flex-wrap justify-center space-x-4 mb-8 text-gray-400">
          {[
            "New York",
            "Istanbul",
            "London",
            "Berlin",
            "Los Angeles",
            "Paris",
            "All cities",
          ].map((city) => (
            <a key={city} href="#" className="hover:text-white mb-2 md:mb-0">
              {city}
            </a>
          ))}
        </div>

        <div className="border-t border-gray-600 py-4">
          <p className="text-gray-400">
            Copyright Godrive © 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

const Home = () => (
  <div>
    <Header />
    <HeroSection />
    <ServicesAndFleet />
    <HeroSection2 />
    <HowItWorksSection />
    <WhyChooseUsAndArticles />
    <Footer />
    {/* Add more sections as needed */}
  </div>
);

export default Home;
