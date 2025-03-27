const ProfileChangeButton = ({ change, setCurrentPassword, handleUpdate }) => {
  return (
    <div>
      {change && (
        <div className="text-lg mt-2">
          Current Password
          <input
            onChange={(e) => {
              setCurrentPassword(e.target.value);
            }}
            type="password"
            className="border pl-1 w-full rounded-md border-gray-300"
            placeholder="......"
          />
          <button
            onClick={handleUpdate}
            className="border mt-3 cursor-pointer w-full bg-gray-800 text-white py-2 rounded-md"
          >
            Submit Password
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileChangeButton;
