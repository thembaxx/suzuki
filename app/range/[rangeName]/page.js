import requests from "../../../services/api/requests";
import Chip from "../../../components/Chip";
import Link from "next/link";
import Image from "next/image";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { capitalizeStr } from "../../../utitlities/capitalizeStr";

const fetchModels = async (rangeName) => {
  const models = await requests.getModels(rangeName);
  const data = { models };
  if (models && models.length > 0) {
    const car = await requests.getCar(models[0]?.model_ID);
    data.car = car;
  }
  return data;
};

const Metric = ({ value, unit, label }) => {
  return (
    <div>
      <p>
        <span className="text-2xl">{value}</span>
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

const Sidebar = () => {
  return (
    <div className="w-[320px]">
      <h4 className="text-[11px] uppercase font-semibold">Perfomance</h4>
      <div className="flex items-center py-4 gap-4 border-b">
        <Metric value={10.6} unit="sec" label="0-100 km/h" />
        <div className="bg-gray-300 h-6 w-[1px]"></div>
        <Metric value={50} unit="kW" label="Maximum power" />
        <div className="bg-gray-300 h-6 w-[1px]"></div>
        <Metric value={6.2} unit="l/100 km" label="Fuel consumption" />
      </div>
      <div>
        <h4 className="text-[11px] uppercase font-semibold mt-6 mb-2">
          Specifications
        </h4>
        <div>
          <Property label="Fuel type" value="Petrol or Diesel" />
          <Property label="Fuel capacity" value="48 litre" />
          <Property label="Transmission" value="Petrol | Automatic" />
        </div>
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
  // {
  //     model_ID: 'SuzuJimn2e1',
  //     model: '1.5 GA AllGrip',
  //     crm_ID: '2562697000103733160',
  //     status: 'c',
  //     mmCode: '59004200',
  //     fuel: 'petrol',
  //     transmission: 'manual',
  //     price: '307900',
  //     price_ExVat: 267739.13,
  //     brand: null,
  //     range: null,
  //     introYear: null
  //   },

  const picture =
    model?.pictures[0]?.pictureWebPURL ?? model?.pictures[0]?.pictureNormalURL;

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row min-h-[300px] relative overflow-hidden">
        <div className="bg-white px-6 md:px-4 py-4 md:fixed top-24">
          <div className="flex flex-col justify-center py-3 mb-6">
            <h3 className="font-semibold text-lg">Available Models</h3>
            <p className="text-sm font-medium">
              Suzuki {capitalizeStr(rangeName)}
            </p>
          </div>
          <Sidebar />
        </div>
        <div className="bg-gray-50 flex gap-6 flex-wrap px-8 py-6 md:ml-[352px] xl:max-w-[1200px]">
          {data?.map(
            ({ brand, model, fuel, transmission, price, model_ID }, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-sm w-[300px]"
              >
                <div className=" bg-gray-200 relative w-[300px] h-[140px]">
                  <Image
                    src={picture}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="px-4 py-2">
                  <h3 className="text-xs">
                    <span>{brand ?? "Suzuki"}</span> <span>{rangeName}</span>
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
                    <span className="font-bold">{`R ${parseInt(
                      price
                    ).toLocaleString("en-ZA")}`}</span>{" "}
                    <span className="text-red-500 font-bold">*</span>
                  </p>
                  <Link
                    className="flex items-center text-xs font-medium mt-4 -ml-1"
                    href={`/model/${model_ID}`}
                    passHref
                  >
                    <div className="flex items-center font-medium justify-center h-3 w-3 mr-1">
                      <ChevronRightIcon />
                    </div>
                    <span>Show more</span>
                  </Link>
                </div>
              </div>
            )
          )}
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
