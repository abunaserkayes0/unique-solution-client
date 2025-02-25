export default function TextArea({ label, placeholder, name }) {
  return (
    <div>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        placeholder={placeholder}
        className="textarea textarea-bordered w-full"
        name={name}
      ></textarea>
    </div>
  );
}
