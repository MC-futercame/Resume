"use client";
import React, { useState } from "react";
import Image from "next/image";

const LocationButton = () => {
  const [location, setLocation] = useState({
    latitude: 31.5645,
    longitude: -7.6628,
  });
  const [error, setError] = useState("");

  const openGoogleMap = (latitude: number, longitude: number) => {
    const googleMapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(googleMapUrl, "_blank");
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setError("");
        openGoogleMap(latitude, longitude);
      },
      (err) => {
        setError(`Error: ${err.message}`);
      }
    );
  };

  return (
    <div className="p-4 border rounded-xl shadow-md max-w-md mx-auto text-center">
      <button
        onClick={getLocation}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Get My Location and Open Google Maps
      </button>
      <p className="mt-4">
        📍 Latitude: {location.latitude}, Longitude: {location.longitude}
      </p>
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "My_Resume.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-500 text-yellow-400 font-bold text-lg m-3 font-serif hover:bg-blue-900 h-20 w-100 flex justify-center items-center"
    >
      Resume
      <Image src="/dwn.png" alt="pdf" width={40} height={40} className="relative w-1/3 h-15 border-red-500 border-2 m-3" />
       </button>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="menu-button" onClick={() => setOpen(!open)}>
        ☰ Menu
      </button>
      {open && (
        <div className="popup-nav">
          <ul>
            <li><a onClick={() => setOpen(false)} href="#home">Home</a></li>
            <li><a onClick={() => setOpen(false)} href="#about">About Me</a></li>
            <li><a onClick={() => setOpen(false)} href="#educations">Educations</a></li>
            <li><a onClick={() => setOpen(false)} href="#skills">Skills</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

const Profile = () => (
  <Image id="imagepro" src="/yimg.jpg" alt="imag" width={150} height={150} />
);

function Home() {
  return (
    <>
      <section id="home">
        <div id="hd">
          <Profile />
          <h1>Mohamed Ayouchi</h1>
          <div>
            <Navbar />
            <div className="pc-nav">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#educations">Educations</a></li>
                <li><a href="#skills">Skills</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p1">
          <p>
            Hi! I&apos;m Mohamed and this is my sample web page for introducing myself welcome again
            <br />
            <Image className="img1" src="/pec.png" alt=""  width={600} height={600} />
          </p>
          <div className="social">
            <div className="what">
              <button onClick={() => window.location.href = 'https://wa.me/212696640278?text=Hello%20Mohamed'}>
                <Image src="/what.svg" alt="WhatsApp" width={30} height={30} />
              </button>
              <span className="label">WhatsApp</span>
            </div>
            <div className="what">
              <button onClick={() => window.location.href = 'mailto:localhost@gmail.com'}>
                <Image src="/email.svg" alt="Email" width={30} height={30} />
              </button>
              <span className="label">Email</span>
            </div>
            <div className="what">
              <button onClick={() => window.location.href = 'https://facebook.com/profile.php?id=61574656815226'}>
                <Image src="/fb.svg" alt="Facebook" width={30} height={30} />
              </button>
              <span className="label">Facebook</span>
            </div>
          </div>
        </div>
      </section>
      <br /><br />
      <section id="about">
        <div className="tit">
          <h2>About Me</h2>
        </div>
        <div className="presontasions">
          <div className="p3">
            <p className="p31"><strong>* Name:</strong> Mohamed Ayouchi</p>
            <p className="p31"><strong>* Age:</strong> 25 years old</p>
            <p className="p31"><strong>* Competence:</strong></p>
            <p className="p32">- I hold a high school certificate in Earth and Life Sciences and pursued Physics studies at Smlalia Faculty.</p>
            <p className="p32">- Holds a valid driver&apos;s license (B)</p>
            <p className="p31"><strong>* Passions:</strong></p>
            <p className="p32">Programming & Cybersecurity - My curiosity about technology and AI drives me to learn more every day.</p>
            <p className="p31"><strong>* Experience:</strong></p>
            <p className="p32">- I&apos;ve worked in various fields, including construction, farming, poultry trading, and fast food services , 
            Sports coach .</p>
            <p className="p31"><strong>* Languages:</strong></p>
            <p className="p32">- Arabic (very good)<br />- English<br />- Spanish<br />- French<br />- Native Tamazight</p>
          </div>
        </div>
      </section>
      <section id="educations">
        <div className="tit">
          <h2>Educations</h2>
        </div>
        <div className="p3">
          <div className="education-item">
            <p className="p31"><strong>* High School (2019/2020)</strong></p>
            <p className="p32">Earth and Life Sciences Certificate</p>
            <p className="des">Smlalia Faculty (FSSM)</p>
          </div>
          <div className="education-item">
            <p className="p31"><strong>* University (2020/2022)</strong></p>
            <p className="p32">Studied Physics (Completed S1)</p>
            <p className="des">Smlalia Faculty</p>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="tit">
          <div className="p-1 rounded-b-xl max-w-lg mx-auto">
            <h2 className="text-2xl bg-sky-500 font-bold mb-4 text-center">My Skills</h2>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3 text-red-700 underline">Technical Skills</h3>
            <ul className="list-disc pl-5 text-emerald-300">
              <li>Web Development (HTML, CSS, JavaScript)</li>
              <li>Cybersecurity Awareness</li>
              <li>Mobile Software Troubleshooting</li>
              <li>Computer Hardware & Software Problem-Solving</li>
              <li>Networking Basics</li>
              <li>Driver&apos;s license</li>
              <li>Electricity & Electronics Fundamentals</li>
              <li>Fast Learning</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3 text-red-700 underline">Soft Skills</h3>
            <ul className="list-disc pl-5 text-emerald-200">
              <li>Effective Communication</li>
              <li>Self-Learning & Research</li>
              <li>Critical Thinking & Problem-Solving</li>
              <li>Multitasking</li>
              <li>Adaptability</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-800 underline">Languages</h3>
            <ul className="list-disc pl-5 text-emerald-100">
              <li>Tamazight – Fluent</li>
              <li>Arabic – Fluent</li>
              <li>English – Good</li>
              <li>French – Beginner</li>
              <li>Spanish – Beginner</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="fotr bg-amber-50 p-8 text-zinc-950">
        <div>
          <h4 className="text-2xl font-mono text-black font-bold text-center mt-4">My Location</h4>
          <LocationButton />
        </div>
      </section>
      <footer className="foo">
        <h1 className="ftr">Mr Mohamed</h1>
        <DownloadButton />
      </footer>
    </>
  );
}

export default Home;
