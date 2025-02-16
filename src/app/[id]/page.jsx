import React from 'react';

export default function ProfilePage() {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
            <div className="flex justify-center items-center p-6">
                <img
                    className="w-32 h-32 rounded-full border-4 border-gray-300"
                    src="https://via.placeholder.com/150"
                    alt="User Profile"
                />
            </div>
            <div className="p-6">
                <h2 className="text-center text-2xl font-semibold text-gray-800">John Doe</h2>
                <div className="mt-4">
                    <p className="text-center text-gray-600">Instagram: @johndoe</p>
                    <p className="text-center text-gray-600">YouTube: youtube.com/johndoe</p>
                    <p className="text-center text-gray-600">Facebook: facebook.com/johndoe</p>
                </div>
            </div>
        </div>
    );
}