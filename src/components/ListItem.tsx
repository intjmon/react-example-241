import type { FC } from "react";
import type { User } from "../types/User";

//export const ListItem = (props: User) => {
export const ListItem: FC<User> = (props) => {
  //const { id, name, age, personalColor = "gray" } = props;
  const { id, name, age, personalColor, hobbies } = props;
  return (
    <p style={{ color: personalColor }}>
      {id}:{name}({age}) {hobbies?.join("/")}
    </p>
  );
};

ListItem.defaultProps = {
  personalColor: "gray"
};
