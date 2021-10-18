import React, {useState} from "react";

const Search = props => {
  const [isbnCode, setIsbnCode]=useState("");
  const handleChangeISBNCode=e=>{
    setIsbnCode(e.target.value);
  }
  const handleEnterISBNCode=e=>{
    if(e.key==="Enter"){
      e.preventDefault();
      // searchは関数のためpropsで渡す
      props.search(isbnCode);
      setIsbnCode("");
    }
  }

  return (
    <div className="search-conteiner">
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="number"
          value={isbnCode}
          onChange={handleChangeISBNCode}
          onKeyPress={handleEnterISBNCode}
        />
        <label htmlFor="floatingInput">上段のバーコード(ISBN-13)</label>
      </div>
    </div>
  );
};

export default Search;
