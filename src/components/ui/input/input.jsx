export default function input({ type, placeholder, label, ...rest }) {
  return (
    <div>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input"
        {...rest}
      />
    </div>
  );
}
