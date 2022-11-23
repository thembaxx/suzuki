import Link from "next/link";
import Image from "next/image";

const Item = ({ pictures, range, min_price, min_price_monthly }) => {
  return (
    <div className=" border-gray-200 border rounded-lg overflow-hidden">
      <div className=" bg-gray-200 relative w-[340px] h-[180px]">
        <Image
          src={pictures[0]?.pictureWebPURL ?? pictures[0]?.pictureNormalURL}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="py-4 px-3">
        <h3 className="font-semibold text-lg mb-1">{range}</h3>
        <p className="text-sm mb-3">
          <span>From</span>{" "}
          <span className="font-bold">{`R ${parseInt(
            min_price_monthly
          ).toLocaleString("en-ZA")}`}</span>{" "}
          <span>pm</span> <span>or</span>{" "}
          <span className="font-bold">{`R ${min_price.toLocaleString(
            "en-ZA"
          )}`}</span>{" "}
          <span className="text-red-500 font-bold">*</span>
        </p>
        <div className="text-sm font-medium underline-offset-2 underline">
          Learn more
        </div>
      </div>
    </div>
  );
};

const Content = ({ items }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-extrabold text-center">Vehicles</h1>
        <p className="text-center text-sm font-medium">
          {items?.length} vehicles in stock
        </p>
      </div>
      <div className="flex justify-center flex-wrap xl:max-w-[1200px] gap-6">
        {items?.map((item, i) => (
          <Link key={i} href={`/range/${item?.range}`} passHref>
            <Item {...item} />
          </Link>
        ))}
      </div>
      <p className="mt-12 text-[10px]">
        <span className="text-red-500 font-bold">*</span>{" "}
        <span>
          Prices may vary from quoted amount. Terms & Conditions apply.
        </span>
      </p>
    </div>
  );
};

export default Content;
