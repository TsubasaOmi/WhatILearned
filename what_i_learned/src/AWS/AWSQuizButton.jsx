import { useState } from "react";

// AWS問題のデータ
const awsQuestions = [
  {
    question: "AWSのサービスで、オブジェクトストレージと呼ばれるものはどれか？",
    choices: ["S3", "EBS", "EFS", "Glacier"],
    answer: "S3",
    explanation:
      "S3は、オブジェクトストレージと呼ばれる、キーとバリューのペアでデータを保存するサービスです。EBSとEFSはブロックストレージと呼ばれる、ディスクに似た方式でデータを保存するサービスです。Glacierは、長期間保存するための低コストなアーカイブストレージサービスです。",
  },
  {
    question: "AWSのサービスで、仮想サーバーを提供するものはどれか？",
    choices: ["EC2", "Lambda", "Fargate", "Lightsail"],
    answer: "EC2",
    explanation:
      "EC2は、仮想サーバーを提供するサービスです。Lambdaは、サーバーレスな関数型コンピューティングサービスです。Fargateは、コンテナ化されたアプリケーションを実行するためのサービスです。Lightsailは、シンプルな仮想プライベートサーバーを提供するサービスです。",
  },
  {
    question:
      "AWSのサービスで、リレーショナルデータベースを提供するものはどれか？",
    choices: ["DynamoDB", "RDS", "Redshift", "Aurora"],
    answer: "RDS",
    explanation:
      "RDSは、リレーショナルデータベースを提供するサービスです。DynamoDBは、NoSQLデータベースを提供するサービスです。Redshiftは、データウェアハウスを提供するサービスです。Auroraは、RDSの互換性のある高性能なデータベースエンジンです。",
  },
];

// ボタンコンポーネント
function AWSQuizButton() {
  // 現在の問題番号
  const [questionIndex, setQuestionIndex] = useState(0);
  // 現在の問題
  const currentQuestion = awsQuestions[questionIndex];
  // ユーザーが選択した選択肢
  const [userChoice, setUserChoice] = useState(null);
  // ユーザーが回答したかどうか
  const [isAnswered, setIsAnswered] = useState(false);

  // 選択肢をクリックしたときの処理
  const handleClickChoice = (choice) => {
    // 回答済みでなければ
    if (!isAnswered) {
      // 選択した選択肢をセットする
      setUserChoice(choice);
      // 回答済みにする
      setIsAnswered(true);
    }
  };

  // 次へボタンをクリックしたときの処理
  const handleClickNext = () => {
    // 次の問題番号に更新する
    setQuestionIndex((prevIndex) => (prevIndex + 1) % awsQuestions.length);
    // 選択した選択肢をリセットする
    setUserChoice(null);
    // 回答済みに
    // 回答済みになっていない
    setIsAnswered(false);
  };

  return (
    <div className="button">
      <h1>AWS問題</h1>
      <p>{currentQuestion.question}</p>
      <ul>
        {currentQuestion.choices.map((choice) => (
          <li
            key={choice}
            className={
              isAnswered
                ? choice === currentQuestion.answer
                  ? "correct"
                  : choice === userChoice
                  ? "incorrect"
                  : ""
                : ""
            }
            onClick={() => handleClickChoice(choice)}
          >
            {choice}
          </li>
        ))}
      </ul>
      {isAnswered && (
        <div className="explanation">
          <p>
            {userChoice === currentQuestion.answer
              ? "正解です！"
              : `不正解です。正解は${currentQuestion.answer}です。`}
          </p>
          <p>{currentQuestion.explanation}</p>
        </div>
      )}
      <button onClick={handleClickNext}>次へ</button>
    </div>
  );
}

export default AWSQuizButton;
