import LeadForm from "../../components/LeadForm";
import company from "../../data/company.json";
import leadFormType from "../../data/leadFormType";

const Details = () => {
  return (
    <div className="text-sm">
      <h3 className="font-semibold text-base">{company.address.province}</h3>
      <p>{company.address.street}</p>
      <p>{`${company.address.city}, ${company.address.postalCode}`}</p>
      <div className="py-4">
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-16 px-6 pb-16 pt-6">
      <div className="flex flex-col flex-grow md:items-center">
        <div className="md:max-w-[600px] w-full">
          <div className="mb-12 w-full">
            <h3 className="font-semibold text-lg">Contact us</h3>
            <p className="text-xs font-medium mt-1">
              Our friendly team would love to here from you!
            </p>
          </div>
          {/* <Form /> */}
          <LeadForm isEnquiry={true} type={leadFormType.contact} />
        </div>
      </div>
      <div className="w-[300px]">
        <Details />
      </div>
    </div>
  );
};

export default page;
