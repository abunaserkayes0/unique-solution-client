import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../utils/axios";
import Loading from "../loading";

export default function ServiceDetails() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const { data } = await axios.get(`/services/${id}`);
        setService(data);
      } catch (error) {
        console.error("Error fetching service:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) return <Loading />;

  if (!service)
    return <p className="text-center text-gray-500">Service not found</p>;

  const { title, description, image, shortlist = [] } = service;

  return (
    <div className="card bg-base-100 shadow-sm">
      {image && (
        <figure>
          <img src={image} alt={title || "Service Image"} />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {shortlist.length > 0 && (
          <ul className="list-disc list-inside">
            {shortlist.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
