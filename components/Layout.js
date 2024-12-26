import Container from "./Container";
import Navbar from "./ui/Navbar";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { SpotlightPreview } from "./ui/SpotlightPreview";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import useTranslation from "next-translate/useTranslation";

const Layout = ({ children }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <main>{children}</main>
      <footer className="grid grid-cols-12 items-start bg-dark py-20">
        <section className="col-span-3">
          <nav>
            <ul className="flex flex-col items-center justify-center gap-6">
              <li>
                <Link
                  href={"/"}
                  className="text-muted-dark text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
                >
                  {t("online_market")}
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-muted-dark text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
                >
                  {t("about_us")}
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-muted-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
                >
                  {t("brands")}
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="col-span-6">
          <section className=" flex items-center justify-center gap-4">
            <Link href={"/"} className="text-white">
              <FontAwesomeIcon size="lg" icon={faInstagram} />
            </Link>
            <Link href={"/"} className="text-white">
              <FontAwesomeIcon size="lg" icon={faTwitter} />
            </Link>
            <Link href={"/"} className="text-white">
              <FontAwesomeIcon size="lg" icon={faLinkedin} />
            </Link>
            <Link href={"/"} className="text-white">
              <FontAwesomeIcon size="lg" icon={faFacebook} />
            </Link>
          </section>
          <br />
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
              letterSpacing: "2px",
            }}
            whileInView={{
              opacity: [0, 1],
              y: [20, 0],
              letterSpacing: ["2px", "2px", "2px", "10px"],
            }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="text-white font-bold text-center text-xl lg:text-4xl lg:text-5xl"
          >
            DIGIT BUZZ
          </motion.h1>
        </section>
        <section className="col-span-3">
          <ul className="flex flex-col items-center justify-center gap-6">
            <li>
              <Link
                href={"/"}
                className="text-muted-dark text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
              >
                {t("policies")}
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-muted-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
              >
                {t("shipping")}
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-muted-dark  text-sm font-[500] hover:text-white hover:tracking-wider transition-all delay"
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
};

export default Layout;
