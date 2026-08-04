import { Link } from "react-router";
import type { DocumentItem, ActivityItem } from "../../types/portfolio";
import { CircleArrowRight, FileText, Heart, Send } from "lucide-react";

interface DocumentListProps {
    title: string;
    items: DocumentItem[];
    moreLink?: string;
}
// ===== Document List Style =======
export const DocumentList = ({ title, items, moreLink }: DocumentListProps) => {
    return (
        <div className="w-full text-zinc-100 font-sans">
            <h2 className="pl-2 pb-8 text-xl font-semibold mb-6 tracking-tight">{title}</h2>
                <div className="relative pl-6 space-y-4 before:absolute before:left-[4.25px] before:top-2 
                before:bottom-2 before:w-0.5 before:bg-emerald-200">
                    {items.map((item) => (
                        <div key={item.id} className="relative group flex items-center justify-between
                        text-sm gap-4">
                            {/* timeline dot */}
                            <span className="absolute -left-5.75 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-200
                            group-hover:scale-125 transition-transform"/>

                            {/* title / link */}
                            <a 
                                href={item.url || "#"}
                                className="text-zinc-300 group-hover:text-white hover:underline transition-colors truncate font-normal"
                            >
                                {item.title}
                            </a>

                            {/* timestamp */}
                            <span className="text-xs text-zinc-400 shrink-0 font-light tracking-wide">
                                {item.timestamp}
                            </span>
                        </div>
                    ))}
                </div>
                
                {/* "And more" link*/}
                {moreLink && (
                    <div className="mt-6 text-right">
                        <Link
                            to={moreLink}
                            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
                        >
                            <CircleArrowRight className="w-4 h-4 mt-0.5"/>
                            <span>And more</span>
                        </Link>
                    </div>
                )}
        </div>
    );
};

// ======= Activity Log Style =========
interface ActivityTimelineProps {
    title: string;
    activities: ActivityItem[];
}

export const ActivityTimeline = ({ title, activities }: ActivityTimelineProps) => {
    const getIcon = (type: ActivityItem["type"]) => {
        switch(type) {
            case "like":
                return <Heart className="w-4 h-4 scale-80" />;
            case "publish":
                return <Send  className="w-4 h-4 scale-80"/>;
            default:
                return <FileText  className="w-4 h-4 scale-80"/>
        }
    };

    return (
        <div className="w-full text-zinc-100 font-sans">
            <h2 className="pl-2 pb-8 text-xl font-semibold mb-6 tracking-tight">{title}</h2>

            {/* container w/ continuous vertical line */}
            <div className="relative pl-6 space-y-4 before:absolute before:left-[3.75px] before:top-3 
                before:bottom-3 before:w-0.5 before:bg-emerald-200">
                {activities.map((item) => (
                    <div key={item.id} className="relative flex items-center gap-2 text-sm group">
                        {/* timeline dot */}
                        <span className="absolute -left-5.75 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-200
                        group-hover:scale-125 transition-transform"/>
                        
                        {/* activity type icon */}
                        <span className="p-1 rounded-full border border-zinc-500/30">
                            {getIcon(item.type)}
                        </span>

                        {/* content text */}
                        <div className="truncate text-zinc-300">
                            {item.user && <span className="text-zinc-400 mr-1.5">{item.user}</span>}
                            <span className="text-zinc-400 mr-1.5 font-light">{item.actionText}</span>
                            <a
                                href={item.url || "#"}
                                className="font-medium text-zinc-100 hover:underline transition-all"
                            >
                                {item.targetTitle}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}