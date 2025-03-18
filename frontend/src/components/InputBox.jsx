function InputBox({ title, placeholder, onchange }) {
  return (
    <div className="flex flex-col">
      <div className="font-bold flex pl-1 mb-2 pt-4">{title}</div>
      <input
        onChange={onchange}
        type="text"
        placeholder={placeholder}
        className="font-semibold rounded-md pl-2 border border-gray-300 p-2"
      />
    </div>
  );
}

export default InputBox;
