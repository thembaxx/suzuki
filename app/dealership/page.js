import requests from "../../services/api/requests";
import formatPhoneNumber from "../../utitlities/formatPhoneNumber";

const Card = ({
  dealerID,
  brandID,
  brand,
  dealershipName,
  company,
  dealerAddress,
  area,
  dealerRegion,
  googleMapEmbed,
  dealerPrincipal,
  officePhone,
  email,
  dealerLogo,
}) => {
  return (
    <div className="bg-white shadow-sm rounded-md w-full">
      <div className="p-4">
        <p className="text-[12px]">{`${dealerRegion ?? "Unknown"} ${
          area ?? "Unknown"
        }`}</p>
        <h3>{dealershipName ?? "Unknown"}</h3>
        <p className="text-[12px] font-medium text-custom-tertiary">{`${
          dealerAddress ?? "Unknown"
        }`}</p>
        <div className="flex flex-wrap text-[13px] mt-2 gap-4">
          <a href={`tel:${officePhone}`}>{formatPhoneNumber(officePhone)}</a>
          <div>/</div>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
      <iframe className="w-full" src={googleMapEmbed} />
      <div className="flex items-center gap-2 text-[13px] font-medium py-3 px-3">
        <button className="flex-grow flex-shrink-0 bg-custom-primary rounded-md text-white py-2">
          Book a Service
        </button>
        <button className="flex-grow flex-shrink-0 border rounded-md py-2">
          Contact us
        </button>
      </div>
    </div>
  );
};

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
        <h3 className="font-semibold text-lg">Our dealerships</h3>
        <p className="text-sm font-medium">
          Suzuki dealerships {`(${dealerships?.length ?? 0})`}
        </p>
      </div>
      <ul className="bg-gray-50 py-6 px-6 flex flex-wrap w-full gap-4">
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
