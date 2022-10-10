import React, {useContext} from 'react'
import {MoodContext} from './App';

export default function MoodEmoji() {
  const mood = useContext(MoodContext);

  return (
    <div>{mood}</div>
  )
}
