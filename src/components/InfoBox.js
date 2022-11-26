import { useContext } from "react";
import { MyContext } from "./Context";
import twitter from "../images/icon-twitter.svg";
import location from "../images/icon-location.svg";
import website from "../images/icon-website.svg";
import company from "../images/icon-company.svg";

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
        <h2
          style={{ color: context.clickedMode === false ? "#2B3442" : "#fff" }}
        >
          {context.data.name === null ? context.data.login : context.data.name}
        </h2>
        <p
          style={{ color: context.clickedMode === false ? "#697C9A" : "#fff" }}
        >
          Joined {joinDate}
        </p>
      </div>
      <span>@{context.data.login}</span>

      <h6 style={{ color: context.clickedMode === false ? "#4B6A9B" : "#fff" }}>
        {context.data.bio == null
          ? "This profile has no bio"
          : context.data.bio}
      </h6>
      <div
        className="followers-box"
        style={{
          backgroundColor:
            context.clickedMode === false ? "#F6F8FF" : "#141D2F",
        }}
      >
        <div className="repos">
          <p
            style={{
              color: context.clickedMode === false ? "#4B6A9B" : "#fff",
            }}
          >
            Repos
          </p>
          <h5
            style={{
              color: context.clickedMode === false ? "#2B3442" : "#fff",
            }}
          >
            {context.data.public_repos}
          </h5>
        </div>
        <div className="followers">
          <p
            style={{
              color: context.clickedMode === false ? "#4B6A9B" : "#fff",
            }}
          >
            Followers
          </p>
          <h5
            style={{
              color: context.clickedMode === false ? "#2B3442" : "#fff",
            }}
          >
            {context.data.followers}
          </h5>
        </div>
        <div className="followings">
          <p
            style={{
              color: context.clickedMode === false ? "#4B6A9B" : "#fff",
            }}
          >
            Following
          </p>
          <h5
            style={{
              color: context.clickedMode === false ? "#2B3442" : "#fff",
            }}
          >
            {context.data.following}
          </h5>
        </div>
      </div>
      <div className="link-box">
        <div className="address-box">
          <div>
            <svg
              height="20"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: context.data.location == null ? 0.5 : 1 }}
            >
              <path
                d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z"
                fill={context.clickedMode === false ? "#4B6A9B" : "#fff"}
              />
            </svg>
            <p
              style={{
                color: context.clickedMode === false ? "#4B6A9B" : "#fff",
                opacity: context.data.location == null ? 0.5 : 1,
              }}
            >
              {context.data.location === null
                ? "Not Available"
                : context.data.location}
            </p>
          </div>
          <div>
            <img src={website} alt="website" />
            <a href="#">
              <p
                className="website"
                style={{
                  color: context.clickedMode === false ? "#4B6A9B" : "#fff",
                  opacity: context.data.blog == "" ? 0.5 : 1,
                }}
              >
                {context.data.blog === "" ? "Not Available" : context.data.blog}
              </p>
            </a>
          </div>
        </div>
        <div className="twitter-box">
          <div>
            <svg
              height="18"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                opacity: context.data.twitter_username == null ? 0.5 : 1,
              }}
            >
              <path
                d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z"
                fill={context.clickedMode === false ? "#4B6A9B" : "#fff"}
              />
            </svg>
            <p
              style={{
                color: context.clickedMode === false ? "#4B6A9B" : "#fff",
                opacity: context.data.twitter_username == null ? 0.5 : 1,
              }}
            >
              {context.data.twitter_username == null
                ? "Not Available"
                : context.data.twitter_username}
            </p>
          </div>
          <div>
            <svg
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                opacity: context.data.company == null ? 0.5 : 1,
              }}
            >
              <g fill={context.clickedMode === false ? "#4B6A9B" : "#fff"}>
                <path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z" />
              </g>
            </svg>
            <p
              style={{
                color: context.clickedMode === false ? "#4B6A9B" : "#fff",
                opacity: context.data.company == null ? 0.5 : 1,
              }}
            >
              {context.data.company == null
                ? "Not Available"
                : context.data.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
