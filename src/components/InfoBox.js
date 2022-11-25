import { useContext } from "react";
import { MyContext } from "./Context";

export default function InfoBox() {
  const context = useContext(MyContext);
  let creationDate = new Date(context.data.created_at);
  let joinDate = creationDate.toLocaleString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="info-box">
      <div className="name-box">
        <h2>{context.data.name}</h2>
        <p>Joined {joinDate}</p>
      </div>
      <span>@{context.data.login}</span>
      {context.data.bio == null ? (
        <p>This profile has no bio</p>
      ) : (
        <p>{context.data.bio}</p>
      )}
      <div className="followers-box">
        <div className="repos">
          <p>Repos</p>
          <h5>{context.data.public_repos}</h5>
        </div>
        <div className="followers">
          <p>Followers</p>
          <h5>{context.data.followers}</h5>
        </div>
        <div className="followings">
          <p>Following</p>
          <h5>{context.data.following}</h5>
        </div>
      </div>
    </div>
  );
}
