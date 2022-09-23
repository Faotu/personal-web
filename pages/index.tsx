import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { type } from "os";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Experienced, PageInfo, Project, Skill, Social } from "../typings";
import { fetchSkills } from "../utils/fetchSkills";
// import {fectchExperience} from "../utils/fectchExperience";
// import {fetchPageInfo} from "../utils/fetchPageInfo";
// import { fetchProjects} from "../utils/fetchProjects";
// import {fetchSocial} from "../utils/fetchSocial"
import TestProject from "../components/Projects copy";

type Props = {
  // pageInfo: PageInfo;
  // experience: Experienced;
  // skills: Skill[];
  // projects: Project[];
  // socials: Social[];
}
// put above variables in the empty {} for the props
const Home = ({}: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFABE1]/80"
    >
      <Head>
        <title>Faotu Happy</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>


      {/* contact me Section */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 cursor-pointer ">
          <div className="flex items-center justify-center">
            <img 
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src="https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/279421231_4517021521731067_1900675327668116142_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GdzAKXb4EuYAX_sJ_4u&_nc_ht=scontent-los2-1.xx&oh=00_AT_33MHalxIJE9adx1OSQtHRE84t-292wr-R50XfzGr5rQ&oe=632F36BC" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;


// // export const getStaticProps: GetStaticProps<Props> = async () => {
// const pageInfo: PageInfo = await fetchPageInfo();
// const experiences: Experienced[] = await  fectchExperience();
// const skills: Skill[] = await fetchSkills();
// const projects: Project[] = await fetchProjects();
// const socials: Social[] = await fetchSocial();

// return {
//   props: {
//     pageInfo,
//     experiences,
//     skills,
//     projects,
//     socials
//   }
// }

// // }