import BouncyText from "./ui/BouncyText";
import { CircularAvatar } from "./ui/CircularAvatar";
import evanface from '../assets/anchovy.gif';
import github from '../assets/icon-github.png';
import discord from '../assets/icon-discord.png';
import linkedin from '../assets/icon-linkedin.png';
import email from '../assets/icon-email.png';
import { SubtleBounceText } from "./ui/SubtleBounceText";
import BouncyBox from "./ui/BouncyBox";
import { BouncyIcon } from "./ui/BouncyIcon";
import BouncingArrow from "./ui/BouncingArrow";

const Hero = () => {
    return (
        <section className="min-h-[calc(100svh-4rem)] max-w-7xl mx-auto px-6 md:px-0 py-8 flex flex-col justify-between">
            
            <div className="flex flex-col md:flex-row items-center justify-between md:pr-24 my-auto">
                {/* left side */}
                <div className="px-16 flex flex-col text-4xl font-normal">
                    <span className="pb-5">
                        <BouncyText text="Welcome to my site! I'm Evan," />
                    </span>
                    <span className="pb-4">
                        <BouncyText text="an aspiring SWE and CS student." delayOffset={1.2} />
                    </span>
                    <span className="text-lg font-light opacity-80">
                        <SubtleBounceText text="thank you for visiting! feel free to explore." delayOffset={2.9} />
                    </span>
                    <BouncyBox delayOffset={3}>
                        <ul className="mt-24 flex flex-row items-center gap-2">
                            <li>
                            <BouncyIcon
                            children={
                                <a
                                    href="https://github.com/randomchaffee"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center p-2 hover:bg-white/10 transition-colors"
                                >
                                    <img
                                    src={github}
                                    alt="GitHub"
                                    className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                </a>
                            }
                            delayOffset={3}
                            />
                            </li>
                            <li>
                            <BouncyIcon
                                children={
                                    <a
                                        href="https://discord.com/users/348028456723939329"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full flex items-center justify-center p-2 hover:bg-white/10 transition-colors"
                                    >
                                        <img
                                        src={discord}
                                        alt="Discord"
                                        className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                                        />
                                    </a>
                                }
                                delayOffset={3.1}
                            />
                            </li>
                            <li>
                            <BouncyIcon
                                children={
                                    <a
                                        href="https://www.linkedin.com/in/evangregorio/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full flex items-center justify-center p-2 hover:bg-white/10 transition-colors"
                                    >
                                        <img
                                        src={linkedin}
                                        alt="LinkedIn"
                                        className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                                        />
                                    </a>
                                }
                                delayOffset={3.2}
                            />
                            </li>
                            <li>
                            <BouncyIcon
                                children={
                                    <a
                                        href="mailto:evanngregorio@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full flex items-center justify-center p-2 hover:bg-white/10 transition-colors"
                                    >
                                        <img
                                        src={email}
                                        alt="Email"
                                        className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                                        />
                                    </a>
                                }
                                delayOffset={3.3}
                            />
                            </li>
                        </ul>
                    </BouncyBox>
                </div>

                {/* right side */}
                <div className="shrink-0 md:pr-5">
                    <CircularAvatar 
                        alt="Me"
                        src={evanface}
                        className="w-72 h-72"
                    />
                </div>
            </div>

            <div className="pt-8">
                <BouncyBox className="flex flex-col items-center justify-center gap-6 p-5 text-zinc-100">
                    {/* Quote Text */}
                    <p className="text-base md:text-sm opacity-70 tracking-tighter text-center font-normal">
                        Check out some of my stuff below. Site is still work-in-progress.
                    </p>
            
                    {/* Repeating Subtle Arrow */}
                    <BouncingArrow size={20} color="#d4d4d8" bounceHeight={8} duration={1} />
                </BouncyBox>
            </div>

        </section>
    )
}

export default Hero;