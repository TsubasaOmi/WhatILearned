import HomePageLink from "../components/HomePageLink";
import styles from "./LearningCss.module.scss";

const LearningCss = () => {
  return (
    <div>
      <h1>CSS学習記録</h1>
      <p></p>
      <HomePageLink></HomePageLink>
      <p>Reactにpubを付ける方法</p>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>サンプルサイト</h1>
          <nav>
            <ul>
              <li>
                <a href="#">ホーム</a>
              </li>
              <li>
                <a href="#">サービス</a>
              </li>
              <li>
                <a href="#">会社概要</a>
              </li>
              <li>
                <a href="#">お問い合わせ</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className={styles.hero}>
          <h2>ようこそ！</h2>
          <p>サンプルサイトへのご訪問ありがとうございます。</p>
          <a href="#" className={styles.ctaButton}>
            さらに詳しく
          </a>
        </section>
        <section className={styles.features}>
          <h2>特徴</h2>
          <div className={styles.feature}>
            <img src="feature1.png" alt="特徴1のアイコン" />
            <h3>特徴1</h3>
            <p>特徴1の説明文が入ります。</p>
          </div>
          <div className={styles.feature}>
            <img src="feature2.png" alt="特徴2のアイコン" />
            <h3>特徴2</h3>
            <p>特徴2の説明文が入ります。</p>
          </div>
          <div className={styles.feature}>
            <img src="feature3.png" alt="特徴3のアイコン" />
            <h3>特徴3</h3>
            <p>特徴3の説明文が入ります。</p>
          </div>
        </section>
        <footer className={styles.footer}>
          <p>&copy; 2023 サンプルサイト. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LearningCss;
