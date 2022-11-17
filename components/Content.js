import { useState, useEffect } from "react";
import requests from "../services/api/requests";
import Image from "next/image";

const Item = ({ pictures, range, min_price, min_price_monthly }) => {
  return (
    <div className=" border-gray-700 rounded-xl overflow-hidden">
      <div className=" bg-gray-200">
        <Image
          src={pictures[0]?.pictureWebPURL ?? pictures[0]?.pictureNormalURL}
          alt=""
          width={360}
          height={240}
        />
      </div>
      <div className="py-4 px-2">
        <h3 className="font-bold text-xl mb-1">{range}</h3>
        <p className="text-xs">
          <span>From</span>{" "}
          <span className="font-bold">{`R ${min_price.toLocaleString(
            "en-ZA"
          )}`}</span>{" "}
          <span>or</span>{" "}
          <span className="font-bold">{`R ${Number(min_price_monthly)
            .toFixed(0)
            .toLocaleString("en-ZA")}`}</span>
        </p>
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
        <h1 className="text-3xl font-bold text-center">Vehicles</h1>
        <p className="text-center">23 vehicles in stock</p>
      </div>
      <div className="flex justify-center flex-wrap max-w-[900px] gap-6">
        {items.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
