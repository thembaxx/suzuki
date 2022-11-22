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
    <div className="border-b pt-4">
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

const Content = ({ ...data }) => {
  return (
    <div className="w-full">
      <div className="px-0 py-2">
        <h4 className="text-[11px] uppercase font-semibold">key metrics</h4>
        <Metrics {...data} />
      </div>
    </div>
  );
};

export default Content;
