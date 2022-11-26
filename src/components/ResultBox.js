import { useContext } from "react";
import AvatarBox from "./AvatarBox";
import { MyContext } from "./Context";
import InfoBox from "./InfoBox";
export default function ResultBox() {
  const context = useContext(MyContext);
  return (
    <div
      className="result-box"
      style={{
        backgroundColor: context.clickedMode === false ? "#fff" : "#1E2A47",
        boxShadow:
          context.clickedMode === false
            ? "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
            : null,
      }}
    >
      <AvatarBox />
      <InfoBox />
    </div>
  );
}
