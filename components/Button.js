export default function Button({ children, onClick, variant = "primary", className = "" }) {
    const baseStyle = "px-4 py-2 rounded font-medium transition duration-200";
  
    const variants = {
      primary: "bg-yellow-400 text-black hover:bg-yellow-300",
      secondary: "bg-gray-800 text-white hover:bg-gray-700",
      ghost: "bg-transparent text-white border border-white hover:bg-white hover:text-black",
    };
  
    return (
      <button
        onClick={onClick}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }
  