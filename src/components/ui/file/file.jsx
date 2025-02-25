export default function File({ label, type }) {
  return (
    <div>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        className="file-input w-full"
      />
    </div>
  );
}
