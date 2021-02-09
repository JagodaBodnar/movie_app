export const getSelectedArticleFromLocalStorage = () => {
  let selectedArticleLocalStorage;

  if (localStorage.getItem("selectedArticle")) {
    selectedArticleLocalStorage = JSON.parse(
      localStorage.getItem("selectedArticle")
    );
  } else {
    selectedArticleLocalStorage = null;
  }
  return selectedArticleLocalStorage;
};
