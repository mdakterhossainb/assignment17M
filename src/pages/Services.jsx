import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Responsive websites with React & Tailwind.",
      price: "$299",
    },
    {
      id: 2,
      title: "UI/UX Prototyping",
      description: "Wireframing and modern interface design.",
      price: "$199",
    },
    {
      id: 3,
      title: "Landing Page Design",
      description: "High-converting single page websites.",
      price: "$149",
    },
    {
      id: 4,
      title: "Website Redesign",
      description: "Modernize your old website layout.",
      price: "$249",
    },
    {
      id: 5,
      title: "Performance Tuning",
      description: "Speed up load times and core vitals.",
      price: "$129",
    },
    {
      id: 6,
      title: "Bug Fixing & Support",
      description: "Quick fixes for React & CSS issues.",
      price: "$99",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <SectionTitle
        title="Our Services"
        subtitle="Click on any service button to select a plan."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            price={service.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
