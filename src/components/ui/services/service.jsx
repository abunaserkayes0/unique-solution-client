export default function service({ service: { title, description, image } }) {
  return (
    <div className="card bg-base-100 shadow-lg hover:cursor-pointer hover:shadow-2xl hover:scale-105 hover:transform transition-transform">
      <figure className="h-[20rem] overflow-hidden">
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
}
