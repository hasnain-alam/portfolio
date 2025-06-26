import React from "react";

const socialLinks = [
  {
    name: "Portfolio",
    url: "https://your-portfolio-link.com", // 🔁 Replace with your actual portfolio link
    icon: "fa-solid fa-globe", // globe icon for website/portfolio
  },
  {
    name: "GitHub",
    url: "https://github.com/hasnain-alam",
    icon: "fa-brands fa-github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/md-hasnain-alam-212839256",
    icon: "fa-brands fa-linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/your-handle", // 🔁 Replace if available
    icon: "fa-brands fa-twitter",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mohd_h_alam2394",
    icon: "fa-brands fa-instagram",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-6 justify-center py-4 text-white text-xl">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="hover:text-blue-400 transition"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
