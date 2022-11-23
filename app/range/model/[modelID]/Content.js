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
    <div className="pt-4">
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
      <p className="text-[10px] mb-2">
        <span className="text-red-500 font-bold">*</span>{" "}
        <span>Provided values are only average estimates. E & OE.</span>
      </p>
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

const Section = ({ title, data }) => {
  return (
    <div className="max-w-[500px] px-6 mt-8">
      <h4 className="text-[11px] uppercase font-semibold mb-2">{title}</h4>
      <ul>
        {data?.map(({ key, value }) => (
          <Property
            key={key}
            label={key}
            value={value === "std" ? "Standard" : value}
          />
        ))}
      </ul>
    </div>
  );
};

const Content = ({ ...data }) => {
  return (
    <div className="w-full relative">
      <div className="bg-white border-t sticky top-24 py-4 px-6">
        <h3 className="font-normal text-2xl">Overview</h3>
      </div>
      <div className="py-2 px-6">
        <h4 className="text-[11px] uppercase font-semibold">key metrics</h4>
        <Metrics {...data} />
      </div>
      <Section title="Safety" data={data?.model?.specifications?.safety} />
      <Section
        title="Enviromental"
        data={data?.model?.specifications?.environmental}
      />
      <Section title="Enviromental" data={data?.model?.specifications?.drive} />
    </div>
  );
};

export default Content;
