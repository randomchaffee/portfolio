import { useParams, Link } from "react-router";
import BouncyBox from "../components/ui/BouncyBox";
import { MoveLeft } from "lucide-react";
import { BLOG_POSTS } from "../data/blogData";

const BlogPost = () => {
    // the slug (to be used for route)
    const { slug } = useParams<{ slug: string }>();

    const post = BLOG_POSTS.find((p) => p.slug === slug);

    // missing
    if (!post) {
        return (
            <BouncyBox delayOffset={0}>
                <div className="p-12">
                    <h1 className="text-xl font-bold">{`Post not found. Sorry :(`}</h1>
                    <h1 className="text-xl font-bold">{`(did you click a real article? inform me)`}</h1>
                    <Link to={"/blog"} className="flex flex-row text-blue-400 text-lg underline mt-4 gap-2 items-center">
                        <MoveLeft />
                        {`Back to all posts`}
                    </Link>
                </div>
            </BouncyBox>
        );
    }

    return (
        <article className="max-w-7xl mx-auto px-12 md:px-36 py-8">
            <BouncyBox delayOffset={0}>
                <Link to={"/blog"} className="text-start text-xs text-zinc-400 hover:underline">
                    {`<- Back to all posts`}
                </Link>

                <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
                <p className="text-xs text-zinc-500 mt-3">{post.publishedAt}</p>

                <div className="my-6 text-zinc-200 md:text-lg tracking-wide font-light space-y-4">
                    {post.content.split("\n\n").map((paragraph, index) => {
                        const imageKey = paragraph.trim();
                        const inlineImage = post.images?.[imageKey];

                        if (inlineImage) {
                            return (
                                <figure key={index} className="my-6">
                                    <img
                                        src={inlineImage.url}
                                        alt={inlineImage.alt}
                                        className="max-w-full h-auto mx-auto block object-contain rounded-lg border border-zinc-800"
                                    />
                                    {inlineImage.caption && (
                                        <figcaption className="text-center text-xs text-zinc-400 mt-2 italic">
                                            {inlineImage.caption}
                                        </figcaption>
                                    )}
                                </figure>
                            )
                        }

                        // text
                        return (
                            <p key={index} className="text-justify leading-relaxed">
                                {paragraph}
                            </p>
                        )
                    })}

                </div>

                <div className="flex gap-2">
                    {post.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* stats */}
                <div>
                    <p className="md:text-[13px] tracking-wide font-light text-zinc-500 mt-3">
                        Author: Evan Gregorio
                        </p>
                </div>
            </BouncyBox>
        </article>
    );
};

export default BlogPost
