import { AnimationConfig } from '../types/animationConfig';
import { animations } from '../data/animations';

export const getAnimationForImage = (
  index: number,
  dynamicClass: string,
): AnimationConfig => {
  const customAnimation = animations.find(
    (animation) =>
      animation.index.includes(index) &&
      animation.dynamicClass.includes(dynamicClass),
  );
  return (
    customAnimation || {
      initial: {},
      animate: {},
      transition: {},
      dynamicClass: [],
      index: [],
    }
  );
};
