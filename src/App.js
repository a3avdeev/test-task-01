import './App.css';
import { CardItemList } from './components/CardItemList/CardItemList';
import items from './data/users.json';

function App() {
  return (
    <div className="App">
      <CardItemList users={items.users} />
    </div>
  );
}

export default App;
