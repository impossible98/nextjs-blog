/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { GetServerSidePropsContext } from "next";
import { InferGetServerSidePropsType } from "next";
import Error from "next/error";
import { getArticleDetail } from "../../../lib/db";
import { Article } from "../../../types/article";
import matter from "gray-matter";
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import MarkdownIt from "markdown-it";
import { NextSeo } from "next-seo";
import Prism from "prismjs";
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-tsx");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-markdown");

const md = new MarkdownIt();

export default function Page({
  data,
  statusCode,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  if (statusCode || !data) {
    return <Error statusCode={statusCode} />;
  }

  const result = matter(data?.article_info.mark_content || "");

  return (
    <div className="px-3 md:px-0 mx-auto prose prose-indigo">
      <NextSeo
        title={data.article_info.title}
        description={data.article_info.brief_content}
        openGraph={{
          images: [{ url: data.article_info.cover_image }],
        }}
      />
      <div className="pt-6">
        <Heading as='h1' size='xl'>{data?.article_info.title}</Heading>
        <Text>编辑于&nbsp;
          {new Date(+data.article_info.ctime * 1000).toLocaleDateString(
            "zh-CN",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}
        </Text>
        {data.article_info.cover_image && (
          <img
            className="max-w-full"
            src={data.article_info.cover_image}
            alt={data.article_info.title}
          />
        )}
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: md.render(result.content),
        }}
      ></div>
    </div>
  );
}

// 每次刷新页面都后执行这个函数
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const slug = context.query?.slug as string[];
  // 通过 API 请求数据
  const res = await getArticleDetail(slug[0]);
  if (res.err_msg === "success") {
    // 将数据传递到页面上
    return { props: { data: res.data as Article } };
  }

  // 将数据传递到页面上
  // return value
  return { props: { statusCode: 500 } };
}
