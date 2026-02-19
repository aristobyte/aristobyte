import Image from "next/image";

import "./InsightsVideo.scss";

export const InsightsVideo = () => {
  return (
    <section className="insights-video">
      <div className="insights-video__container">
        <div className="insights-video__head">
          <h3 className="insights-video__title">Video & Demo</h3>
          <p className="insights-video__description">
            Placeholder section for product demos and explainers.
          </p>
        </div>

        <div className="insights-video__placeholder">
          <Image
            src="/og-image-1200x630.png"
            alt="Video placeholder"
            width={1200}
            height={630}
            className="insights-video__image"
          />
          <div className="insights-video__badge">Video Placeholder</div>
        </div>
      </div>
    </section>
  );
};
