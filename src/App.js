import './App.css';
import Bots from './components/Bots';
import Chat from './components/Chat';
import { useState } from 'react';
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

function App() {
  const [botNo, setBotNo] = useState(1);
  return (
    <>
      <div className="chatbox pt-10">
        <section className='rounded-t-lg'>
          <h1><HiChatBubbleBottomCenterText /> CoolChat</h1>
        </section>

        <div className='flex justify-between mt-5'>
          <Bots setBotNo={setBotNo} />
          <Chat botNo={botNo} />
        </div>
      </div>
    </>
  );
}

export default App;
