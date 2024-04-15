'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

type Props = {}

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter 
    options={{
        loop: true,
    }}
    onInit={(typewriter) => {
        typewriter
        .typeString('&#128640 Supercharged Productivity.')
        .pauseFor(1000)
        .deleteAll()
        .typeString('🤖 AI-Powered Insights.')
        .pauseFor(1000)
        .start();
    }}
    />
  )
}

export default TypewriterTitle