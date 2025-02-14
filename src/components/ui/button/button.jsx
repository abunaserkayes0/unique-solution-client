export default function button({ children, className, ...rest }) {
  return (
    <button className={`${className}`} {...rest}>
      {children}
    </button>
  );
}
