export default function TextArea({ label, placeholder }) {
  return (
    <div>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        placeholder={placeholder}
        className="textarea textarea-bordered w-full"
      ></textarea>
    </div>
  );
}
