import Container from "@/components/Container";
import Feature from "@/components/Feature";
import { FeaturesSectionDemo } from "@/components/ui/About";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import {
  Carousel,
  CarouselContext,
} from "@/components/ui/apple-cards-carousel";
import Button from "@/components/ui/Button";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { AppleCardsCarouselDemo } from "@/components/ui/CardCarousel";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Navbar from "@/components/ui/Navbar";
import { SpotlightPreview } from "@/components/ui/SpotlightPreview";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";
import { useRef } from "react";

const ITEMS = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "ASDF",
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "ASDF",
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "ASDF",
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "ASDF",
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "ASDF",
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "ASDF",
  },
];

const WORDS = [
  {
    text: "Collabrate",
  },
  {
    text: "with",
  },
  {
    text: "leading",
  },
  {
    text: "brands",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const WORDS_TR = [
  {
    text: "Önde gelen",
  },
  {
    text: "markalar ile",
  },
  {
    text: "işbirliği",
  },
  {
    text: "yapın",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    src: "/brands/1.svg",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    src: "/brands/2.svg",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    src: "/brands/3.svg",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    src: "/brands/4.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/5.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/6.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/7.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/8.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/9.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/10.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/11.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/12.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/13.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/14.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/15.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/16.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/17.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/18.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/19.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    src: "/brands/20.svg",
  },
];

export const categories = [
  {
    title: "59+",
    description: "Online marketing experts",
    link: "/",
    lang_code: "online_marketing_experts",
  },
  {
    title: "200+ ",
    description: "Happy Clients",
    link: "/",
    lang_code: "happy_clients",
  },
  {
    title: "+100%",
    description: "Passion",
    link: "/",
    lang_code: "passion",
  },
  {
    title: "8+",
    description: "Country",
    lang_code: "country",
    link: "/",
  },
  {
    title: "6+",
    description: "Office",
    link: "/",
    lang_code: "office",
  },
  // {
  //   title: "10+",
  //   description: "Years of experience",
  //   link: "/",
  //   lang_code: "exp",
  // },
];

export const categories_tr = [
  {
    title: "59+",
    description: "Online marketing experts",
    link: "/",
    lang_code: "online_marketing_experts",
  },
  {
    title: "200+ ",
    description: "Happy Clients",
    link: "/",
    lang_code: "happy_clients",
  },
  {
    title: "+100%",
    description: "Passion",
    link: "/",
    lang_code: "passion",
  },
  {
    title: "8+",
    description: "Country",
    lang_code: "country",
    link: "/",
  },
  {
    title: "6+",
    description: "Office",
    link: "/",
    lang_code: "office",
  },
  // {
  //   title: "10+",
  //   description: "Years of experience",
  //   link: "/",
  //   lang_code: "exp",
  // },
];

const trends = [
  {
    quote:
      "Fashion is a form of self-expression that reflects personal style and cultural trends. It evolves with time, blending tradition and innovation to communicate identity and creativity.",
    name: "Fashion",
    designation: "The most trending products",
    src: "/shoppings/shopping_1.jpg",
  },
  {
    quote:
      "A fashion trend is a popular style that reflects current cultural and social influences, shaping how people dress. Trends evolve quickly and can impact both high fashion and everyday wear.",
    name: "Trend",
    designation: "Trend movements",
    src: "/shoppings/shopping_2.jpeg",
  },
  {
    quote:
      "Fashion style is a personal expression of individuality through clothing and accessories, shaped by preferences, trends, and culture. It reflects one's unique identity and aesthetic.",
    name: "Style",
    designation: "Individuality clothing",
    src: "/shoppings/shopping_3.jpg",
  },
  {
    quote:
      "Minimalist fashion focuses on simplicity, with clean lines, neutral colors, and versatile pieces.",
    name: "Minimalist",
    designation: "Away disturbing details",
    src: "/shoppings/shopping_4.png",
  },
  {
    quote:
      "Casual fashion is all about comfort and ease, featuring relaxed clothing suitable for everyday wear. Casual fashion is all about comfort and ease, featuring relaxed clothing suitable for everyday wear.",
    name: "Casual",
    designation: "Your usual style",
    src: "/shoppings/shopping_5.jpg",
  },
];

const slogan = "The Future of Shopping is Here";

export default function Home() {
  const { t, lang } = useTranslation("common");
  const textAreaRef = useRef();

  function handleOnKeyDown(e) {
    if (e.key === "Enter") e.preventDefault();
  }

  function handleTextAreaOnInput(e) {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  return (
    <section>
      <section>
        <SpotlightPreview>
          <Navbar />
        </SpotlightPreview>
      </section>
      <section id="about" className="my-32">
        {/* <FeaturesSectionDemo /> */}
        <Container>
          <Feature />
        </Container>
      </section>
      <section className="my-32">{/* <AppleCardsCarouselDemo /> */}</section>
      <section id="brands" className="my-32">
        <TypewriterEffectSmooth words={lang === "en" ? WORDS : WORDS_TR} />
        <InfiniteMovingCards items={testimonials} />
      </section>
      <section id="styles" className="my-32">
        <Container>
          <HoverEffect items={lang === "en" ? categories : categories_tr} />
        </Container>
      </section>
      <section id="contact" className="my-32">
        <Container className={"!w-1/2"}>
          <section className="mb-12">
            <h2 className="font-bold text-3xl text-center">{t("know")}</h2>
          </section>
          <section className="lg:flex lg:items-center lg:justify-center lg:gap-6 mb-12 lg:mb-24">
            <p className="font-bold text-2xl lg:text-4xl text-nowrap mb-2">
              {t("hello")}
            </p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("name_ph")}
              className="block w-full border-b focus:border-b-primary ring-0 outline-none transition-all delay"
            />
          </section>
          <section className="lg:flex lg:items-center lg:justify-center lg:gap-6 mb-12 lg:mb-24">
            <p className="font-bold text-2xl lg:text-4xl text-nowrap mb-2">
              {t("email")}
            </p>
            <input
              type="email"
              id="email"
              name="name"
              placeholder={t("email_ph")}
              className="block w-full border-b focus:border-b-primary ring-0 outline-none transition-all delay"
            />
          </section>
          <section className="lg:flex lg:items-center lg:justify-center lg:gap-6 mb-12 lg:mb-24">
            <p className="font-bold text-2xl lg:text-4xl text-nowrap mb-2">
              {t("phone")}
            </p>
            <input
              type="tel"
              id="Phone"
              name="Phone"
              placeholder={t("phone_ph")}
              className="block w-full border-b focus:border-b-primary ring-0 outline-none transition-all delay"
            />
          </section>
          <section className="lg:flex lg:items-center lg:justify-center lg:gap-6 mb-12 lg:mb-24">
            <p className="font-bold text-2xl lg:text-4xl text-nowrap mb-2">
              {t("work")}
            </p>
            <section className="flex items-center justify-center gap-3 w-full">
              <input
                type="text"
                id="industry"
                name="industry"
                placeholder={t("industry_ph")}
                className="block w-full border-b focus:border-b-primary ring-0 outline-none transition-all delay"
              />
              <input
                type="text"
                id="company"
                name="company"
                placeholder={t("company_ph")}
                className="block w-full border-b focus:border-b-primary ring-0 outline-none transition-all delay"
              />
            </section>
          </section>
          <section className="lg:flex lg:items-center lg:justify-center lg:gap-6 mb-12 lg:mb-24">
            <p className="font-bold text-2xl lg:text-4xl text-nowrap mb-2">
              {t("discuss")}
            </p>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder={t("subject_ph")}
              className="block w-full border-b focus:border-b-primary ring-0 outline-none transition-all delay"
            />
          </section>
          <section className="lg:flex lg:items-center lg:justify-center lg:gap-6 mb-4">
            <textarea
              id="message"
              name="message"
              placeholder={t("message_ph")}
              className="block w-full border-b focus:border-b-primary ring-0 outline-none transition-all delay"
              onKeyDown={handleOnKeyDown}
              onInput={handleTextAreaOnInput}
              style={{ resize: "none" }}
            />
          </section>
          <section className="lg:Flex lg:items-center lg:justify-center lg:gap-6">
            <Button
              type={"button"}
              variant={"primary"}
              className={
                "flex items-center justify-center gap-3 w-full py-3 lg:w-auto lg:py-2"
              }
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Send</span>
            </Button>
          </section>
        </Container>
      </section>
      {/* <section className="my-32">
        <Container>
          <TextGenerateEffect words={slogan} />
          <AnimatedTestimonials testimonials={trends} />
        </Container>
      </section> */}
    </section>
  );
}
