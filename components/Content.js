import { useState, useEffect } from "react";
import requests from "../services/api/requests";
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
        <p className="text-xs mb-3">
          <span>From</span>{" "}
          <span className="font-bold">{`R ${min_price.toLocaleString(
            "en-ZA"
          )}`}</span>{" "}
          <span>or</span>{" "}
          <span className="font-bold">{`R ${Number(min_price_monthly)
            .toFixed(0)
            .toLocaleString("en-ZA")}`}</span>
        </p>
        <a
          href="#"
          className="text-sm font-medium underline-offset-2 underline"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

const Content = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const resp = await requests.getCars();
      setItems(resp?.brandranges ?? []);

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="mb-16">
        <h1 className="text-3xl font-extrabold text-center">Vehicles</h1>
        <p className="text-center text-sm mt-1">23 vehicles in stock</p>
      </div>
      <div className="flex justify-center flex-wrap xl:max-w-[1200px] gap-6">
        {items.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
