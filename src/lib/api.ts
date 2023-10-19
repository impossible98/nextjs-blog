// import third-party modules
import axios from 'axios';
// import local modules
import { ARTICLE_API, ARTICLE_DETAIL_API } from './consts';

export async function getArticles(uid: string, cursor: number = 0) {
  const res = await axios.post(ARTICLE_API, {
    cursor: cursor + '',
    sort_type: 2,
    user_id: uid + '',
  });
  console.log(res.data);
  // return value
  return res.data;
}

export async function getArticleDetail(article_id: string) {
  const res = await axios.post(ARTICLE_DETAIL_API, {
    article_id,
  });
  console.log(res.data);
  // return value
  return res.data;
}
