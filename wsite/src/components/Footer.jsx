import React from "react";
import Section from "./Section";
import { navigation } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-20">
      <div className="container flex sm:justify-between justify-center items-center gap-10 flex-col">
        <div className="flex flex-col items-center gap-4">
          <p className="caption text-n-4 lg:block">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
          <ul className="flex gap-5 flex-wrap justify-center">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="text-n-4 transition-colors hover:text-n-6"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
