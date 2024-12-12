import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
const Feature = () => {
  const { t } = useTranslation("common");

  return (
    <section className="grid grid-cols-12 gap-6 py-8">
      <section className="col-span-12 lg:col-span-4 mb-8 lg:mb-0">
        <section>
          <section className="flex items-start gap-4 mb-6">
            <Image
              src={"/services/Icon-Remote-Office.svg"}
              width={100}
              height={100}
              // className="w-16"
              alt="DigitBuzz Service"
            />
            <h1 className="font-bold text-2xl">
              {t("search_engine_optimization")}
            </h1>
          </section>
          <p className="text-justify text-gray-500">
            {/* Our SEO service is designed to help your website rank better on
            search engine results pages and drive more organic visitors and
            buyers to your website. Search engine optimization can improve
            online visibility and more qualified leads! */}
            {t("search_engine_optimization_p")}
          </p>
        </section>
        <section>
          <p></p>
        </section>
        <section>{/* More about seo */}</section>
      </section>
      <section className="col-span-12 lg:col-span-4 mb-8 lg:mb-0">
        <section>
          <section className="flex items-start gap-4 mb-6">
            <Image
              src={"/services/Vergutung.svg"}
              width={100}
              height={100}
              // className="w-16"
              alt="DigitBuzz Service"
            />
            <h1 className="font-bold text-2xl">
              {t("search_engine_advertising")}
            </h1>
          </section>
          <p className="text-justify text-gray-500">
            {/* Whether you want to generate leads, increase sales or raise brand
            awareness, our search engine advertising solutions can help you
            achieve your goals. Customized campaign, qualified traffic and
            valuable leads are part of successful SEA with us! */}
            {t("search_engine_advertising_p")}
          </p>
        </section>
        <section>
          <p></p>
        </section>
        <section>{/* More about seo */}</section>
      </section>
      <section className="col-span-12 lg:col-span-4 mb-8 lg:mb-0">
        <section>
          <section className="flex items-start gap-4 mb-6">
            <Image
              src={"/services/Teamevent.svg"}
              width={100}
              height={100}
              // className="w-16"
              alt="DigitBuzz Service"
            />
            <h1 className="font-bold text-2xl">
              {t("social_media_advertising")}
            </h1>
          </section>
          <p className="text-justify text-gray-500">
            {/* We make sure your ads reach the right people at the right time. When
            used correctly, social media advertising leads to increased brand
            awareness, website traffic and lead generation. The latest trends
            and best practices are of course part of our service! */}
            {t("social_media_advertising_p")}
          </p>
        </section>
        <section>
          <p></p>
        </section>
        <section>{/* More about seo */}</section>
      </section>
      <section className="col-span-12 lg:col-span-4 mb-8 lg:mb-0">
        <section>
          <section className="flex items-start gap-4 mb-6">
            <Image
              src={"/services/digitales-Umfeld.svg"}
              width={100}
              height={100}
              // className="w-16"
              alt="DigitBuzz Service"
            />
            <h1 className="font-bold text-2xl">{t("web_analytics")}</h1>
          </section>
          <p className="text-justify text-gray-500">
            {/* Reaching the right audience at the perfect time and place is not
            possible without excellent web analytics. Our web analytics offer
            includes the use of advanced tools and technologies for tracking
            website activity, analyzing user data and generating reports. We are
            experts in Google Analytics, Google Tag Manager and more! */}
            {t("web_analytics_p")}
          </p>
        </section>
        <section>
          <p></p>
        </section>
        <section>{/* More about seo */}</section>
      </section>
      <section className="col-span-12 lg:col-span-4 mb-8 lg:mb-0">
        <section>
          <section className="flex items-start gap-4 mb-6">
            <Image
              src={"/services/Icon-Allhands-Meeting.svg"}
              width={100}
              height={100}
              // className="w-16"
              alt="DigitBuzz Service"
            />
            <h1 className="font-bold text-2xl">{t("content_marketing")}</h1>
          </section>
          <p className="text-justify text-gray-500">
            {/* Content is king – but we put the crown on it with our target
            group-specific content. Our content offering spans a wide range of
            formats and channels, including blog posts, social media content,
            email marketing, videos, and more. Our language is designed for your
            brand. We develop a content strategy that fits your product and your
            target audience! */}
            {t("content_marketing_p")}
          </p>
        </section>
        <section>
          <p></p>
        </section>
        <section>{/* More about seo */}</section>
      </section>
      <section className="col-span-12 lg:col-span-4">
        <section>
          <section className="flex items-start gap-4 mb-6">
            <Image
              src={"/services/Weiterbildung.svg"}
              width={100}
              height={100}
              // className="w-16"
              alt="DigitBuzz Service"
            />
            <h1 className="font-bold text-2xl">{t("marketing_workshops")}</h1>
          </section>
          <p className="text-justify text-gray-500">
            {/* In our online marketing workshops, we help companies of all sizes
            learn about the latest trends, strategies and best practices in
            digital marketing. Whether SEO, SEA, SMA, Pay-per-click (PPC), email
            marketing, etc. – we build our workshops in an understandable way so
            that these terms are no longer foreign words. Boost your knowledge
            with us! */}
            {t("marketing_workshops_p")}
          </p>
        </section>
        <section>
          <p></p>
        </section>
        <section>{/* More about seo */}</section>
      </section>
    </section>
  );
};

export default Feature;
