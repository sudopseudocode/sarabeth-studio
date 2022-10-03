import NextImage from "next/image";
import React from "react";
import { imageLoader } from "../../utils/client/contentful";
import Overlay from "../Overlay";
import styles from "./BannerImage.module.scss";
import type { Image } from "../../utils/types";

type Props = {
  image: Image;
  title: string;
};

const BannerImage = ({ title, image }: Props) => {
  return (
    <div className={styles.container}>
      <NextImage
        alt={image.description}
        blurDataURL={image.blurDataUrl}
        className={styles.image}
        layout="fill"
        loader={imageLoader}
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        priority
        sizes="100vw"
        src={image.url}
      />
      <Overlay type="bannerTitle" direction="left">
        <h1 className={styles.text}>{title}</h1>
      </Overlay>
    </div>
  );
};

export default BannerImage;
