export function Input({ className = "", ...props }) {
    return (
      <input
        className={`border rounded-xl p-2 w-full ${className}`}
        {...props}
      />
    );
  }
  