// PlayerPage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PlayerPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const videoUrl = searchParams.get('url');

    // Function to extract video ID from YouTube URL
    const getVideoIdFromUrl = (url) => {
        const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return videoIdMatch && videoIdMatch[1];
    };

    // Construct embed URL from video URL
    const embedUrl = videoUrl ? `https://www.youtube.com/embed/${getVideoIdFromUrl(videoUrl)}` : null;

    const [note, setNote] = useState('');

    // Function to clear the note content
    const clearNote = () => {
        setNote('');
    };

    return (
        <div>

            <header class="bg-violet-100 border-fuchsia-200 px-4 lg:px-6 py-2.5 dark:bg-fuchsia-500">
                <div class="flex justify-center items-center mx-auto max-w-screen-xl">
                    <h1 class="text-xl font-semibold whitespace-nowrap dark:text-white">Focus. Learn. Take Notes.</h1>
                </div>
            </header>
            <div class="container relative flex flex-row justify-between h-auto max-w-10xl px-10 mx-auto xl:px-0 mt-5" style={{ paddingBottom: "40%" }} >
                <div class="absolute inset-0">

                    {embedUrl && (
                        <iframe
                            title="YouTube Player"
                            width="640"
                            height="360"
                            src={embedUrl}
                            frameBorder="0"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                        ></iframe>
                    )}
                </div>
            </div>

            <div className="notes-container bg-white-100 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 text-center">Take Your Notes Here Without Switching Tabs. Once you are done, Copy paste it to your Notes app</h2>
                <textarea
                    className="w-full p-2 border border-white-300 rounded-md"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Write your notes here..."
                    rows={8}
                ></textarea>
                <br />
                <div className="flex justify-center mt-4">
                    <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600" onClick={clearNote}>Clear Note</button>
                </div>
            </div>


        </div>



    );
};

export default PlayerPage;
