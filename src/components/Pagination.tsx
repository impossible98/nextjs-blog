import { Button } from '@chakra-ui/react'
import Link from "next/link";

interface Props {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({ totalPages, currentPage }: Props) {
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <Button
            colorScheme='blue'
            isDisabled={!prevPage}
          >
            上一页
          </Button>
        )}
        {prevPage && (
          <Link
            href={
              currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`
            }
          >
            <Button
              colorScheme='blue'
              >
              上一页
            </Button>
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <Button
            colorScheme='blue'
            disabled={!nextPage}
          >
            下一页
          </Button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <Button
              colorScheme='blue'
            >
              下一页
            </Button>
          </Link>
        )}
      </nav>
    </div>
  );
}
