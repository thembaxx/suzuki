import requests from "../../services/api/requests";
import formatPhoneNumber from "../../utitlities/formatPhoneNumber";
import Image from "next/image";
import Card from "./Card";

const Page = async () => {
  const resp = await requests.getDealerships();
  const data = resp?.Brands;
  //   data = resp?.Brands?.filter(({ brandName }) => {
  //     brandName?.toLowerCase().includes("suzuki");
  //   });

  let dealerships = [];
  data?.forEach((dealership) => {
    dealerships.push(...dealership.carterDealers);
  });

  return (
    <div className="flex flex-col py-3 w-full">
      <div className="flex flex-col justify-center mb-6 px-6">
        <h3 className="font-semibold text-lg">Dealerships</h3>
        <p className="text-sm font-medium">
          Suzuki dealerships {`(${dealerships?.length ?? 0})`}
        </p>
      </div>
      <ul className="bg-gray-100 py-6 px-6 flex flex-wrap w-full gap-6">
        {dealerships?.map((dealership, i) => (
          <div key={i} className="md:w-[350px] w-full">
            <Card {...dealership} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Page;
