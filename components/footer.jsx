import Link from "next/link";
import { navigation } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-600">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation?.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-base text-slate-300 hover:text-slate-100"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation?.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-400 hover:text-slate-500"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-slate-400">
          &copy; 2023 codeSTACKr. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
