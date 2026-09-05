import BouncyBox from "../components/ui/BouncyBox"
import { ArrowUpRight } from 'lucide-react';

const Work = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-20 py-8">
        <BouncyBox>
          {/* heading */}
          <div className="font-semibold text-4xl mb-8">
            <p className="mb-4">Work</p>
            <p className="font-normal text-sm text-white/50">List of some projects and contributions i've made.</p>
          </div>
          {/* main content */}
          <div className="text-lg font-bold">
            {/* Contributions Section */}
            <div className="mb-12">
              <h2 className="pb-4">Contributions</h2>
              <ul className="text-gray-300 hover:underline">
                <li>
                  <a
                    href="https://premid.app/library/witch%20cult%20translations"
                    className="inline-flex hover:text-emerald-400 transition-all"
                  >
                    PreMiD
                    <ArrowUpRight className="mt-[0.150rem] w-4"/>
                  </a>
                </li>
              </ul>
            </div>

            {/* Projects Section */}
            <div className="my-12">
              <h2 className="pb-4">Projects</h2>
              <ul className="text-gray-300 hover:underline">
                <li>
                  <a
                    href="https://github.com/randomchaffee/resinly"
                    className="inline-flex hover:text-emerald-400 transition-all"
                  >
                    Resinly
                    <ArrowUpRight className="mt-[0.150rem] w-4"/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/randomchaffee/mygrad"
                    className="inline-flex hover:text-emerald-400 transition-all"
                  >
                    mygrad
                    <ArrowUpRight className="mt-[0.150rem] w-4"/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/randomchaffee/evangregorio.me"
                    className="inline-flex hover:text-emerald-400 transition-all"
                  >
                    evangregorio.me (self-hosted web platform)
                    <ArrowUpRight className="mt-[0.150rem] w-4"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-12 font-normal">
                <p className="text-lg text-white/60">
                  See more of my work on{' '}
                  <a href="https://github.com/randomchaffee" className="font-bold text-emerald-400 hover:underline">GitHub</a>
                  <span className='absolute left-0 -bottom-1 w-0 h-0.5 rounded-xl
                bg-white transition-all duration-300 group-hover:w-full'
                  >
                  </span>
                  {'.'}
                </p>
            </div>
        </BouncyBox>
    </div>
  )
}

export default Work