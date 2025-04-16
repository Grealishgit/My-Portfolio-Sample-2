import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import image from '../assets/netflix5.jpg'

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex md:flex-row flex-col justify-center gap-6">
      <div className='md:flex hidden justify-center'>
        <p>© 2025 @ <span className="text-amber-500  font-bold">HunterDev</span>. All rights Reserved</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-6">
      <a
          href="https://www.instagram.com/wizardhunter1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
        <a href="https://twitter.comhttps://x.com/hunter_20" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/Eugene-khanda-6abb49273/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Grealishgit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <img src={image} className="h-7 md:block hidden w-7 rounded-full aspect-square cursor-pointer" alt="" />
      <div className='flex md:hidden justify-center'>
        <p>© 2025 @ <span className="text-amber-500  font-bold">HunterDev</span>. All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;