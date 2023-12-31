import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userProfileData, setUserProfileData] = useState(null);

  useEffect(() => {
    const fetchUserProfileData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserProfileData(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user profile data', error);
      }
    };

    fetchUserProfileData();                                   
  }, []);

  return (

    <>
    <div className="flex justify-center items-center h-screen">
    <div className="bg-gradient-to-r from-teal-100 to-gray-100 max-w-md relative mx-auto rounded-xl overflow-hidden shadow-lg">
      {userProfileData && (
        <>
          <img
            src={userProfileData.picture.large}
            alt="User"
            className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">
              {`${userProfileData.name.first} ${userProfileData.name.last}`}
            </div>
            <div className="flex justify-center items-center space-x-2 mb-4">
              <svg
                className="h-5 w-5 text-gray-400 dark:text-gray-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  className=""
                  d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
              <div className="text-black-700 text-gray-800">
                {`${userProfileData.location.city}, ${userProfileData.location.country}`}
              </div>
            </div>

            <div className="flex justify-center items-center space-x-2">
              <button className="rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-3 py-1">
                Follow
              </button>
              <a
                href={`mailto:${userProfileData.email}`}
                className="rounded-full border-2 border-gray-400 dark:border-gray-700 bg-gray-950 font-semibold text-blue-700 dark:text-white px-3 py-1 inline-block text-center"
              >
                Message
              </a>
            </div>

            <p className="text-gray-700 text-sm mt-4">
            Hello, I'm Kaarthik, and I'm thrilled to unveil my latest project a seamlessly integrated professional profile card. This sleek design combines my UI/UX skills with dynamic content retrieval through API calls
            </p>
          </div>
        </>
      )}

      <div className="px-4 py-4">
        <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
          <svg
            className="h-6 w-6 text-gray-600 dark:text-gray-400"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              className=""
              d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
            />
          </svg>
          <span>
            <strong className="text-black dark:text-white">12</strong> Followers you know
          </span>
        </div>
        <div className="flex">
          <div className="flex justify-end mr-2">
            <img
              className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt=""
            />
            <img
              className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/women/31.jpg"
              alt=""
            />
            <img
              className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/men/33.jpg"
              alt=""
            />
            <img
              className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt=""
            />
            <img
              className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt=""
            />
            <img
              className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/women/42.jpg"
              alt=""
            />
            <span className="flex items-center justify-center bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white font-semibold border-2 border-gray-200 dark:border-gray-700 rounded-full h-10 w-10">
              +999
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 absolute bottom-0 right-0">
        <a
          href="https://github.com/Kaarthik-07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-600 dark:text-gray-400 cursor-pointer"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
    </div>
    
    </>
  );
};

export default UserProfile;
