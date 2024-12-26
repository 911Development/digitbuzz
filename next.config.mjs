// import nextTranslate from "next-translate";
import nextTranslate from "next-translate-plugin";

const nextConfig = nextTranslate({
  reactStrictMode: true,
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
  },
});

export default nextConfig;
