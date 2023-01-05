import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { navigation } from "../lib/constants";

const Header = () => {
  return (
    <Popover as="header" className="relative">
      <div className="bg-slate-900 pt-6">
        <nav
          className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link href="https://codestackr.com">
                <span className="sr-only">codeSTACKr</span>
                <svg className="h-8 w-auto sm:h-10" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="114" y="175" width="65" height="450" fill="currentColor"/>
                  <rect x="195" y="175" width="498" height="60" fill="currentColor"/>
                  <rect x="195" y="565" width="498" height="60" fill="currentColor"/>
                  <rect x="195" y="252" width="498" height="55" fill="#FF652F"/>
                  <rect x="195" y="495" width="498" height="55" fill="#FF652F"/>
                  <rect x="195" y="372" width="498" height="55" fill="#FF652F"/>
                  <rect x="195" y="307" width="65" height="45" fill="#FF652F"/>
                  <rect x="628" y="450" width="65" height="45" fill="#FF652F"/>
                </svg>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-slate-900 p-2 text-slate-400 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:ml-10 md:flex">
              {navigation?.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-slate-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="https://vscodehero.com"
              target="_blank"
              rel="noreferrer nofollow"
              className="inline-flex items-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-base font-medium text-white hover:bg-slate-700"
            >
              Become a VS Code SuperHero!
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden z-10"
        >
          <div className="overflow-hidden rounded-lg bg-slate-800 shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <svg className="h-8 w-auto" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="114" y="175" width="65" height="450" fill="currentColor"/>
                  <rect x="195" y="175" width="498" height="60" fill="currentColor"/>
                  <rect x="195" y="565" width="498" height="60" fill="currentColor"/>
                  <rect x="195" y="252" width="498" height="55" fill="#FF652F"/>
                  <rect x="195" y="495" width="498" height="55" fill="#FF652F"/>
                  <rect x="195" y="372" width="498" height="55" fill="#FF652F"/>
                  <rect x="195" y="307" width="65" height="45" fill="#FF652F"/>
                  <rect x="628" y="450" width="65" height="45" fill="#FF652F"/>
                </svg>
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-slate-800 p-2 text-slate-400 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="space-y-1 px-2">
                {navigation?.main.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6 px-5">
                <a
                  href="https://vscodehero.com"
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="block w-full rounded-md bg-gradient-to-r from-orange-500 to-amber-600 py-3 px-4 text-center font-medium text-white shadow hover:from-orange-600 hover:to-amber-700"
                >
                  Become a VS Code SuperHero!
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
