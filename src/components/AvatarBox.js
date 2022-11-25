import { useContext } from "react";
import { MyContext } from "./Context";

export default function AvatarBox() {
  const context = useContext(MyContext);
  console.log(context.data);
  return (
    <div className="avatar-box">
      <img src={context.data.avatar_url} alt="avatar" />
    </div>
  );
}
