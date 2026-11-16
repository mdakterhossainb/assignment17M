import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            We Build Modern Digital Solutions
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Fast, responsive, and user-friendly websites tailored for your
            business growth.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/services"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionTitle
          title="Featured Services"
          subtitle="Check out some of our most popular web development packages."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Web Design"
            description="Clean, modern UI/UX design using Tailwind CSS."
            price="$199"
          />
          <ServiceCard
            title="React Development"
            description="Single Page Applications with smooth routing."
            price="$399"
          />
          <ServiceCard
            title="SEO Optimization"
            description="Improve your search engine ranking and speed."
            price="$149"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
