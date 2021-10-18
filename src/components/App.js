import React, { useState } from "react";
import HowTo from "./HowTo";
import Search from "./Search";
import Table from "./Table";
import Advertisement from "./Advertisement";
import "../styles.css";

const App = () => {
  const { searchBooks, setSearchBooks } = useState([]);
  const search = isbnCode => {
    // エンコード文字 %3d:=, %22:", isbn%3d%22111%22=isbn="111"
    fetch(
      `https://iss.ndl.go.jp/api/sru?operation=searchRetrieve&query=isbn%3d%22${isbnCode}%22`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse);
        // CORSエラーが解決できず
        // setSearchBooks(jsonResponse.a)
      })
      .catch(console.log("error"))
  };

  return (
    <>
      <header>
        <p>CBOOKS</p>
      </header>
      <div className="conteiner">
        <div className="hamburger-menu">
          <input type="checkbox" id="menu-btn-check" />
          <label htmlFor="menu-btn-check" className="menu-btn">
            <span></span>
          </label>
          <div className="menu-content">
            <ul>
              <li>
                <a href="https://cbooks.net/">cBooks</a>
              </li>
              <li>
                <a href="https://cbooks.net/share">cBooks for Share</a>
              </li>
              <li>
                <a href="https://cbooks.net/todays-new-books">
                  Today's new Books
                </a>
              </li>
              <li>
                <a href="https://twitter.com/cBooks_net">Twitter</a>
              </li>
              <li>
                <a href="https://cbooks.net/policy">プライバシーポリシー</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="description-conteiner">
          <h5>書誌データ作成ツール - cBooks</h5>
          <div className="description">
            <p>
              cBooksはISBNから書籍情報を取得できる誰でも利用可能なオンラインツールです。
            </p>
            <p>今後、アップデートや機能の追加を随時行う予定です。</p>
          </div>

          <HowTo />
          <Search search={search} />
          <Table />
          <Advertisement />
        </div>
      </div>
      <footer>
        <p>
          cBooksは国立国会図書館サーチ(NDL Search)より書誌情報を取得しています。
        </p>
        <p>
          「国立国会図書館サーチ(NDL Search)：
          <a href="https://iss.ndl.go.jp/">https://iss.ndl.go.jp/</a>」
        </p>
      </footer>
    </>
  );
};

export default App;
