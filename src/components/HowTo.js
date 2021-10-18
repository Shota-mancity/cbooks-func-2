import React from "react";

const HowTo = () => {
  return (
    <div className="how-to-use">
      <button
        className="how-to-button"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        使い方
      </button>
      {/*Modal*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                cBooksの使い方
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                cBooksは、書籍の裏表紙などに記載されているISBNコード※を(バーコードリーダーなどで)入力することで、その書籍の情報を取得できる誰でも利用可能なオンラインツールです。
              </p>
              <p>取得した書籍情報はCSV形式でダウンロードすることも可能です。</p>
              <p className="asterrisk">
                ※ISBNコードとは書籍の裏表紙等に記載されている2段のバーコードのうちの上段のバーコードを指します。（すべての書籍に記載があるとは限りません）
              </p>
              <p className="description-procesure">
                ①バーコード(isbn)入力欄が選択されていることを確認する
              </p>
              <p>
                isbnの入力欄が選択されていない状態でバーコードを読み取っても入力されないため、入力欄が選択されているか確認します。
              </p>
              <p>選択されていなければ、クリックして選択状態にします。</p>
              <p className="description-procesure">
                ②バーコードリーダーでISBNコードを読み取る
              </p>
              <p className="description-procesure">
                ③取得した書籍情報を確認する
              </p>
              <p className="description-procesure">
                ④ダウンロードしたい項目にチェックを入れる
              </p>
              <p className="description-procesure">
                ⑤CSV出力ボタンをクリックする
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
