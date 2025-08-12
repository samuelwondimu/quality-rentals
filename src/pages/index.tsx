import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Calendar, Truck, Quote } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen  bg-black text-white">
      {/* Header */}

      <header className="bg-black border-b border-gray-600 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">
              Quality Car & Construction Machinery Rentals
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-white" />
            <div>
              <div className="text-gray-400">Need help?</div>
              <div className="font-semibold text-white">(555) 267-5555</div>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <section className="bg-black px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Reliable Cars & Machinery, Ready When You Are
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional vehicle and construction equipment rentals with
                unmatched reliability. From daily commutes to major construction
                projects, we have the right equipment for your needs.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-black px-8 py-3 text-lg font-semibold rounded-lg transition-colors">
                Book Now
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 px-4 border border-gray-600">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              About Quality Rentals
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With over 25 years of experience in the rental industry,
                we&apos;ve built our reputation on reliability, quality, and
                exceptional service. From individual car rentals to large-scale
                construction equipment, we provide the tools you need to get the
                job done right.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our commitment to maintaining the highest quality fleet and
                providing 24/7 support has made us the trusted choice for
                thousands of customers across the region.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">
                  Our Story
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Founded in 1999, Quality Car & Construction Machinery
                    Rentals began as a small family business with just three
                    vehicles and a vision to provide reliable transportation
                    solutions to our local community.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Today, we&apos;ve grown into the region&apos;s most trusted
                    rental company, serving over 10,000 customers annually with
                    a diverse fleet of premium vehicles and state-of-the-art
                    construction equipment.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Our success is built on three core principles: unwavering
                    reliability, exceptional customer service, and maintaining
                    the highest quality standards in everything we do.
                  </p>
                </div>
              </div>
              <div className="border border-gray-600 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  To empower individuals and businesses by providing reliable,
                  high-quality rental solutions that enable them to achieve
                  their goals efficiently and cost-effectively.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3"></div>
                    <p className="text-gray-300">
                      Maintain the newest, most reliable fleet in the industry
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3"></div>
                    <p className="text-gray-300">
                      Provide 24/7 customer support and emergency assistance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3"></div>
                    <p className="text-gray-300">
                      Deliver transparent pricing with no hidden fees
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 border border-gray-600">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Choose Quality Rentals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="border border-gray-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Premium Fleet
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Our vehicles and equipment are regularly maintained and
                  updated to ensure peak performance and safety.
                </p>
              </div>

              <div className="text-center">
                <div className="border border-gray-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  24/7 Support
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Round-the-clock customer service and emergency roadside
                  assistance whenever you need it.
                </p>
              </div>

              <div className="text-center">
                <div className="border border-gray-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Multiple Locations
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Convenient pickup and drop-off locations across the region for
                  maximum flexibility.
                </p>
              </div>

              <div className="text-center">
                <div className="border border-gray-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Flexible Terms
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  From hourly rentals to long-term leases, we offer flexible
                  terms to meet your specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Track Record Section */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our Track Record
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">25+</div>
                <div className="text-xl text-gray-300 font-semibold mb-2">
                  Years Experience
                </div>
                <div className="text-gray-400">
                  Serving the community since 1999
                </div>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">10K+</div>
                <div className="text-xl text-gray-300 font-semibold mb-2">
                  Happy Customers
                </div>
                <div className="text-gray-400">Annual satisfied clients</div>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-xl text-gray-300 font-semibold mb-2">
                  Fleet Vehicles
                </div>
                <div className="text-gray-400">Cars, trucks, and equipment</div>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">99%</div>
                <div className="text-xl text-gray-300 font-semibold mb-2">
                  Uptime Rate
                </div>
                <div className="text-gray-400">
                  Reliable equipment availability
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">
                  Service Areas
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  We proudly serve customers across the tri-state area with
                  multiple convenient locations and delivery services to major
                  metropolitan areas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300">
                      Metropolitan City Area - Main Hub
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300">
                      Northern Suburbs - Branch Location
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300">
                      Southern Industrial District - Depot
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300">
                      Delivery Available Within 50 Miles
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-black border border-gray-600 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Industry Certifications
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3"></div>
                    <div>
                      <div className="text-white font-semibold">
                        ISO 9001:2015 Certified
                      </div>
                      <div className="text-gray-400 text-sm">
                        Quality management systems
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3"></div>
                    <div>
                      <div className="text-white font-semibold">
                        DOT Compliance
                      </div>
                      <div className="text-gray-400 text-sm">
                        Department of Transportation certified
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3"></div>
                    <div>
                      <div className="text-white font-semibold">
                        Environmental Standards
                      </div>
                      <div className="text-gray-400 text-sm">
                        Green fleet initiatives and compliance
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3"></div>
                    <div>
                      <div className="text-white font-semibold">
                        Safety First Certified
                      </div>
                      <div className="text-gray-400 text-sm">
                        Comprehensive safety training programs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Choose Equipment
                </h3>
                <p className="text-gray-400">
                  Browse our extensive fleet of cars, trucks, and construction
                  machinery to find what you need.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Book Online
                </h3>
                <p className="text-gray-400">
                  Complete your reservation online or call our team for
                  personalized assistance.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Pick Up</h3>
                <p className="text-gray-400">
                  Collect your equipment from our convenient locations with all
                  necessary documentation.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Get to Work
                </h3>
                <p className="text-gray-400">
                  Use our reliable equipment with confidence, backed by 24/7
                  support and maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Outstanding service and reliable equipment. They&apos;ve been our go-to rental company for over 5 years.",
                  author: "Sarah Johnson",
                  role: "Construction Manager",
                },
                {
                  quote:
                    "Professional, punctual, and always have exactly what we need. Highly recommend for any project size.",
                  author: "Mike Chen",
                  role: "Project Director",
                },
                {
                  quote:
                    "The quality of their fleet is unmatched. Clean, well-maintained vehicles every single time.",
                  author: "Lisa Rodriguez",
                  role: "Event Coordinator",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-transparent rounded-none bborder border-gray-600 p-6"
                >
                  <Quote className="h-8 w-8 text-gray-400 mb-4" />
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Truck className="h-8 w-8 text-white" />
                <span className="text-xl font-bold">Quality Rentals</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional vehicle and construction equipment rentals with
                unmatched reliability and service.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors cursor-pointer"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors cursor-pointer"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors cursor-pointer"></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Car Rentals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Truck Rentals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Construction Equipment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Long-term Leasing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div>(555) 267-5555</div>
                <div>info@qualityrentals.com</div>
                <div>123 Industrial Drive</div>
                <div>Business District, City 12345</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Quality Car & Construction Machinery Rentals. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
