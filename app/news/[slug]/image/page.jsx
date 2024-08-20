import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function ImagePage({ params }) {
  const slug = params.slug;
  const newsItem = DUMMY_NEWS.find((el) => el.slug === slug);

  // The below is added in order to redirect to the closest not found Component
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
    </div>
  );
}
