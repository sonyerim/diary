import "./MainView.css";

function MainView() {
  return (
    <>
      <div className="header">
        <div>(오늘 날짜)</div>
        <div>
          <button
            className="history-btn"
            onClick={() => {
              // HistoryView 화면으로 전환
            }}>
            기록 보기
          </button>
        </div>
      </div>
      <div className="question">(질문)</div>
      <div className="content">
        <textarea
          onChange={() => {
            console.log("onChange");
          }}
        />
      </div>
    </>
  );
}

export default MainView;
