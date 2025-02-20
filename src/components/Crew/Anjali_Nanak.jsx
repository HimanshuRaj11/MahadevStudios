import React from 'react';

const Anjali_Nanak = () => {
    return (
        <div className="p-6 max-w-2xl mx-auto text-white">

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                <p className="mb-4">
                    Hello! I am <strong>Anjali</strong>, currently pursuing my Masters in Hindustani Classical Music from HPU Shimla. My journey in classical music has been enriched by the teachings of my esteemed Gurujans, Dr. O.P. Koul and Dr. T.C. Koul.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Musical Interests</h2>
                <p className="mb-4">
                    While my foundation is in Indian Classical Music, I have a deep appreciation for various other genres, including Western and Indian Pop. I enjoy singing songs that incorporate growls and yodeling, and I thrive on performing and interacting with audiences both on and off stage.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Hobbies</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Cooking</li>
                    <li>Dancing</li>
                    <li>Painting</li>
                    <li>Exploring new adventures and experiences</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Musical Inspirations</h2>

                <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">Indian Artists</h3>
                    <ul className="list-disc list-inside">
                        <li>Usha Uthup</li>
                        <li>Lata Mangeshkar</li>
                        <li>Asha Bhosle</li>
                        <li>Shreya Ghoshal</li>
                        <li>Sunidhi Chauhan</li>
                        <li>Arijit Singh</li>
                        <li>Sonu Nigam</li>
                        <li>Other iconic singers from the 90s</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-medium mb-2">Western Artists</h3>
                    <ul className="list-disc list-inside">
                        <li>Ariana Grande</li>
                        <li>Justin Bieber</li>
                        <li>Charlie Puth</li>
                        <li>Billie Eilish</li>
                        <li>Dimash Kudaibergen</li>
                        <li>BTS (Jungkook)</li>
                    </ul>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Performance of Anjali Nanak </h2>
                <div className="flex flex-col space-y-4">
                    <iframe
                        src="https://www.instagram.com/reel/DEmdcvxPPul/embed"
                        width="400"
                        height="480"
                        frameBorder="0"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                        title="Instagram Reel 1"
                    ></iframe>
                    <iframe
                        src="https://www.instagram.com/reel/DEB7IRXvW7B/embed"
                        width="400"
                        height="480"
                        frameBorder="0"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                        title="Instagram Reel 2"
                    ></iframe>
                </div>
            </section>

            <p className="font-bold mb-2">For Bookings and Inquiries:</p>
            <ul className="list-none mb-4">
                <li>📧 Email: <a href="mailto:mahadevproductionsshimla@gmail.com" className="text-blue-500">mahadevproductionsshimla@gmail.com</a></li>
                <li>📞 Contact: <a href="tel:8894548468" className="text-blue-500">8894548468</a>, <a href="tel:7018313617" className="text-blue-500">7018313617</a></li>
            </ul>

        </div>
    );
};

export default Anjali_Nanak;