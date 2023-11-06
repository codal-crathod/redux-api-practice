import './App.css';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <div className="App">
      <UserList />
      <AddUser />
      <UserInfo />
    </div>
  );
}

export default App;
