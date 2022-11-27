import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/hero.png";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-full md:aspect-w-2 md:aspect-h-1 bg-gray-300 rounded-tl-2xl rounded-tr-2xl overflow-hidden">
          <Image src={HeroImage} alt="" />
        </div>
        <div className="absolute bottom-0 md:top-0 right-0 m-2 hidden md:block md:m-14 text-white">
          <h2 className="uppercase font-black mb-3 text-xl md:text-3xl">
            Suzuki Jimny
          </h2>
          <p className="text-l">
            Practical & affordable 4X4 <br /> that’s lots of fun to drive.
          </p>
          <div className="flex items-center md:mt-8 gap-6">
            <p className="text-xs">
              <span>From</span> <span className="font-bold">R 307 900</span>{" "}
              <span className="font-bold text-red-600 ml-1">*</span>
            </p>
            <Link
              className="text-[10px] font-semibold uppercase rounded-full px-5 py-3 text-white bg-custom-tertiary"
              href={`/range/Jimny`}
              passHref
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-4 my-6 md:hidden md:m-14">
        <h2 className="uppercase font-black mb-3 text-xl md:text-3xl">
          Suzuki Jimny
        </h2>
        <p className="text-l">
          Practical & affordable 4X4 <br /> that’s lots of fun to drive.
        </p>
        <div className="flex items-center mt-8 gap-6">
          <p className="text-xs">
            <span>From</span> <span className="font-bold">R 307 900</span>{" "}
            <span className="font-bold text-red-600 ml-1">*</span>
          </p>
          <Link
            className="text-[10px] font-semibold uppercase rounded-full px-5 py-3 text-white bg-custom-tertiary tracking-wider"
            href={`/range/Jimny`}
            passHref
          >
            Learn more
          </Link>
          {/* <button className="text-[10px] font-semibold uppercase rounded-full px-5 py-3 text-white bg-custom-secondary">
            Learn more
          </button> */}
        </div>
      </div>
      <div className="bg-primary px-12 py-8 text-white bg-custom-primary">
        <h1 className="text-sm md:text-2xl font-black text-center uppercase mb-3">
          Suzuki Rosebank!
        </h1>

        <div className="flex text-sm justify-center">
          <p className="max-w-[750px] text-center font-medium">
            <span>
              Welcome to Suzuki Rosebank. Expect to be delighted by our new
              Suzuki range and quality vehicles.
            </span>{" "}
            <span className="hidden md:inline">
              Experience our quality service, as well as free advice and
              assistance with all your motoring needs. Come and visit our
              dealership, meet our team and enjoy our warm hospitality.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
