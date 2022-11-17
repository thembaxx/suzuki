const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] text-custom-secondary py-12 px-4 md:px-16 rounded-t-2xl">
      <h5 className="font-bold text-xs uppercase text-custom-tertiary">
        Get in touch
      </h5>
      <div className="flex flex-wrap mt-4 text-sm gap-20">
        <p>
          55 2nd Ave <br /> Kew <br /> Johannesburg <br /> 2090
        </p>
        <div className="flex flex-col flex-grow gap-1">
          <a href="tel:011">+27 (0) 11 887-5422</a>
          <a href="mailto:hello@heycarter.co.za">hello@heycarter.co.za</a>
        </div>
        <div className="text-[10px] font-medium uppercase">
          <div className="flex gap-2">
            <a href="#">Twitter</a>
            <span>/</span>
            <a href="#">Facebook</a>
            <span>/</span>
            <a href="#">LinkedIn</a>
          </div>
          <div className="mt-2 flex gap-2">
            <a href="#" style={{ textDecorationSkipInk: "all" }}>
              Privacy Policy
            </a>
            <span>/</span>
            <a href="#">Terms & Condtions</a>
          </div>
        </div>
      </div>
      <p className="mt-6 text-[#72806b] text-xs">
        <span className="font-medium text-custom-secondary">{`© ${new Date().getFullYear()}. HeyCarter Ltd. All rights reserved.`}</span>
        <br />
        <span className="inline-block mt-1 text-[10px]">
          HeyCarter Dealerships (Pty) Ltd is an Authorised Financial Services,
          Provider. FSP: 51498
        </span>
      </p>
    </div>
  );
};

export default Footer;
