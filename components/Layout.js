import Container from "./Container";
import Navbar from "./ui/Navbar";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { SpotlightPreview } from "./ui/SpotlightPreview";

const Layout = ({ children }) => (
  <>
    <SpotlightPreview>
      <Navbar />
      <header>
        <Container>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
              letterSpacing: "2px",
            }}
            animate={{
              opacity: [0, 0.75],
              y: [20, 0],
              letterSpacing: ["2px", "4px", "10px"],
            }}
            transition={{ ease: "easeOut", duration: 0.75 }}
            className="font-bold text-center text-3xl"
          >
            DIGIT BUZZ
          </motion.h1>
        </Container>
      </header>
    </SpotlightPreview>
    <main>{children}</main>
    <footer></footer>
  </>
);

export default Layout;
