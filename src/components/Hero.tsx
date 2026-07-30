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

const Hero = () => {
    return (
        <section className="relative md:pl-20 py-24 md:py-48 flex flex-col md:flex-row 
        items-center justify-between gap-10 max-w-7xl">
            {/* left side */}
            <div className="px-15 flex flex-col text-4xl font-normal">
                <span className="pb-5">
                    <BouncyText text="Welcome to my site! I'm Evan," />
                </span>
                <span className="pb-4">
                    <BouncyText text="a hobbyist dev and CS student." delayOffset={1.2} />
                </span>
                <span className="text-lg font-light opacity-80">
                    <SubtleBounceText text="this website is work in progress!" delayOffset={2.5} />
                </span>
                <BouncyBox delayOffset={2.6}>
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
                        delayOffset={2.6}
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
                            delayOffset={2.7}
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
                            delayOffset={2.8}
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
                            delayOffset={2.9}
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

        </section>
    )
}

export default Hero;
