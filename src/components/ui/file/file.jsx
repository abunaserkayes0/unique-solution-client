export default function File({ label, type, name, onChange }) {
  return (
    <div>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        className="file-input w-full"
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
