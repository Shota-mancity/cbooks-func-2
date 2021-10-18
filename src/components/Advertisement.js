import React from "react";

const Advertisement = () => {
  const adLists = [
    {
      ad:
        "https://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3590433&pid=887101279"
    },
    {
      ad:
        "https://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3590433&pid=887101709"
    },
    {
      ad:
        "https://www25.a8.net/svt/bgt?aid=210507427152&wid=001&eno=01&mid=s00000010273002011000&mc=1"
    },
    {
      ad:
        "https://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3590433&pid=887101279"
    },
    {
      ad:
        "https://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3590433&pid=887101709"
    },
    {
      ad:
        "https://www25.a8.net/svt/bgt?aid=210507427152&wid=001&eno=01&mid=s00000010273002011000&mc=1"
    },
    {
      ad:
        "https://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3590433&pid=887101279"
    },
    {
      ad:
        "https://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3590433&pid=887101709"
    },
    {
      ad:
        "https://www25.a8.net/svt/bgt?aid=210507427152&wid=001&eno=01&mid=s00000010273002011000&mc=1"
    }
  ];

  return (
    <div className="advertisement-conteiner">
      <p>Ad</p>
      <div className="advertisement">
        {adLists.map((adList, index) => {
          return (
            <a href={adList.ad} target="_blank" rel="noreferrer" key={index}>
              <img src={adList.ad} alt=""></img>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Advertisement;
