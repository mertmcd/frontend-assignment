import { AnimationConfig } from '../types/animationConfig';

export const animations: AnimationConfig[] = [
  // common animastions
  {
    initial: { y: '100%' },
    animate: { y: '0%' },
    transition: { duration: 0.5, ease: 'easeOut' },
    dynamicClass: [
      'anim-document-scanner',
      'anim-sign-stamp',
      'anim-batch-scanning',
      'anim-advanced-filters',
      'anim-export-share',
    ],
    index: [0],
  },
  // sign stamp animations
  {
    initial: { scale: 0, top: '30%', x: '50%', right: 0, width: '60%' },
    animate: { scale: 1 },
    transition: { duration: 0.3, ease: 'easeOut', delay: 0.5 },
    dynamicClass: ['anim-sign-stamp'],
    index: [1],
  },
  {
    initial: { scale: 0, top: '50%', x: '-50%', left: '5%', width: '60%' },
    animate: { scale: 1 },
    transition: { duration: 0.3, ease: 'easeOut', delay: 0.8 },
    dynamicClass: ['anim-sign-stamp'],
    index: [2],
  },
  // batch scanning animations
  {
    initial: {
      y: '110%',
      left: '50%',
      x: '-50%',
      scale: 1.2,
      width: '66.4%',
    },
    animate: { y: '0%', scale: 1 },
    transition: { duration: 0.3, ease: 'easeOut', delay: 0.5 },
    dynamicClass: ['anim-batch-scanning'],
    index: [1],
  },
  {
    initial: {
      y: '110%',
      left: '50%',
      x: '-50%',
      scale: 1.2,
      width: '78.1%',
    },
    animate: { y: '0%', scale: 1, bottom: '-17px' },
    transition: { duration: 0.3, ease: 'easeOut', delay: 0.8 },
    dynamicClass: ['anim-batch-scanning'],
    index: [2],
  },
  {
    initial: {
      y: '110%',
      left: '50%',
      x: '-50%',
      scale: 1.2,
      width: '82.6%',
    },
    animate: { y: '0%', scale: 1, bottom: '-15px' },
    transition: { duration: 0.3, ease: 'easeOut', delay: 1.1 },
    dynamicClass: ['anim-batch-scanning'],
    index: [3],
  },
  // advanced filters animations
  {
    initial: { opacity: 0, top: '22%', left: 0, x: '-70%', width: '42.38px' },
    animate: { opacity: 1 },
    transition: { duration: 0.3, ease: 'easeOut', delay: 0.5 },
    dynamicClass: ['anim-advanced-filters'],
    index: [1],
  },
  {
    initial: { opacity: 0, top: '22%', right: 0, x: '70%', width: '42.38px' },
    animate: { opacity: 1 },
    transition: { duration: 0.3, ease: 'easeOut', delay: 0.7 },
    dynamicClass: ['anim-advanced-filters'],
    index: [2],
  },
  // export share animations
  {
    initial: {
      y: '100%',
      left: '50%',
      x: '-50%',
      rotate: '40deg',
      width: '6.6%',
    },
    animate: { y: '-100%', left: '-5%', rotate: '0deg' },
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.5 },
    dynamicClass: ['anim-export-share'],
    index: [1],
  },
  {
    initial: {
      y: '100%',
      left: '50%',
      x: '-50%',
      rotate: '26deg',
      width: '43.5%',
    },
    animate: { y: '0%', left: '14%', rotate: '-0deg' },
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.8 },
    dynamicClass: ['anim-export-share'],
    index: [2],
  },
  {
    initial: { y: '100%', left: '50%', x: '-50%', width: '35.5%' },
    animate: { y: '-25%', left: '50%' },
    transition: { duration: 0.5, ease: 'easeOut', delay: 1.1 },
    dynamicClass: ['anim-export-share'],
    index: [3],
  },
  {
    initial: {
      y: '100%',
      left: '50%',
      x: '-50%',
      rotate: '-26deg',
      width: '43.5%',
    },
    animate: { y: '0%', left: '90%', rotate: '-0deg' },
    transition: { duration: 0.5, ease: 'easeOut', delay: 1.4 },
    dynamicClass: ['anim-export-share'],
    index: [4],
  },
];
