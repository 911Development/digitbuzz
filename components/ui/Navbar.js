import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const Navbar = () => {
  const { locale, locales, pathname } = useRouter();

  const [menu, setMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(null);

  const handleMenu = () => setMenu(!menu);

  const { t, lang } = useTranslation("common");

  useEffect(
    function () {
      setCurrentLanguage(lang);
    },
    [lang]
  );

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
                  {t("online_market")}
                </Link>
              </li>
              <li>
                <Link
                  href={"#about"}
                  className="text-muted-dark text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
                >
                  {t("about_us")}
                </Link>
              </li>
              <li>
                <Link
                  href={"#brands"}
                  className="text-muted-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
                >
                  {t("brands")}
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
                  {t("policies")}
                </Link>
              </li>
              <li>
                <Link
                  href={"#styles"}
                  className="text-muted-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
                >
                  {t("styles")}
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  // className="text-muted-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
                >
                  <Button type={"button"} variant={"dark-outline"}>
                    {t("contact")}
                  </Button>
                </Link>
              </li>
              <li className="relative">
                {/* <Button
                  type={"button"}
                  variant={"dark-outline"}
                  className={"peer"}
                >
                  {t("language")}
                </Button> */}
                <section className="flex items-center justify-center gap-3">
                  {locales.map((locale) => (
                    <Link
                      href={pathname}
                      key={locale}
                      locale={locale}
                      className="flex items-center justify-center gap-3 text-white z-50"
                    >
                      <span>
                        <img
                          src={`/languages/${locale}.png`}
                          className="w-8"
                          alt="Language"
                        />
                      </span>
                      {/* <span>{locale?.toUpperCase()}</span> */}
                    </Link>
                  ))}
                </section>
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
              {t("online_market")}
            </Link>
          </li>
          <li>
            <Link
              href={"#about"}
              className="text-dark text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
              onClick={handleMenu}
            >
              {t("about_us")}
            </Link>
          </li>
          <li>
            <Link
              href={"#brands"}
              className="text-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
              onClick={handleMenu}
            >
              {t("brands")}
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="text-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
            >
              {t("policies")}
            </Link>
          </li>
          <li>
            <Link
              href={"#styles"}
              className="text-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
              onClick={handleMenu}
            >
              {t("styles")}
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="text-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
      </motion.section>
    </>
  );
};

export default Navbar;
