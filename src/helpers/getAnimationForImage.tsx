import { AnimationConfig } from '../types/animationConfig';
import { animations } from '../data/animations';

export const getAnimationForImage = (
  index: number,
  dynamicClass: string,
): AnimationConfig => {
  const animation = animations.find(
    (animation) =>
      animation.index.includes(index) &&
      animation.dynamicClass.includes(dynamicClass),
  );
  return (
    animation || {
      initial: {},
      animate: {},
      transition: {},
      dynamicClass: [],
      index: [],
    }
  );
};
