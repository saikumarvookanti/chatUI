import './App.css';
import ChatContainer from './Components/ChatContainer';
import DataContainer from './Components/DataContainer';
import ProfileContainer from './Components/ProfileContainer';

function App() {
  return (
    <div className="App">
      <ProfileContainer />
      <ChatContainer />
      <DataContainer/>
    </div>
  );
}
export default App;
