import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import NewsList from "@/components/news-lis";

export default function News() {
  return (
    <>
      <h1>NEWS PAGE</h1>
      <NewsList news={DUMMY_NEWS}></NewsList>
    </>
  );
}
