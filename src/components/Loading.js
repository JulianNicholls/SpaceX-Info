import React from 'react';

const texts = [
  'Dehydration is your worst enemy. Drink up while this page loads',
  'Packets are flowing through the internet to get to you. ',
  'Light speed ahead! or not...',
  'Good things come to those who wait.',
  'If you\'re happy and you know it, clap your hands!',
  'Time for a sip of water.',
  'Forming the pixels on your screen.',
  'Hold up! Let us get our codes in order.',
  'Stand up and stretch while this loads.',
  '',
];

const Loading = () => {
  const text = texts[Math.floor(Math.random() * texts.length)];

  return <div className="loading">{text}</div>;
};

export default Loading;
