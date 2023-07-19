import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the API
    fetch('https://api.example.com/user')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>; // Show a loading indicator while data is being fetched
  }

  return (
    <div className="profile-page">
      <img src={userData.avatar} alt="Avatar" />
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
      <p>{userData.bio}</p>
      {/* Add additional profile information here */}
    </div>
  );
};

export default ProfilePage;
