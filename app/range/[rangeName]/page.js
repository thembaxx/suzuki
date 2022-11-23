import requests from "../../../services/api/requests";
import Chip from "../../../components/Chip";
import Link from "next/link";
import Image from "next/image";

import {
  ChevronRightIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import { capitalizeStr } from "../../../utitlities/capitalizeStr";
import Accordion from "../../../components/Accordion";

const fetchModels = async (rangeName) => {
  let data = {};
  const models = await requests.getModels(rangeName);
  // Sort by price ascending
  if (models && models.length > 0) {
    models.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
    });

    data = { models };

    const car = await requests.getCar(models[models.length - 1]?.model_ID);

    data.car = car;
  }
  return data;
};

const Card = ({
  rangeName,
  picture,
  brand,
  model,
  fuel,
  transmission,
  price,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm w-[300px]">
      <div className=" bg-gray-200 relative w-[300px] h-[150px]">
        <Image src={picture} alt="" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="px-4 py-4">
        <h3 className="text-xs">
          <span>{brand ?? "Suzuki"}</span>{" "}
          <span>{rangeName.replace("%20", " ")}</span>
        </h3>
        <p className="font-medium text-sm">
          <span>{model}</span>
        </p>
        <div className="flex gap-2 mt-3">
          <Chip label={capitalizeStr(fuel)} />
          <Chip label={capitalizeStr(transmission)} />
        </div>
        <p className="text-sm mt-3">
          <span>Starting from</span>{" "}
          <span className="font-bold">{`R ${parseInt(price).toLocaleString(
            "en-ZA"
          )}`}</span>{" "}
          <span className="text-red-500 font-bold">*</span>
        </p>
        <div className="flex items-center text-xs font-medium mt-4 -ml-1">
          <div className="flex items-center font-medium justify-center h-3 w-3 mr-1">
            <ChevronRightIcon />
          </div>
          <span>Show more</span>
        </div>
      </div>
    </div>
  );
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

const Property = ({ label, value }) => {
  return (
    <div className="flex justify-between text-[13px] py-2">
      <p>{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
};

const Sidebar = ({ data, fuel, transmission }) => {
  const specifications = data?.specifications;

  //#region performance
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
  //#endregion

  //#region Fuel Economy
  const fuelEconomy = specifications?.fuelEconomy;
  const fuelConsumption =
    fuelEconomy?.find(({ key }) =>
      key?.toLowerCase().includes("fuel consumption")
    )?.value ?? "Unknown";

  const emissions =
    fuelEconomy?.find(({ key }) => key?.toLowerCase().includes("emissions"))
      ?.value ?? "Unknown";
  //#endregion

  //#region dimensions
  const dimensions = specifications?.dimensions;
  const doors =
    dimensions?.find(({ key }) => key?.toLowerCase().includes("doors"))
      ?.value ?? "Unknown";

  const seats =
    dimensions?.find(({ key }) => key?.toLowerCase().includes("seats"))
      ?.value ?? "Unknown";

  const fuelTankCapacity =
    dimensions?.find(({ key }) =>
      key?.toLowerCase().includes("fuel tank capacity")
    )?.value ?? "Unknown";
  //#endregion

  //#region
  const maintenance = specifications?.maintenance;
  const warrantyYears = maintenance?.find(({ key }) =>
    key?.toLowerCase().includes("warranty time")
  )?.value;

  const warrantyDistance = maintenance?.find(({ key }) =>
    key?.toLowerCase().includes("warranty distance")
  )?.value;
  //#endregion

  return (
    <div className="w-[325px]">
      <div>
        <Accordion label="Perfomance">
          <div className="py-4">
            <div className="flex items-center gap-4 pb-6">
              <Metric
                value={parseFloat(zeroToHundred)}
                unit="sec"
                label="0-100 km/h"
              />
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
            <p className="text-[10px]">
              <span className="text-red-500 font-bold">*</span>{" "}
              <span>Provided values are only average estimates. E & OE.</span>
            </p>
          </div>
        </Accordion>
      </div>

      <div className="mt-2">
        <Accordion label="Specifications">
          <div>
            <div className="border-b py-4">
              <Property label="Fuel type" value={fuel ?? "Unknown"} />
              <Property label="Fuel capacity" value={fuelTankCapacity} />
              <Property label="Transmission" value={transmission} />
              <Property label="Doors" value={doors} />
              <Property label="Seats (quantity)" value={seats} />
              <Property label="Fuel consumption(avg)" value={fuelConsumption} />
              <Property label="CO2 emissions(avg)" value={emissions} />
            </div>
            {warrantyDistance && warrantyYears && (
              <div>
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-4 w-4 mr-2">
                    <WrenchScrewdriverIcon />
                  </div>
                  <p className="text-[13px] py-3">
                    <span>{`${warrantyYears}${
                      warrantyDistance &&
                      `/${
                        parseFloat(warrantyDistance)?.toLocaleString("en-ZA") +
                        " km"
                      } stardard warranty`
                    }`}</span>{" "}
                    <span className="text-red-500 font-bold">*</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </Accordion>
      </div>
    </div>
  );
};

const Page = async ({ params }) => {
  const { rangeName } = params;

  const resp = await fetchModels(rangeName);
  const data = resp?.models;
  const car = resp?.car;

  const model = car?.model;

  const picture =
    model?.pictures[0]?.pictureWebPURL ?? model?.pictures[0]?.pictureNormalURL;

  let transmissionSupport = data?.map(({ transmission }) =>
    capitalizeStr(transmission)
  );
  transmissionSupport = new Set(transmissionSupport);
  transmissionSupport = Array.from(transmissionSupport);
  transmissionSupport = transmissionSupport.join(", ");

  let fuelSupport = data?.map(({ fuel }) => capitalizeStr(fuel));
  fuelSupport = new Set(fuelSupport);
  fuelSupport = Array.from(fuelSupport);
  fuelSupport = fuelSupport.join(", ");

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row relative">
        <div className="bg-white px-6 md:px-6 py-4 md:sticky h-[100%] top-24">
          <div className="flex flex-col justify-center py-3 mb-6">
            <h3 className="font-semibold text-lg">
              Available Models {`(${data?.length ?? 0})`}
            </h3>
            <p className="text-sm font-medium">
              Suzuki {capitalizeStr(rangeName.replace("%20", " "))}
            </p>
          </div>
          <Sidebar
            data={model}
            fuel={fuelSupport}
            transmission={transmissionSupport}
          />
        </div>
        <div className="bg-gray-50 flex-grow flex items-center justify-center md:justify-start md:items-start gap-6 flex-wrap px-8 py-6 xl:max-w-[1200px]">
          {data?.map((item, i) => (
            <Link key={i} href={`/range/model/${item?.model_ID}`} passHref>
              <Card rangeName={rangeName} picture={picture} {...item} />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center py-8">
        <p className="text-[10px]">
          <span className="text-red-500 font-bold">*</span>{" "}
          <span>
            Prices may vary from quoted amount. Terms & Conditions apply.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Page;
