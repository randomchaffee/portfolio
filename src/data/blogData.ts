import type { PostItem } from "../types/portfolio";
// NOTES: use \n\n for setting a new paragraph

export const BLOG_POSTS: PostItem[] = [
   {
      id: 1,
      slug: "why-i-started-this",
      title: "Why I Started Creating This Website",
      tags: ["Self Reflection", "Web Development"],
      excerpt: "idk i just felt like it",
      content: "idk i just felt like it",
      publishedAt: "August 02, 2026"
   },
   {
      id: 2,
      slug: "about-my-previous-portfolio",
      title: "Some Concerns About My Previous Portfolio",
      tags: ["Self Reflection", "AI"],
      excerpt: `At the time, I was really proud and feeling like I was being productive,
               but very soon I actually realized I relied so much on AI for building it that
               many of the concepts...`,
      content: `At the time, I was really proud and feeling like I was being productive,
               but very soon I actually realized I relied so much on AI for building it that
               many of the concepts, such as setting up nginx, creating a docker-compose script,
               and even creating FastAPI backend enpoints, were things I actually just followed based on
               what the AI instructed. If I were told to recreate those today without outside help, would I actually know how?
               I didn't think much of it then but now I know I wouldn't be able to. 
               I'd know the concepts, like why I used those tools and such, but not the how. 
               
               \n\nWhat qualifies you as knowing or being skilled at something, really? Even now it's still a question
               I often ask myself.`,
      publishedAt: "August 02, 2026"
   },
   {
      id: 3,
      slug: "first-day-junior-year",
      title: "First Day This Semester And My First Lecture Was Cancelled Unannounced",
      tags: ["University", "School"],
      excerpt: `Today I woke up early to prepare for my first day in class (it's a single lecture), 
               only to find out that the lecture was cancelled abruptly due being "sacrificed to...`,
      content: `Today I woke up early to prepare for my first day in class (it's a single lecture), 
               only to find out that the lecture was cancelled abruptly due being "sacrificed to the academic gods" and 
               losing the scheduling battle. I wish they could've just announced it through email or class announcement,
               but hey, there's another problem! There isn't any online classroom or group even set up yet.
                              
               oh well, back to sleep ig.`,
      publishedAt: "August 03, 2026"
   },  
]
