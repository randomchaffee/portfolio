import type { PostItem } from "../types/portfolio";
// NOTES: use \n\n for setting a new paragraph

export const BLOG_POSTS: PostItem[] = [
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
                              
               \n\noh well, I'm running back to my dorm room.`,
      publishedAt: "August 03, 2026"
   },  
         {
      id: 2,
      slug: "experience-with-ai-dependency",
      title: "My Dreaded Experience with AI Dependency as a CS Student",
      tags: ["Self Reflection", "AI"],
      excerpt: `I started my previous portfolio project around 5 months ago. My first commit was deploying a
               GET request method I made using FastAPI, which just returned "Hello from FastAPI on AWS!".
               Initially, I was just planning on learning how to deploy software on a cloud platform
               (in this case, Amazon Web Services). That moment was the first time I was exposed to 
               actual cloud infrastructure...`,
      coverImage: {
         url: "/images/blog/despair.png",
         alt: "Visual Realization",
         caption: "actual moment of realization",
      },
      images: {
         "image:1": {
            url: "/images/blog/nginx.png",
            alt: "nginx config on a terminal",
            caption: "what writing on a VPS looks like",
         },
         "image:2": {
            url: "/images/blog/despair.png",
            alt: "Visual Realization",
            caption: "actual moment of realization",
         },
      },
      content: `I started my previous portfolio project around 5 months ago. My first commit was deploying a
               GET request method I made using FastAPI, which just returned "Hello from FastAPI on AWS!".
               Initially, I was just planning on learning how to deploy software on a cloud platform
               (in this case, Amazon Web Services). That moment was the first time I was exposed to 
               actual cloud infrastructure.
               
               \n\nimage:1
               
               \n\nEventually, I started experimenting with more things (I felt like a mysterious aura farming
               god programmer lmao, courtesy of having only a soulless linux terminal as the primary way to
               communicate with the EC2 instance). I learned how to build images and run containers on Docker,
               configure user perms on linux, practice linux commands, setup nginx configs, installing SSL/TLS 
               certs for my sites, and some other things. 
               
               \n\nAt the time, I was really proud and feeling like I was being productive,
               but very soon I actually realized I relied so much on AI for building it that
               many of the concepts. It started simple, like asking agents to generate CSS for me. CSS, in particular
               was such a rollercoaster for me. At first, I considered it as simple markup that just added design to 
               the website, which I scoffed off as too insignificant to learn. It's a different situation now though
               (I'm now actively learning Tailwind and proper layout design).
               
               \n\nimage:2
               \n\nEventually it ramped up to more important like letting AI how to set up complex nginx configs, 
               creating a docker-compose script, and even creating FastAPI backend endpoints, which degraded my learning so much
               that I realized that if I didn't have any agent to ask, I wouldn't know where to start. Eventually I was
               adding things I actually just followed based on what the AI instructed, but didn't understand. 
               If I were told to recreate those today without outside help, would I actually know how?
               I didn't think much of it then but now I know I wouldn't be able to. 
               I'd know the concepts, like why I used those tools and such, but not the how. 
               
               \n\nWhat qualifies you as knowing or being skilled at something, really? Even now it's still a question
               I often ask myself.`,
      publishedAt: "August 02, 2026"
   },
]
