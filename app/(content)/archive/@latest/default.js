import NewsList from "@/components/news-lis";
import { getLatestNews } from "@/lib/news";

const latestNews = getLatestNews();

export default function LatestPage() {
    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={latestNews} />
        </>
    )

}
