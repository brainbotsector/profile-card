import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        className="flex flex-col items-center bg-white border-4 border-black rounded-lg shadow md:flex-row md:max-w-2xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out p-6"
        style={{ background: "linear-gradient(135deg, #f8fafc, #d1d5db)" }}
      >
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-lg border border-black">
          <img
            className="w-full h-full object-cover"
            src={user.picture.large}
            alt="User"
          />
        </div>
        <div className="ml-6 flex flex-col justify-start p-4 leading-normal text-left">
          <h2
            className="text-5xl font-bold tracking-tight text-gray-900 mb-20"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)" }}
          >
            {user.name.first} {user.name.last}
          </h2>
          <div className="flex flex-col gap-1.5 -mt-16">
            <p className="text-gray-900">
              <strong>Gender:</strong>{" "}
              {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
            </p>
            <p className="text-gray-900">
              <strong>PHONE NUMBER:</strong> {user.phone}
            </p>
            <p className="text-gray-900">
              <strong>EMAIL ID:</strong> {user.email}
            </p>
            <p className="text-gray-900">
              <strong>DOB:</strong>{" "}
              {new Date(user.dob.date).toLocaleDateString()}
            </p>
            <p className="text-gray-900">
              <strong>Age:</strong> {user.dob.age} years
            </p>
            <p className="text-gray-900">
              <strong>ADDRESS:</strong> {user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}, {user.location.postcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
