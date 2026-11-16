import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <SectionTitle
        title="About Us"
        subtitle="Learn more about our mission, vision, and dedicated team."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
          alt="Our Team"
          className="rounded-xl shadow-lg w-full h-80 object-cover"
        />
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Passionate Developers & Designers
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We are a creative web agency focused on crafting high-quality
            frontend experiences. Using modern tools like React.js and Tailwind
            CSS, we turn ideas into responsive reality.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our goal is to deliver clean code, fast performance, and intuitive
            user interfaces across all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
