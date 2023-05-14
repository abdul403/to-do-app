import React from "react";
import { AiFillInstagram, AiFillFacebook, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer-content">
      <span>@2023 Copyright:todoapp.com</span>
      <a href="https://www.instagram.com/accounts/onetap/?next=%2F">
        <AiFillInstagram />
      </a>
      <a href="https://github.com/abdul403">
        <AiFillGithub />
      </a>
      <a href="https://www.facebook.com/abdul.babbu.58/">
        <AiFillFacebook />
      </a>
    </footer>
  );
}
