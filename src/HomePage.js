// HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      navigate(`/player?url=${encodeURIComponent(videoUrl)}`);
    } else {
      setErrorMessage('Please enter a valid YouTube URL');
    }
  };

  return (
  
<section className="bg-violet-50">
<div class="h-100 bg-gradient-to-br from-violet-50 to-fuchsia-200">

  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl absolute left-100 top-10 h-20 w-100">
       
      <strong className="font-extrabold text-red-700 sm:block"> YouTube </strong> Distraction-Free Player

      </h1>

      <p className="mt-4 text-nowrap sm:text-xl/relaxed text-center">
      We want you to study and Take Notes without any distractions on Youtube
      </p>
      <p className="mt-4 text-nowrap sm:text-xl/relaxed text-center">
      You don't need to switch between tabs to take notes now!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={videoUrl}
          onChange={handleInputChange}
          placeholder="Enter Your Youtube URL here..."
          className="border border-violet-500 rounded-md py-2 px-4 mb-4 w-80 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <button type="submit" className="bg-violet-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Play Video
        </button>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </form>
      </div>
    </div>
  </div>
  </div>
</section>

  );
};

export default HomePage;
