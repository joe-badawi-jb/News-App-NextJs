import Link from "next/link";

import Image from "next/image";
import NewsList from "@/components/news-lis";
import { getAllNews } from "@/lib/news";

// You can check the client fetching code in the client-side-fetching.txt file under the same directory
// when using server side fetching methods, we can decorate the function with async, so we can await for the data to be fetched.
export default async function News() {
  // const response = await fetch("http://localhost:8080/news");

  // if (!response.ok) {
  //   throw new Error("failed to fetch news.");
  // }

  // const news = await response.json();

  // we edited the news.js helpers to get the news directly from the DB
  const news = await getAllNews();

  return (
    <>
      <h1>NEWS PAGE</h1>
      <NewsList news={news} />
    </>
  );
}
