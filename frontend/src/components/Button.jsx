function Button({ label, onclick }) {
  return (
    <div>
      <button
        onClick={onclick}
        className="text-center bg-gray-900 text-white p-2 rounded-lg w-full hover:opacity-80 cursor-pointer"
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
