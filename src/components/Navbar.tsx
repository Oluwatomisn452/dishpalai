// import { Navbar } from "flowbite-react";
// import { Link } from "react-scroll";
// import { ModeToggle } from "./mode-toggle";

// export default function NavbarComponent() {
//   return (
//     <Navbar fluid rounded>
//       <Navbar.Brand as={Link}>
//         <img src="/assets/logo.png" className="mr-3 h-16" alt="Dishpal.AI" />
//       </Navbar.Brand>
//       <div className=" flex md:hidden gap-4 items-center ">
//         <ModeToggle />
//         <Navbar.Toggle />
//      </div>
//       <Navbar.Collapse>

//         <Navbar.Link href="#" active>
//           Home
//         </Navbar.Link>
//         <Navbar.Link
//           as={Link}
//           to="about"
//           spy={true}
//           smooth={true}
//           duration={500}
//           offset={-70}
//         >
//           About
//         </Navbar.Link>
//         <Navbar.Link
//           as={Link}
//           to="service"
//           spy={true}
//           smooth={true}
//           duration={500}
//           offset={-70}
//         >
//           Services
//         </Navbar.Link> <div className="hidden items-center ">
//         <ModeToggle />
//      </div>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon,  XMarkIcon } from "@heroicons/react/24/outline";
import { ModeToggle } from "./mode-toggle";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About Us", href: "#", current: false },
  { name: "Our Services", href: "#", current: false },
  // { name: "Calendar", href: "#", current: false },
];

function classNames(
  ...classes: Array<string | undefined | null | false>
): string {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarComponent() {
  return (
    <Disclosure as="nav" className="border-b-[1px]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center">
              <img
                alt="Your Company"
                src="/assets/logo.png"
                className="h-16 w-auto"
              />
            </div>
          </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "font-bold font-syne text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ModeToggle />
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
