import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../loading";
import Button from "../../button/button";
import { getServiceId } from "../../../../api/api";

export default function ServiceDetails() {
  const { title } = useParams();

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

  const {
    title: serviceTitle,
    description,
    image,
    shortlist = [],
    brand = [],
  } = service;

  return (
    <div className="card bg-base-100 text-xl">
      {image && (
        <figure className="card-image">
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
      <div>
        <h3 className="text-4xl font-bold text-center my-4">
          Our Personal Brands
        </h3>
        {brand.length === 0 ? (
          <p className="text-center text-gray-500">No items found</p>
        ) : (
          brand.map((item, index) => (
            <>
              <div
                key={index}
                className="card lg:card-side bg-base-100 shadow-sm"
              >
                <figure>
                  <img src={item?.imageUrl} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.subTitle}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </>
          ))
        )}
      </div>
      {/* <div
        onClick={() => navigate(`/add/${serviceTitle}`)}
        className="max-w-md mx-auto btn py-3 px-4 rounded-md hover:cursor-pointer hover:bg-gray-800"
      >
        <Button>Add Items</Button>
      </div> */}
    </div>
  );
}
