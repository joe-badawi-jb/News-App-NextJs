import NewsList from "@/components/news-lis";
import { getLatestNews } from "@/lib/news";


export default async function LatestPage() {
    const latestNews = await getLatestNews();
    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={latestNews} />
        </>
    )

}
