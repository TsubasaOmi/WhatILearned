import { ReactDOM } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutMonogoDB from "./pages/AboutMonogoDB";
import HomePage from "./pages/HomePage";

// ステータス：/aboutmongodbが通らない
// 参考URL：https://reffect.co.jp/react/react-router-6
// 上記のオブジェクトによる設定から読み進めていくと解決するかも。

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/aboutmongodb",
          element: <AboutMonogoDB />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
