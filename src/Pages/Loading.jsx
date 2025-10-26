import React from 'react';

const Loading = () => {
    return (
        <div>
                   <div className="flex justify-center items-center h-screen">
            <h1 className="text-5xl font-bold flex items-center gap-2">
                L
                <span className="inline-block w-12 h-12">
                    <img
                        src="https://i.ibb.co.com/s9cTWgYJ/logo.png"
                        alt="loading..."
                        className="w-full h-full animate-spin"
                    />
                </span>
                ADING
            </h1>
        </div>

        </div>
    );
};

export default Loading;