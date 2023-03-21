import classes from "./IndexForPage.module.scss";

const IndexForPage = () => {
  return (
    // <div class="section-fixed affix">
    <div className={classes.tmenu}>
      <nav className={classes.addTaTocNav} id="navbar-scrollspy">
        <h2>目次</h2>
        <ul class="nav add-ta-toc-ul">
          <li class="active">
            <a href="#ta-toc-1">フローティングメニューとは</a>
          </li>
          <li class="">
            <a href="#ta-toc-2">フローティングメニューの書き方</a>
          </li>
          <li>
            <a href="#ta-toc-3">実際に書いてみよう</a>
          </li>
          <li>
            <a href="#ta-toc-4">監修してくれたメンター</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default IndexForPage;
