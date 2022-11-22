import Image from "next/image";
import requests from "../../../../services/api/requests";
import { capitalizeStr } from "../../../../utitlities/capitalizeStr";

import Chip from "../../../../components/Chip";

const fetchCar = async (modelID) => {
  const resp = await requests.getCar(modelID);
  return resp;
};

const Metric = ({ value, unit, label }) => {
  return (
    <div>
      <p className="inline-block">
        <span className="text-2xl">{value}</span>{" "}
        <span className="text-sm">{unit}</span>
      </p>
      <p className="text-[10px]">{label}</p>
    </div>
  );
};

const Header = ({ range, model }) => {
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

  return (
    <div>
      <div className="aspect-w-2 aspect-h-1 bg-gray-200 w-full relative rounded-t-xl overflow-hidden">
        <Image src={picture} alt="" fill style={{ objectFit: "cover" }} />
      </div>

      <div className="p-6 ">
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

const Metrics = ({ model }) => {
  const specifications = model?.specifications;

  const performance = specifications?.performance;
  const zeroToHundred =
    performance?.find(({ key }) => key?.toLowerCase().includes("acceleration"))
      ?.value ?? 0;

  const maximumPower =
    performance?.find(({ key }) => key?.toLowerCase().includes("power maximum"))
      ?.value ?? 0;

  const maximumTorque =
    performance?.find(({ key }) =>
      key?.toLowerCase().includes("torque maximum")
    )?.value ?? 0;

  return (
    <div className="flex items-center justify-between py-4 gap-4 border-b">
      <Metric value={parseFloat(zeroToHundred)} unit="sec" label="0-100 km/h" />
      <div className="bg-gray-300 h-6 w-[1px]"></div>
      <Metric
        value={parseFloat(maximumPower)}
        unit="kW"
        label="Maximum power"
      />
      <div className="bg-gray-300 h-6 w-[1px]"></div>
      <Metric
        value={parseFloat(maximumTorque)}
        unit="Nm"
        label="Maximum torque"
      />
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
    <div className="pb-6">
      <Header {...data} />
      <div className="w-full px-6 py-4">
        <h4 className="text-[11px] uppercase font-semibold">key metrics</h4>
        <Metrics {...data} />
      </div>
    </div>
  );
};

export default Page;
