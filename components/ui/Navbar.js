import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => (
  <nav className="py-4">
    <Container className={"grid grid-cols-12 items-center"}>
      <section className="col-span-5">
        <ul className="flex items-center justify-center gap-6">
          <li>
            <Link
              href={"/"}
              className="text-muted text-sm font-[500] hover:text-primary hover:tracking-wider transition-all delay"
            >
              Online Market
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="text-muted text-sm font-[500] hover:text-primary hover:tracking-wider transition-all delay"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="text-muted text-sm font-[500] hover:text-primary hover:tracking-wider transition-all delay"
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
            className="w-14 opacity-75 mx-auto"
            alt="Logo"
            priority
          />
        </Link>
      </section>
      <section className="col-span-5">
        <ul className="flex items-center justify-center gap-6">
          <li>
            <Link
              href={"/"}
              className="text-muted text-sm font-[500] hover:text-primary hover:tracking-wider transition-all delay"
            >
              Policies
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="text-muted text-sm font-[500] hover:text-primary hover:tracking-wider transition-all delay"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              // className="text-muted text-sm font-[500] hover:text-primary hover:tracking-wider transition-all delay"
            >
              <Button>Contact</Button>
            </Link>
          </li>
        </ul>
      </section>
    </Container>
  </nav>
);

export default Navbar;
