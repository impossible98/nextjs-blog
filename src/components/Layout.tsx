/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";
import { Button, Image } from '@chakra-ui/react'
import Link from "next/link";
import { useRouter } from "next/router";
import { config } from "../config";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const router = useRouter();
  if (router.pathname === "/") {
    return <div className="min-h-screen">{children}</div>;
  }
  return (
    <>
      <div className="p-3 bg-primary-50 border-b border-primary-100 top-0 sticky">
        <div className="mx-auto max-w-5xl relative z-20 flex justify-between items-center">
          <div className="flex items-center max-w-full">
            <Link href="/">
              <span className="flex items-center no-underline">
                <Image
                  boxSize='64px'
                  src={config.avatar}
                  alt=''
                  className="md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full"
                />
              </span>
            </Link>
            <Link href="/">
              <span className="ml-3 block no-underline text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight">
                {config.author}
              </span>
            </Link>
          </div>
          <div className="tracking-wide text-xs spaced-x-6">
            <Link href="https://juejin.cn/creator/home">
              <Button>
                写文章
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-screen">{children}</div>
      <footer className="p-3 bg-primary-50 border-t border-primary-100 text-center py-5">
        Github • © 2022 • Next.js Juejin Blog
      </footer>
    </>
  );
}
