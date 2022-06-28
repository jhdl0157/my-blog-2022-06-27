import { Link } from "gatsby";
import React from "react";

function Layout({ children }) {
  return (
    <main>
      <div style={{ display: "flex", gap: 10 }}>
        <Link to="/">홈</Link>
        <Link to="/about">어바웃</Link>
      </div>
      {children}
      <div>백엔드 개발자 이재호 -기술 블로그</div>
    </main>
  );
}

export default Layout;