import { useEffect, useState } from "react";
import Loading from "../loading";
import Service from "../services/service";
import Content from "../content/content";
import { getServices } from "../../../api/api";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section>
      <Content
        title="Our Services & Affiliate Programs"
        paragraph="We offer a wide range of services to help you achieve your goals."
      />
      <div className="grid grid-cols-1 gap-10 px-5 sm:grid-cols-2 lg:grid-cols-3 mx-10">
        {loading ? (
          <Loading />
        ) : (
          services?.map((service) => (
            <Service key={service._id} service={service} />
          ))
        )}
      </div>
    </section>
  );
}
