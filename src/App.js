import './App.css';
import Bots from './components/Bots';
import Chat from './components/Chat';

function App() {
  return (
    <>
      <div className="chatbox">
        <section className='mt-10 rounded-t-lg'>
          <h1><i className="fab fa-atlassian"></i>CoolChat</h1>
        </section>
        
        <div className='flex justify-between mt-5'>
          <Bots />
          <Chat />
        </div>
      </div>
    </>
  );
}

export default App;
