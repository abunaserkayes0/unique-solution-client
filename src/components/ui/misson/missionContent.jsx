export default function missionContent({ title, description, icon }) {
  return (
    <div className="card p-6 shadow-sm hover:shadow-lg hover:shadow-neutral-700 hover:transform hover:-translate-y-3 transition-transform">   
      {icon}
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
