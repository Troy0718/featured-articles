import styled from "styled-components";
import bkWords from "../assets/img/BK_words.jpg";
import backgroundTree from "../assets/img/Background_tree.jpg";
export const ArticleBannerStyle = styled.div`
  .banner {
    width: 100%;
    height: 200px; /* 設定適當的高度 */
    background-image: url(${bkWords}); /* 預設是桌機版 */
    background-size: cover;
    background-position: center;
    position: relative;

    /* 左側半透明黑色遮罩 */
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%; /* 調整這裡的寬度來改變黑色區塊的範圍 */
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0)
      );
      z-index: 1;
    }

    @media (max-width: 576px) {
      /* 當螢幕寬度小於 576px (xs) 時 */
      background-image: url(${backgroundTree}); /* 換成手機版圖片 */
    }
  }
  h2 {
    font-family: "Dela Gothic One", sans-serif;
    color: white;
    font-size: 40px;
    letter-spacing: 4px;
    line-height: 120%;
    margin-left: 16%;
    z-index: 2;
  }
`;
export default ArticleBannerStyle;
