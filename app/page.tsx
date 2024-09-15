import HeroSection from "./Page Sections/HeroSection";
import PodcastCard from "./Page Sections/PodcastCard";
export default function Home() {
  return (
    <main className="">
      <HeroSection></HeroSection>
      {/* <div className="px-4 lg:px-10 py-10">
        <h1 className="text-white font-bold text-lg px-2">All Episodes</h1>
        <br></br>
        <div className="flex flex-col gap-10">
          <PodcastCard
            title="Joe Foster: Founding Reebok & Building a Globally Recognised Brand"
            description="Meet Joe Foster, founder of Reebok, who revolutionised the sportswear industry by building a multi-billion dollar shoe empire. In this episode, Joe recalls his earliest memories of war, shares stories of his grandfather the cobbler, and recounts founding Reebok as a competitor to his father's..."
            timeago="2 Days ago"
            length="1 hr 4 mins"
            number={13}
            image="/joe.webp"
            tags={["Business", "Entrepreneurship", "Sports"]}
          ></PodcastCard>
          <PodcastCard
            title="Ethan Donati: From Social Anxiety to Hosting the World's Top Speakers"
            description="In this episode, we sit down with Ethan Donati, a marketing expert who overcame social anxiety to host some of Australia's largest events. Ethan shares his journey from a shy individual to a prominent event organiser, detailing the challenges and strategies involved in bringing top speakers like Gary Vee and David Goggins to Australia..."
            timeago="10 Days ago"
            length="1 hr 30 mins"
            number={12}
            image="/ethan.jpg"
            tags={["Social Media", "David Goggins", "Gary Vee", "Kobe Bryant"]}
          ></PodcastCard>
          <PodcastCard
            title="Peter Vranes: Skincare, Smart Patches, Medtech, Innovation"
            description="Meet Peter Vranes, often likened to a modern-day Nikola Tesla in the realm of health technology. As the co-founder of Nutromics, he's engineering a smart patch biosensor that is revolutionising real-time health monitoring. Peter shares his journey, detailing his initial foray into the skincare industry before gradually shifting focus towards the forefront of medical technology, where he now aims to shape the future..."
            timeago="15 Days ago"
            length="1 hr 30 mins"
            number={11}
            image="/peter.jpg"
            tags={["Business", "MedTech", "Skincare", "Innovation"]}
          ></PodcastCard>{" "}
          <PodcastCard
            title="The Rivals Turned Partners: A Journey of Co-Founders"
            description="Learn about how our co-founders went from rivals to podcast partners in this exclusive episode! In this episode, we discuss the challenges and triumphs of building a podcast from the ground up, sharing insights into the world of entrepreneurship and the importance of collaboration..."
            timeago="20 Days ago"
            length="1 hr 20 mins"
            number={10}
            image="/hero.webp"
            tags={["Business", "MedTech", "Skincare", "Innovation", "Entrepreneurship"]}
          ></PodcastCard>{" "}
        </div>
      </div> */}
    </main>
  );
}
