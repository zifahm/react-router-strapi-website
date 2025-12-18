import {
  Heart,
  Home as HomeIcon,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import { useLoaderData } from "react-router";
import { SDK } from "../graphql/client";
import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Prestige Properties - Your Dream Home Awaits" },
    {
      name: "description",
      content:
        "Discover luxury real estate properties and find your perfect home with Prestige Properties.",
    },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const data = await SDK.LandigPage({});
  return {
    header: data.landigPage?.Header,
    suHeading: data.landigPage?.SubHeading,
  };
}

export default function Home() {
  const { header, suHeading } = useLoaderData<typeof loader>();

  const featuredProperties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=350&fit=crop",
      price: "$850,000",
      title: "Modern Luxury Home",
      location: "Beverly Hills, CA",
      beds: 4,
      baths: 3,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1570129477492-45a003537e1d?w=500&h=350&fit=crop",
      price: "$1,200,000",
      title: "Beachfront Villa",
      location: "Malibu, CA",
      beds: 5,
      baths: 4,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=350&fit=crop",
      price: "$650,000",
      title: "Contemporary Apartment",
      location: "Downtown LA, CA",
      beds: 3,
      baths: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <HomeIcon className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Prestige</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Properties
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Contact
              </a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
              Schedule Tour
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&fit=crop)",
          }}
        ></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{header}</h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              {suHeading}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="text"
                placeholder="Search by city, neighborhood..."
                className="px-6 py-3 rounded-lg text-gray-900 flex-1 max-w-md focus:outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold">
                Search Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked luxury homes for discerning buyers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100">
                    <Heart className="w-6 h-6 text-red-500" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {property.price}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {property.location}
                  </div>
                  <div className="flex gap-4 text-gray-700 mb-4 border-t pt-4">
                    <div className="flex items-center gap-1">
                      <HomeIcon className="w-4 h-4" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-lg">🛁</span>
                      <span>{property.baths} Baths</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-bold">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-bold text-lg">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Expert real estate solutions for buyers and sellers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <HomeIcon className="w-12 h-12 text-blue-600" />,
                title: "Property Buying",
                description:
                  "Find your perfect property from our curated collection of premium homes.",
              },
              {
                icon: <Users className="w-12 h-12 text-blue-600" />,
                title: "Expert Consultation",
                description:
                  "Our experienced agents provide personalized advice throughout your journey.",
              },
              {
                icon: <MapPin className="w-12 h-12 text-blue-600" />,
                title: "Market Analysis",
                description:
                  "Data-driven insights to help you make informed real estate decisions.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="text-center p-8 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Connect with our expert agents today and start your journey
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 font-bold"
            >
              <Phone className="w-5 h-5" />
              (123) 456-7890
            </a>
            <a
              href="mailto:info@prestige.com"
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HomeIcon className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold text-white">Prestige</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in finding luxury properties.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>(123) 456-7890</li>
                <li>info@prestige.com</li>
                <li>123 Real Estate Ave, CA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Follow Us</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">
              &copy; 2025 Prestige Properties. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
