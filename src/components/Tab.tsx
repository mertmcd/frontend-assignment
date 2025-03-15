import React from 'react';
import '../styles/tab.css';
import { motion } from 'framer-motion';
import { TabProps } from '../types/tab';
import { getAnimationForImage } from '../helpers/getAnimationForImage';

const Tab: React.FC<TabProps> = ({
  title,
  header,
  description,
  buttonText,
  images,
  id,
  name,
}) => {
  const dynamicClass = `anim-${name}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      key={id}
      className="tabs"
    >
      <div className="tab">
        <div className={`image-container ${dynamicClass}`}>
          {images.map((image, index) => {
            const { initial, animate, transition } = getAnimationForImage(
              index,
              dynamicClass,
            );

            return (
              <motion.img
                initial={initial as any}
                animate={animate as any}
                transition={transition as any}
                key={index}
                src={`public/images/${image}`}
                alt={`Image ${index}`}
              />
            );
          })}
        </div>
        <div className="content">
          <h1>{title}</h1>
          <h2>{header}</h2>
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
          <button type="button">{buttonText}</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Tab;
