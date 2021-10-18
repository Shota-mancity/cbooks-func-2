import React from "react";
// import { CSVDownload } from "react-csv";

const Download = () => {
  // const headers = [
  //   { label: "ISBN", key: "1" },
  //   { label: "タイトル", key: "2" },
  //   { label: "タイトルよみ", key: "3" },
  //   { label: "シリーズ", key: "4" },
  //   { label: "シリーズよみ", key: "5" },
  //   { label: "著者", key: "6" },
  //   { label: "著者よみ", key: "7" },
  //   { label: "著者2", key: "8" },
  //   { label: "著者よみ", key: "9" },
  //   { label: "NDC(分類記号)", key: "10" },
  //   { label: "出版社", key: "11" },
  //   { label: "出版年", key: "12" },
  //   { label: "価格", key: "13" },
  //   { label: "大きさ", key: "14" },
  //   { label: "ページ数", key: "15" }
  // ];

  return (
    <div className="download">
      {/* use react-csv 使えない？ */}
      {/* <CSVDownload data={csvData} headers={headers} target="_blank" />; */}
      <button type="button" className="download-button">
        <a download="test.csv" target="_self" href="">
          CSV出力
        </a>
      </button>
    </div>
  );
};

export default Download;
