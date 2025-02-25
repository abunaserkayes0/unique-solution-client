import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../loading";
import Button from "../../button/button";
import { getServiceId } from "../../../../api/api";

export default function ServiceDetails() {
  const { title } = useParams();
  console.log(title);

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await getServiceId(title);
        setService(data);
      } catch (error) {
        console.error("Error fetching service:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [title]);

  if (loading) return <Loading />;

  if (!service)
    return <p className="text-center text-gray-500">Service not found</p>;

  const { title: serviceTitle, description, image, shortlist = [] } = service;

  return (
    <div className="card bg-base-100">
      {image && (
        <figure>
          <img src={image} alt={serviceTitle || "Service Image"} />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{serviceTitle}</h2>
        <p>{description}</p>
        {shortlist.length > 0 && (
          <ul className="list-disc list-inside">
            {shortlist.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div
        onClick={() => navigate(`/add/${serviceTitle}`)}
        className="max-w-md mx-auto btn py-3 px-4 rounded-md hover:cursor-pointer hover:bg-gray-800"
      >
        <Button>Add Items</Button>
      </div>
    </div>
  );
}
