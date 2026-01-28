import React, { useState } from "react";

const Profile = () => {
  return (
    <div className="profile">
      <h3>Saaran Kumar</h3>
      <p>Frontend Developer</p>
      <p>Email: Saaran@example.com</p>
    </div>
  );
};

const ShowHideProfile = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && <Profile />}
    </div>
  );
};

export default ShowHideProfile;
