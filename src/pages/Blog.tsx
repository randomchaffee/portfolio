import { Link } from "react-router";
import BouncyBox from "../components/ui/BouncyBox";
import { SquareArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "../data/blogData";

const Blog = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 md:px-20 py-8">
        <ul className="flex flex-col text-start space-y-6 list-none p-6">
          {BLOG_POSTS.map((post, index) => (
            <BouncyBox key={post.id} delayOffset={index * 0.12}>
              <Link to={`/blog/${post.slug}`} className="group">
                <li 
                  key={post.id} 
                  className="
                    group relative flex flex-col justify-between
                    p-6 rounded-2xl
                  hover:bg-zinc-500/10
                  hover:border-zinc-700
                    transition-all duration-300

                    "
                  >
                    <h2
                      // line animation effect, but not on span
                      // EDIT: i removed it
                      className="
                        inline
                        text-2xl font-medium tracking-tight
                      "
                    >
                      {post.title}
                    </h2>
                  <p className="text-justify my-2 pt-4 text-md tracking-tight text-zinc-300">
                    {post.excerpt}
                  </p>
                  <p className="pt-2 text-xs text-zinc-500">{post.publishedAt}</p>
                  <div className="absolute bottom-4 right-5 text-md text-white/80">
                    <p className="flex flex-row items-center gap-1">
                      read article
                      <SquareArrowUpRight className="h-5 w-5"/>
                    </p>
                  </div>
                </li>
              </Link>
            </BouncyBox>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Blog;
