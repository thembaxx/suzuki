"use client";
import Image from "next/image";
import formatPhoneNumber from "../../utitlities/formatPhoneNumber";
import Link from "Next/Link";

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
        <div className="flex">
          <div className="flex-grow">
            <p className="text-[12px]">{`${dealerRegion ?? "Unknown"} ${
              area ?? "Unknown"
            }`}</p>
            <h3>{dealershipName ?? "Unknown"}</h3>
            <p className="text-[12px] font-medium text-custom-tertiary">{`${
              dealerAddress ?? "Unknown"
            }`}</p>
          </div>
          <div className="flex items-center justify-center h-8 w-8 overflow-hidden rounded-full">
            {dealerLogo && (
              <Image
                src={dealerLogo ?? ""}
                height={24}
                width={24}
                alt=""
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </div>
        <div className="flex flex-wrap text-[13px] mt-2 gap-2">
          <a href={`tel:${officePhone}`}>{formatPhoneNumber(officePhone)}</a>
          <div>/</div>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
      <div className="bg-gray-200 w-full relative">
        <iframe className="w-full" src={googleMapEmbed} />
      </div>
      <div className="flex items-center gap-2 text-[13px] font-medium py-3 px-3">
        <button className="flex-grow flex-shrink-0 bg-custom-primary rounded-md text-white py-2">
          Book a Service
        </button>
        <Link
          href="/contact"
          className="flex-grow flex-shrink-0 border rounded-md py-2"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Card;
