const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] text-custom-secondary py-12 px-16">
      <h5 className="font-bold text-xs uppercase text-custom-tertiary">
        Get in touch
      </h5>
      <div className="flex flex-wrap mt-4 text-sm gap-20">
        <p>
          55 2nd Ave <br /> Kew <br /> Johannesburg <br /> 2090
        </p>
        <div className="flex flex-col flex-grow">
          <a href="tel:011">+27 (0) 11 887-5422</a>
          <a href="mailto:hello@heycarter.co.za">hello@heycarter.co.za</a>
        </div>
        <div className="text-xs font-medium">
          <div>
            <a className="mr-3" href="#">
              Twitter
            </a>
            <a className="mr-3" href="#">
              Facebook
            </a>
            <a className="mr-3" href="#">
              LinkedIn
            </a>
          </div>
          <div className="mt-2">
            <a className="mr-3" href="#">
              Privacy Policy
            </a>
            <a className="mr-3" href="#">
              Terms & Condtions
            </a>
          </div>
        </div>
      </div>
      <p className="mt-6 text-gray-500 text-xs">
        <span>{`© ${new Date().getFullYear()}. HeyCarter Ltd. All rights reserved.`}</span>
        <br />
        <span>
          HeyCarter Dealerships (Pty) Ltd is an Authorised Financial Services,
          Provider. FSP: 51498
        </span>
      </p>
    </div>
  );
};

export default Footer;
