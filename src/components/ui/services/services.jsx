import { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import Service from "../services/service";
import Content from "../content/content";
export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/services");
        setServices(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchServices();
  }, []);

  return (
    <section>
      <Content
        miniTitle="Services"
        paragraph="Our Services are the best in the industry. We provide the best quality
          of services to our clients. We have a team of experts who are always
          ready to help you with your queries. We provide the best quality of
          services at the most affordable prices. Our services are reliable and
          trustworthy. We have a team of experts who are always ready to help
          you with your queries. We provide the best quality of services at the
          most affordable prices. Our services are reliable and trustworthy."
        title="Our Services"
      />
      <div>
        <div className="grid grid-cols-1 gap-10 px-5 sm:grid-cols-2 lg:grid-cols-3 mx-10">
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
