const ProfileSubmitButton = ({ changeCred, updateCred, setChange }) => {
  return (
    <div>
      {changeCred && (
        <div>
          <button
            onClick={updateCred}
            className="border mt-3 cursor-pointer w-full bg-gray-800 text-white py-2 rounded-md"
          >
            Submit Changes
          </button>
        </div>
      )}

      {!changeCred && (
        <button
          onClick={() => {
            setChange((prev) => !prev);
          }}
          className="border mt-3 cursor-pointer w-full bg-gray-800 text-white py-2 rounded-md"
        >
          Change Credentials
        </button>
      )}
    </div>
  );
};

export default ProfileSubmitButton;
