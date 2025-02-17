export default function service({ service: { title, description, image } }) {
  return (
    <div className="card bg-base-100 shadow-lg hover:cursor-pointer">
      <figure>
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
