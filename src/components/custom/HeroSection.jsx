import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-9 mx-56">
      <h1 className="text-[50px] font-bold text-center mt-16">
        <span className="text-[#f56551]">Unlock Your Ultimate Adventure with Tour Titan </span> - Your Personal AI Travel
        Guide!
      </h1>
      <p className="text-xl text-gray-500 text-center">Seamlessly plan, customize, and embark on unforgettable journeys with Tour Titan.<br />Discover the world with confidence and ease!</p>
      <Button className="flex gap-4 p-6 text-lg ">Get Started <ArrowRight /> </Button>
    </div>
  );
};

export default HeroSection;
