import Hero from "../components/Hero";
import BouncyBox from "../components/ui/BouncyBox";
import BouncingArrow from "../components/ui/BouncingArrow";
import { ActivityTimeline, DocumentList } from "../components/ui/TimelineList";

const sampleDocs = [
  { id: "1", title: "How to Get the Free Big Language Model API key...", timestamp: "3 mo. ago" },
  { id: "2", title: "How to get free LLM API keys using Google AI Studio", timestamp: "3 mo. ago" },
  { id: "3", title: "How to fix Zen Browser using shit ton of RAM", timestamp: "3 mo. ago" },
  { id: "4", title: "Is piracy good or bad?", timestamp: "5 mo. ago" },
  { id: "5", title: "Share how to install Equicord and automate tasks", timestamp: "5 mo. ago" },
];

const sampleActivities = [
  { id: "1", type: "like" as const, user: "有人點讚了", actionText: "", targetTitle: "How to get free LLM API keys using Google AI Studio" },
  { id: "2", type: "like" as const, user: "Someone", actionText: "liked", targetTitle: "why school always teaches something useless?" },
  { id: "3", type: "like" as const, user: "Someone", actionText: "liked", targetTitle: "how to show YouTube Music status on Discord" },
  { id: "4", type: "publish" as const, user: "發布了", actionText: "", targetTitle: "How to Get the Free Big Language Model API key" },
];

const Home = () => {
  return (
    <>
        <Hero />

        <BouncyBox className="flex flex-col items-center justify-center gap-6 p-5 mb-12 text-zinc-100">
        {/* Quote Text */}
        <p className="text-base md:text-sm opacity-70 tracking-tighter text-center font-normal">
            Check out some of my stuff below. Site is still work-in-progress.
        </p>

        {/* Repeating Subtle Arrow */}
        <BouncingArrow size={20} color="#d4d4d8" bounceHeight={8} duration={1} />
        </BouncyBox>

        {/* links and timeline */}
        <section className="max-w-350 mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-48">
          <DocumentList
            title="Recently Updated Documents"
            items={sampleDocs}
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
