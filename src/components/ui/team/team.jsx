export default function Team({ member: { image, name, role, bio } }) {
  return (
    <div>
      <div className="p-6 card shadow-sm hover:shadow-lg hover:shadow-neutral-700 hover:transform hover:-translate-y-3 transition-transform text-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>{role}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
}
