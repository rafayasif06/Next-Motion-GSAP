import Link from "next/link";
import React from "react";

const ThirdComp = () => {
  const footerLinks = [
    { id: 1, text: "Datenschutzerklärung", url: "/" },
    { id: 2, text: "Impressum", url: "/" },
    { id: 3, text: "© CROWND Estates GmbH", isText: true },
    { id: 4, text: "Datenschutzeinstellungen", url: "/" },
  ];

  return (
    <div className="px-14 pt-14">
      <h2 className="text-2xl text-black font-normal font-serif">
        It's my life. It's my style. It's CROWND.
      </h2>
      <ul className="pt-9 flex flex-col md:flex-row">
        {footerLinks.map((link) => (
          <li key={link.id} className="inline-block pr-5">
            {link.isText ? (
              <p className="text-sm text-gray-500">{link.text}</p>
            ) : (
              <Link href={link.url} className="text-sm text-gray-500">
                {link.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThirdComp;
