//以下は、Reactで要素のスクロールに対応するコードです。スクロールが発生した際に、リンク先のパラグラフにスクロールし、そのa要素以外をグレーアウトさせます。

import React, { useEffect, useState } from "react";
import classes from "./IndexForPage.module.scss";

const IndexForPage = () => {
  const [activeLink, setActiveLink] = useState("");

  /*
  以下のコードには間違いがある。
  1. スクロール位置がフローティングメニューのオフセット位置以下でかつ、
  オフセットからフローティングメニューまでだった場合、該当リンクをアクティブにし、
  その他のリンクはディアクティベイトする
  ↑
  【修正案】
  フローティングメニューを基準にするのではなく、該当の<p>のクラスに来たらアクティベイト
  するように作る
  */
  const handleScroll = () => {
    const scrollPos = window.scrollY;
    const links = document.querySelectorAll(".add-ta-toc-ul li a");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      const target = document.querySelector(href);
      if (
        target.offsetTop <= scrollPos &&
        target.offsetTop + target.offsetHeight > scrollPos
      ) {
        setActiveLink(href);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.index}>
      <nav className={classes.addTaTocNav} id="navbar-scrollspy">
        <h2>目次</h2>
        <ul className="nav add-ta-toc-ul">
          <li className={activeLink === "#ta-toc-1" ? "active" : ""}>
            <a href="#ta-toc-1">フローティングメニューとは</a>
          </li>
          <li className={activeLink === "#ta-toc-2" ? "active" : ""}>
            <a href="#ta-toc-2">フローティングメニューの書き方</a>
          </li>
          <li className={activeLink === "#ta-toc-3" ? "active" : ""}>
            <a href="#ta-toc-3">実際に書いてみよう</a>
          </li>
          <li className={activeLink === "#ta-toc-4" ? "active" : ""}>
            <a href="#ta-toc-4">監修してくれたメンター</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default IndexForPage;

//注意：上記のコードは、この質問のために書かれたもので、すべてのコードのエラーチェックや完全性の確認はされていません。実際のアプリケーションで使用する前に、適切なテストとエラーチェックを実行することを強くお勧めします。
