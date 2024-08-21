"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }) {
  const slug = params.slug;
  const newsItem = DUMMY_NEWS.find((el) => el.slug === slug);
  const router = useRouter(); // only works in client components

  // The below is added in order to redirect to the closest not found Component
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={() => router.back()} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        </div>
      </dialog>
    </>
  );
}
