import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 'root'というIDを持つDOM要素を取得
const rootElement = document.getElementById('root');

// rootElementがnullでないことを確認
if (rootElement !== null) {
  // Reactアプリケーションをレンダリングするためのルートを作成
  const root = ReactDOM.createRoot(rootElement);
  // ルートに対してReactコンポーネントツリーをレンダリング
  root.render(
    // <React.StrictMode>は開発モードでの追加のチェックと警告を提供
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // rootElementがnullの場合のエラーハンドリング
  console.error("Failed to find the root element.");
}

