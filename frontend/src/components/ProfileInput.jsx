const ProfileInput = ({ changeCred, credentials, setNewCred }) => {
  return (
    <div>
      {(!changeCred && (
        <div className="shadow-md mb-1">
          {credentials.firstname[0].toUpperCase() +
            credentials.firstname.slice(1)}
        </div>
      )) || (
        <input
          onChange={(e) => {
            setNewCred((prev) => ({
              ...prev,
              firstName: e.target.value,
            }));
          }}
          type="text"
          className="border pl-1 w-full rounded-md border-gray-300"
          placeholder="Enter First Name"
          minLength={3}
        />
      )}
      {(!changeCred && (
        <div className="shadow-md mt-1">
          {credentials.lastname[0].toUpperCase() +
            credentials.lastname.slice(1)}
        </div>
      )) || (
        <input
          onChange={(e) => {
            setNewCred((prev) => ({
              ...prev,
              lastName: e.target.value,
            }));
          }}
          type="text"
          className="border pl-1 w-full rounded-md border-gray-300 mt-2"
          placeholder="Enter Last Name"
          minLength={3}
        />
      )}
      {changeCred && (
        <input
          onChange={(e) => {
            setNewCred((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
          type="password"
          className="border pl-1 w-full rounded-md border-gray-300 mt-2"
          placeholder="Enter new Password"
          minLength={6}
        />
      )}
    </div>
  );
};

export default ProfileInput;
