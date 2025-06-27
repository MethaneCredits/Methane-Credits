export function Button({ children, onClick, variant = "default" }) {
  const base = "px-4 py-2 rounded-xl font-semibold transition";
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}