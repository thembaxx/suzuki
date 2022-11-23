import requests from "../../../../services/api/requests";
import { capitalizeStr } from "../../../../utitlities/capitalizeStr";
// @refresh reset

import Chip from "../../../../components/Chip";
import Content from "./Content";
import Form from "./Form";
import Carousel from "../../../../components/Carousel";

const fetchCar = async (modelID) => {
  const resp = await requests.getCar(modelID);
  return resp;
};

const Header = ({ range, model, ...data }) => {
  const pricing = model?.pricing;
  const priceInclVAT = pricing?.listPriceIncl;
  const monthlyEstimate = pricing?.estimatedMonthly ?? 0;

  const picture =
    model?.pictures[0]?.pictureWebPURL ?? model?.pictures[0]?.pictureNormalURL;

  const fuel = model?.specifications?.engine?.find(
    (engine) => engine?.key?.toLowerCase() === "fuel type"
  )?.value;

  const transmission = model?.specifications?.drive?.find(
    (drive) => drive?.key?.toLowerCase() === "gearshift"
  )?.value;

  const images = model?.pictures?.map(({ pictureWebPURL }) => pictureWebPURL);

  return (
    <div>
      <Carousel items={images} />
      {/* <div className="aspect-w-2 aspect-h-1 bg-gray-200 w-full relative rounded-t-xl overflow-hidden md:rounded-none">
        <Image src={picture} alt="" fill style={{ objectFit: "cover" }} />
      </div> */}

      <div className="p-4">
        <div>
          <h3 className="font-semibold text-lg">
            {`Suzuki ${range?.rangeName}`}
          </h3>
          <p className="text-sm font-medium">{model?.modelName}</p>
          {fuel && transmission && (
            <div className="flex gap-2 mt-3">
              {fuel && <Chip label={capitalizeStr(fuel)} />}
              {transmission && <Chip label={capitalizeStr(transmission)} />}
            </div>
          )}
          <div className="p-3 mt-6 border border-gray-200 rounded-sm">
            <h4 className="text-[11px] uppercase font-semibold">Pricing</h4>
            <h3 className="my-3 text-xl">
              <span className="font-semibold">{`R ${parseInt(
                monthlyEstimate
              ).toLocaleString("en-ZA")}`}</span>{" "}
              <span className="text-base">pm</span>
              <br className="py-2" />
              <span className="font-medium text-sm">
                <span className="font-normal">or</span>{" "}
                <span>{`R ${priceInclVAT.toLocaleString("en-ZA")}`}</span>{" "}
                <span className="text-xs">cash price</span>
                <span className="text-red-500">*</span>
              </span>
            </h3>
            <p className="text-[10px]">
              <span className="text-red-500 font-bold">*</span>{" "}
              <span>Prices include VAT. Terms & Conditions apply.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page = async ({ params }) => {
  const { modelID } = params;
  const data = await fetchCar(modelID);
  let model;
  if (data) {
    model = data?.model;
  }

  return (
    <div className="flex flex-col lg:flex-row relative">
      <div className="lg:sticky lg:top-24 lg:h-full lg:w-[360px]">
        <Header {...data} />
      </div>

      <div className="border-l border-r flex-grow mb-8">
        <Content {...data} />
      </div>

      <div className="bg-[#fafafa] flex flex-col 2xl:h-screen md:max-w-[320px] px-4 py-4 lg:sticky lg:top-24">
        <div className=" rounded-lg xl:h-full">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold">Enquire</h1>
            <p className="text-xs font-medium mt-2">
              If you are interested in this vehicle and would like our team to
              contact you, please fill out your contact information below
            </p>
          </div>
          <div className="flex-grow">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
