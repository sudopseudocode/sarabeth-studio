import React from "react";
import Overlay from "../Overlay";
import styles from "./BannerImage.module.scss";
import type { Image } from "../../utils/server/contentful";

type Props = {
  image: Image;
  title: string;
};

const BannerImage = ({ title, image }: Props) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url("${image.url}")` }}
    >
      <Overlay type="bannerTitle" direction="left">
        <h1 className={styles.text}>{title}</h1>
      </Overlay>
    </div>
  );
};

export default BannerImage;
