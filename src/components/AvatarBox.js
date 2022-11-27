import { useContext } from "react";
import { MyContext } from "./Context";

export default function AvatarBox() {
  const context = useContext(MyContext);
  let creationDate = new Date(context.data.created_at);
  let joinDate = creationDate.toLocaleString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="avatar-box">
      <img src={context.data.avatar_url} alt="avatar" />
      <div className="avatar-name-info">
        <div className="name-box">
          <h2
            style={{
              color: context.clickedMode === false ? "#2B3442" : "#fff",
            }}
          >
            {context.data.name === null
              ? context.data.login
              : context.data.name}
          </h2>
          <h5>@{context.data.login}</h5>
        </div>
        <p
          style={{
            color: context.clickedMode === false ? "#697C9A" : "#fff",
          }}
        >
          Joined {joinDate}
        </p>
      </div>
    </div>
  );
}
