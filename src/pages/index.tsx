import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getArticles } from "../lib/db";
import ArticleList from "../components/ArticleList";

export default function Home({
  data,
  count,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // return value
  return <ArticleList totalPages={count} currentPage={page} articles={data} />;
}

// 每次刷新页面都后执行这个函数
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const page = (context.query?.page as string) || 1;
  // 通过 API 请求数据
  const uid = process.env.uid!;
  const { data, count } = await getArticles(uid, (+page - 1) * 10);

  // return value
  return {
    props: {
      data,
      count,
      page: +page,
    },
  };
}
