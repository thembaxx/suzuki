import Image from "next/image";
import HeroImage from "../public/hero.png";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-full aspect-w-2 aspect-h-1 bg-gray-300 rounded-tl-2xl rounded-tr-2xl overflow-hidden">
          <Image src={HeroImage} alt="" />
        </div>
        <div className="absolute top-0 right-0 m-14 text-white">
          <h2 className="uppercase font-black mb-3 text-3xl shadow-sm">
            Suzuki Jimny
          </h2>
          <p className="text-l">
            Practical & affordable 4X4 <br /> that’s lots of fun to drive.
          </p>
          <div className="flex items-center mt-8 gap-6">
            <p className="text-xs">
              <span>From</span> <span className="font-bold">R 262 900</span>{" "}
              <span className="font-bold text-red-600">*</span>
            </p>
            <button className="text-[11px] font-semibold uppercase rounded-full px-5 py-3 text-white bg-custom-secondary">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="bg-primary py-8 text-white bg-custom-primary">
        <h1 className="text-2xl font-black text-center uppercase mb-6">
          Welcome to Suzuki Rosebank!
        </h1>

        <div className="flex justify-center">
          <p className="max-w-[750px] text-center font-medium">
            Welcome to Suzuki Bramley. Expect to be delighted by our new Suzuki
            range and quality used vehicles . Experience our quality service, as
            well as free advice and assistance with all your motoring needs.
            Come and visit our dealership, meet our team and enjoy our warm
            hospitality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
