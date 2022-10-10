import { useContext, createContext } from "react";
import MoodEmojiList from "./MoodEmojiList";

const moods = {
  happy: ':)',
  sad: ':('
};

export const MoodContext = createContext(moods);

function App() {
  return (
      <MoodContext.Provider value={moods.sad}>
          <MoodEmojiList/>
      </MoodContext.Provider>
  );
}

export default App;
