import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Modal } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import ArticlePageStyle from "../styles/ArticlePageStyle";
import ArticleBannerStyle from "../styles/ArticleBannerStyle";
import Pagination from "../components/Pagination";
import ArticleDetailModal from "../components/ArticleDetailModal";
const url = import.meta.env.VITE_URL;
const path = import.meta.env.VITE_PATH;
let defaultModalState = {
  author: "",
  create_at: "",
  description: "",
  id: "",
  image: "",
  isPublic: true,
  num: "",
  tag: [],
  title: "",
  content: "",
};
function ArticlePage() {
  //---------用於轉換頁面顯示筆數
  const articlesPerPage = 6; // 每頁顯示 6 筆
  const [apiPage, setApiPage] = useState(1); // API 的分頁（10 筆/頁）
  const [apiArticles, setApiArticles] = useState([]); // 存 API 回傳的 10 筆
  const [displayArticles, setDisplayArticles] = useState([]); // 當前顯示的 6 筆
  //---------

  //取得所有文章
  const getArticles = async () => {
    let allArticles = [];
    let page = 1;
    let hasNext = true;

    while (hasNext) {
      try {
        const response = await axios.get(
          `${url}/api/${path}/articles?page=${page}`
        );
        console.log(response);
        allArticles = [...allArticles, ...response.data.articles];
        if (!response.data.pagination.has_next) {
          hasNext = false;
        } else {
          page += 1;
        }
      } catch (error) {
        console.error(error.response?.data?.message || error.message);
        hasNext = false;
      }
    }

    setApiArticles(allArticles); // 儲存所有文章
    handlePageChange(1, allArticles); // 預設顯示第 1 頁
  };

  //取得單篇article 內容
  const getArticle = async (id) => {
    try {
      const response = await axios.get(`${url}/api/${path}/article/${id}`);
      return response.data;
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  //DetailModa
  const [isArticleDetailModalOpen, setIsArticleDetailModalOpen] =
    useState(false);

  const [tempArticle, setTempArticle] = useState(defaultModalState);
  //article page
  const [pageInfo, setPageInfo] = useState({
    total_pages: 1,
    current_page: 1,
    has_pre: false,
    has_next: false,
  });

  const handlePageChange = (page, articlesData = apiArticles) => {
    if (!articlesData || articlesData.length === 0) {
      console.log("⚠️ 沒有文章資料！");
      return;
    }

    const totalArticles = articlesData.length;
    const totalPages = Math.ceil(totalArticles / articlesPerPage);
    const startIndex = (page - 1) * articlesPerPage;
    const endIndex = Math.min(startIndex + articlesPerPage, totalArticles);
    const paginatedArticles = articlesData.slice(startIndex, endIndex);
    // console.log(`第 ${page} 頁顯示的文章:`, paginatedArticles);
    setDisplayArticles(paginatedArticles); // 更新當前顯示的文章
    setPageInfo({
      total_pages: totalPages,
      current_page: page,
      has_pre: page > 1,
      has_next: page < totalPages,
    });
  };

  //打開ArticleModal
  const handleOpenArticleDetailModal = async (article) => {
    const singleArticle = await getArticle(article.id);
    setTempArticle(singleArticle.article);
    setIsArticleDetailModalOpen(true);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            大叔出任務
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  大叔接招
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  精選文章
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  購物車
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Jack Huang
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ArticleBannerStyle>
        <div className="banner d-flex align-items-center justify-content-start">
          <h2 className="text-start  mb-4">精選文章</h2>
        </div>
      </ArticleBannerStyle>
      {/* <!-- 主要內容 --> */}
      <ArticlePageStyle>
        <div className="container my-5">
          <div className="row">
            {/* <!-- 文章卡片 --> */}
            {displayArticles && displayArticles.length > 0 ? (
              displayArticles.map((article) => (
                <div className="col-12 col-sm-4 col-xxl-4" key={article.id}>
                  <div className="article-card d-flex flex-row flex-md-column ">
                    <div className="w-30 w-md-100 frame">
                      <img src={article.image} alt={article.title} />
                    </div>
                    <div className="card-body w-70 w-md-100 text-start d-grid">
                      <h5>{article.title}</h5>
                      <p className="mt-2">{article.description}</p>
                      <button
                        onClick={() => handleOpenArticleDetailModal(article)}
                        className="btn btn-dark"
                      >
                        閱讀全文
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p>⚠️ 尚無文章資料</p>
              </div>
            )}
          </div>
          {/* <!-- 分頁 --> */}
          <Pagination
            pageInfo={pageInfo}
            handlePageChange={handlePageChange}
          ></Pagination>
        </div>
      </ArticlePageStyle>
      {/* <!-- 頁腳 --> */}
      <footer className="bg-dark text-center text-white py-3">
        <p className="mb-0">Copyright © 2024 大叔出任務 All Rights Reserved.</p>
        <a href="#" className="text-white">
          GitHub
        </a>{" "}
        |{" "}
        <a href="#" className="text-white">
          管理後台
        </a>
      </footer>

      {/** modal */}
      <ArticleDetailModal
        tempArticle={tempArticle}
        getArticles={getArticles}
        isOpen={isArticleDetailModalOpen}
        setIsOpen={setIsArticleDetailModalOpen}
      />
    </>
  );
}
export default ArticlePage;
