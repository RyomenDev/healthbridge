const ProfileDetails = ({ userData }) => (
  <div className="space-y-4">
    <p>
      <strong>Name:</strong> {userData.name}
    </p>
    <p>
      <strong>Email:</strong> {userData.email}
    </p>
    <p>
      <strong>Age:</strong> {userData.age}
    </p>
    <p>
      <strong>Gender:</strong> {userData.gender}
    </p>
    <p>
      <strong>Address:</strong> {userData.address}
    </p>
    <p>
      <strong>Phone:</strong> {userData.phone}
    </p>
  </div>
);

export default ProfileDetails;
