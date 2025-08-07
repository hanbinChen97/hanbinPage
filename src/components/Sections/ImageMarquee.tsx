import Image from "next/image";
import {memo, useMemo} from "react";
import Marquee from "react-fast-marquee";

import claudeImage from "../../images/marquee/claude.png";
import dockerImage from "../../images/marquee/docker.png";
import hshImage from "../../images/marquee/hsh.png";
import javaImage from "../../images/marquee/java.png";
import openaiImage from "../../images/marquee/openai.png";
import pythonImage from "../../images/marquee/python.png";
import reactImage from "../../images/marquee/react.png";
import rwthImage from "../../images/marquee/rwth.png";

const ImageMarquee = memo(() => {
  const images = useMemo(
    () => [
      {
        src: rwthImage,
        alt: "RWTH",
        style: {height: "80px", maxHeight: "80px", width: "auto"},
      },
      {
        src: hshImage,
        alt: "HSH",
        style: {height: "80px", maxHeight: "80px", width: "auto"},
      },
      {
        src: reactImage,
        alt: "React",
        style: {height: "72px", maxHeight: "80px", width: "auto"},
      },
      {
        src: pythonImage,
        alt: "Python",
        style: {height: "80px", maxHeight: "80px", width: "auto"},
      },
      {
        src: javaImage,
        alt: "Java",
        style: {height: "72px", maxHeight: "80px", width: "auto"},
      },
      {
        src: dockerImage,
        alt: "Docker",
        style: {height: "40px", maxHeight: "80px", width: "auto"},
      },
      {
        src: openaiImage,
        alt: "OpenAI",
        style: {height: "40px", maxHeight: "80px", width: "auto"},
      },
      {
        src: claudeImage,
        alt: "Claude",
        style: {height: "32px", maxHeight: "80px", width: "auto"},
      },
    ],
    [],
  );

  const marqueeStyle = useMemo(() => ({backgroundColor: "transparent"}), []);

  return (
    <section className="py-8">
      <div className="border-2 border-gray-900 rounded-lg overflow-hidden w-full p-4">
        <Marquee
          direction="left"
          gradient={true}
          gradientColor="#262626"
          gradientWidth={100}
          speed={50}
          style={marqueeStyle}
        >
          {images.map((image, index) => (
            <div
              className="mx-4 h-20 flex items-center justify-center overflow-hidden"
              key={index}
            >
              <Image
                alt={image.alt}
                className="object-contain mix-blend-multiply"
                src={image.src}
                style={image.style}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
});

ImageMarquee.displayName = "ImageMarquee";

export default ImageMarquee;
