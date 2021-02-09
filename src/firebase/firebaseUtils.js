import { firestore } from "./firebaseConfig";

export const articlesCollection = firestore.collection("articles");

export const addAndChangeComment = (articleId, newCommentsArray) => {
  articlesCollection.doc(articleId).update({
    comments: [...newCommentsArray],
  });
};
