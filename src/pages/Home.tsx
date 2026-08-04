import Hero from "../components/Hero";
import { ActivityTimeline, DocumentList } from "../components/ui/TimelineList";
import { BLOG_POSTS } from "../data/blogData";

const sampleActivities = [
  { id: "1", type: "like" as const, user: "有人點讚了", actionText: "", targetTitle: "How to get free LLM API keys using Google AI Studio and OpenRoute" },
  { id: "2", type: "like" as const, user: "Someone", actionText: "liked", targetTitle: "why school always teaches something useless?" },
  { id: "3", type: "like" as const, user: "Someone", actionText: "liked", targetTitle: "how to show YouTube Music status on Discord" },
  { id: "4", type: "publish" as const, user: "發布了", actionText: "", targetTitle: "How to Get the Free Big Language Model API key" },
];

const Home = () => {
  return (
    <>
        <Hero />

        {/* links and timeline */}
        <section className="max-w-[90%] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-36">
          <DocumentList
            title="Recent Posts & Articles"
            items={BLOG_POSTS.map((post) => ({
              id: post.id,
              title: post.title,
              url: `/blog/${post.slug}`,
              timestamp: post.publishedAt,             
            }))}
            moreLink="/work"
          />

          <ActivityTimeline
            title="What happened recently"
            activities={sampleActivities}
          />
        </section>
    </>
  )
}

export default Home;
