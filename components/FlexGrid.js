export default function FlexGrid({ children, isInline = false }) {
  return (
    <ul className={isInline ? "flex-inline-grid" : "flex-grid"}>
      {children}
    </ul>
  );
}