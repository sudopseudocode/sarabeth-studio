import { GetStaticProps } from "next";
import NextImage from "next/future/image";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PageLayout from "../../components/PageLayout";
import WidthContainer from "../../components/WidthContainer";
import { imageLoader } from "../../utils/client/contentful";
import getCommonData from "../../utils/server/fetchers/common";
import getMediaData from "../../utils/server/fetchers/media";
import styles from "./Media.module.scss";
import type { PageProps } from "../../utils/server/fetchers/common";
import type { MediaData } from "../../utils/server/fetchers/media";

const Media = ({
  commonData,
  images,
  videos,
  audio,
}: PageProps & MediaData) => {
  return (
    <PageLayout
      metadata={{
        title: "Sarabeth's Recordings & Photos",
        description:
          "Sarabeth Belón's media page: recordings, photos and videos. Listen to recordings of her opera arias and art songs. Clips of her performances are also available. View pictures from past performances, professional headshots and more. Photo credits included when viewing higher resolution images.",
        keywords: ["sarabeth belon media", "sarabeth belon recordings"],
      }}
      commonData={commonData}
    >
      <Swiper
        centeredSlides
        className={styles.carousel}
        initialSlide={images.length / 2}
        modules={[Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView="auto"
        spaceBetween={0}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <NextImage
              width={image.width}
              height={image.height}
              loader={imageLoader}
              src={image.url}
              alt={image.description}
              placeholder="blur"
              blurDataURL={image.blurDataUrl}
              className={styles.slide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [commonData, mediaData] = await Promise.all([
    getCommonData(),
    getMediaData(),
  ]);
  return { props: { commonData, ...mediaData } };
};

export default Media;
