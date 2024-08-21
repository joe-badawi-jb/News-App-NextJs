import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound, useRouter } from "next/navigation";

export default async function InterceptedImagePage({ params }) {
  const slug = params.slug;
  const newsItem = await getNewsItem(slug);

  // The below is added in order to redirect to the closest not found Component
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        </div>
      </dialog>
    </>
  );
}
