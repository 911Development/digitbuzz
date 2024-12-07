import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => setMenu(!menu);

  return (
    <>
      <nav className="py-4">
        <Container className={"flex lg:grid lg:grid-cols-12 items-center"}>
          <section className="col-span-5 hidden lg:block">
            <ul className="flex items-center justify-center gap-6">
              <li>
                <Link
                  href={"/coming-soon"}
                  className="text-muted-dark text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
                >
                  Online Market
                </Link>
              </li>
              <li>
                <Link
                  href={"#about"}
                  className="text-muted-dark text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={"#brands"}
                  className="text-muted-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
                >
                  Brands
                </Link>
              </li>
            </ul>
          </section>
          <section className="col-span-2 text-center">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                width={114}
                height={120}
                className="w-14 mx-auto invert"
                alt="Logo"
                priority
              />
            </Link>
          </section>
          <section className="col-span-5 hidden lg:block">
            <ul className="flex items-center justify-center gap-6">
              <li>
                <Link
                  href={"/"}
                  className="text-muted-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
                >
                  Policies
                </Link>
              </li>
              <li>
                <Link
                  href={"#styles"}
                  className="text-muted-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
                >
                  Styles
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  // className="text-muted-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
                >
                  <Button type={"button"} variant={"dark-outline"}>
                    Contact
                  </Button>
                </Link>
              </li>
            </ul>
          </section>
          <section className="ms-auto lg:hidden">
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              className="text-white"
              onClick={handleMenu}
            />
          </section>
        </Container>
      </nav>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: menu ? [0, 100] : [100, 0] }}
        style={{ display: menu ? "flex" : "none" }}
        className="w-full h-[100svh] bg-white fixed top-0 left-0 flex items-center justify-center z-50"
      >
        <FontAwesomeIcon
          icon={faTimes}
          size="xl"
          className="absolute top-6 right-6"
          onClick={handleMenu}
        />
        <ul className="flex flex-col items-center justify-center gap-6">
          <h1 className="font-semibold text-dark text-3xl">Digit Buzz</h1>
          <li>
            <Link
              href={"/"}
              className="text-dark text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
            >
              Online Market
            </Link>
          </li>
          <li>
            <Link
              href={"#about"}
              className="text-dark text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
              onClick={handleMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href={"#brands"}
              className="text-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
              onClick={handleMenu}
            >
              Brands
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="text-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
            >
              Policies
            </Link>
          </li>
          <li>
            <Link
              href={"#styles"}
              className="text-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
              onClick={handleMenu}
            >
              Styles
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="text-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.section>
    </>
  );
};

export default Navbar;
