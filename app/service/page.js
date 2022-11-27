import LeadForm from "../../components/LeadForm";
import leadFormType from "../../data/leadFormType";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-center">
      <div className="max-w-[300px] px-6">
        <h2 className="text-2xl mb-2 font-semibold">Service appointment</h2>
        <p className="text-xs">
          Make a service appointment to keep your car running smoothly and at
          its full potential.
        </p>
      </div>
      <div className="flex-grow flex justify-center mt-10 p-6">
        <div className="max-w-[600px]">
          <LeadForm type={leadFormType.bookService} />
        </div>
      </div>
    </div>
  );
};

export default page;
