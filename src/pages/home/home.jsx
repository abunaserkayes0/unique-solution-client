import { useState, useEffect } from "react";
import Hero from "../../components/ui/hero/hero";
import Services from "../../components/ui/services/services";
import Testimonials from "../../components/ui/testimonials/testimonials";

export default function Home() {
  const [showServices, setShowServices] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);

  useEffect(() => {
    const servicesTimer = setTimeout(() => {
      setShowServices(true);
    }, 1000);

    const testimonialsTimer = setTimeout(() => {
      setShowTestimonials(true);
    }, 2000); 

    return () => {
      clearTimeout(servicesTimer);
      clearTimeout(testimonialsTimer);
    };
  }, []);

  return (
    <>
      <div className="animate__animated animate__fadeInDown">
        <Hero />
      </div>

      {showServices && (
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <Services />
        </div>
      )}

      {showTestimonials && (
        <div className="animate__animated animate__fadeIn animate__delay-2s">
          <Testimonials />
        </div>
      )}
    </>
  );
}
