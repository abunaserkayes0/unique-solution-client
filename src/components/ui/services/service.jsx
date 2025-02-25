import { useNavigate } from "react-router-dom";

export default function Service({
  service: { _id, title, slogan, shortmessage, image },
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/services/${_id}`)}
      className="relative card bg-base-100 shadow-lg hover:cursor-pointer overflow-hidden group"
    >
      <figure className="h-[20rem] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-70"></div>
      </figure>

      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <h2 className="text-2xl font-bold">{slogan}</h2>
        <p className="text-sm">{shortmessage}</p>
      </div>

      <div className="absolute inset-0 shadow-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
    </div>
  );
}
