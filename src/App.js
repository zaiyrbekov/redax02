import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "./usersSlice";
function App() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.users);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  const output = users.map((user) => <li key={user.id}>{user.name}</li>);
  return (
    <div className="App">
      <ul>{output}</ul>
    </div>
  );
}

export default App;