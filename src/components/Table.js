import React from "react";
import Download from "./Download";

const Table = () => {
  const tableLists = [
    { category: "ISBN" },
    { category: "タイトル" },
    { category: "タイトルよみ" },
    { category: "シリーズ" },
    { category: "シリーズよみ" },
    { category: "著者" },
    { category: "著者よみ" },
    { category: "著者2" },
    { category: "著者よみ" },
    { category: "NDC（分類記号）" },
    { category: "出版社" },
    { category: "出版年" },
    { category: "価格" },
    { category: "大きさ" },
    { category: "ページ数" }
  ];

  return (
    <div className="table-conteiner">
      <div className="table-responsive">
        <table className="table">
          <thead className="table-light">
            <tr>
              <th>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                    disabled
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inlineCheckbox1"
                  ></label>
                </div>
              </th>
              {tableLists.map((tableList, index) => {
                return (
                  <th className="item" key={index}>
                    {tableList.category}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>aaaaaaaaaaaaaaaaaaaa</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Download />
    </div>
  );
};

export default Table;
