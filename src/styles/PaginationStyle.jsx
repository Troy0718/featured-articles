import styled from "styled-components";
export const PaginationStyle = styled.ul`
  --theme-border: #a5ee9d;
  --theme-title: #5caf55;
  --theme-color: #e0e0e0;
  --card-hover: rgb(248, 248, 249);
  --button-active: #333435;

  .page-item {
    margin: 0 5px;
  }

  .page-link {
    text-decoration: none;
    // padding: 8px 12px;
    border-radius: 5px;
    border: none; /* 移除邊框 */
    background-color: transparent;
    color: black;
  }

  .page-link:hover {
    background-color: var(--theme-border);
  }

  .active-page {
    background-color: var(--theme-border) !important; /* 設置主題色 */
    color: black;
    font-weight: bold;
    border-radius: 5px;
  }

  .disabled {
    color: #e0e0e0;
  }
`;
export default PaginationStyle;
