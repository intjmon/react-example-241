import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import type { User } from "./types/User";
import axios from "axios";

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://api.npoint.io/7336b2444331b29dae43")
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem
          id={user.id}
          name={user.name}
          age={user.age}
          personalColor={user.personalColor}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
};
