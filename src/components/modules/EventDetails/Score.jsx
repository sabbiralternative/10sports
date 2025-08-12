import ScoreBottomPart from "./ScoreBottomPart";
import ScoreTopPart from "./ScoreTopPart";

const Score = ({ iscore }) => {
  return (
    <div
      style={{ marginTop: "2px" }}
      id="score-board"
      className="score-board  show mb-md-3 hidden lg:block"
    >
      <ScoreTopPart isMobile={false} iscore={iscore} />
      <ScoreBottomPart isMobile={false} iscore={iscore} />
    </div>
  );
};

export default Score;
