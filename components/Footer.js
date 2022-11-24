import Link from "next/link";

const Footer = ({ address, contactNumber, email, social }) => {
  return (
    <div className="bg-[#F7F7F7] text-custom-secondary py-12 px-4 md:px-16 rounded-t-2xl">
      <h5 className="font-bold text-[10px] uppercase text-custom-tertiary">
        Get in touch
      </h5>
      <div className="flex flex-wrap mt-4 text-sm gap-8 md:gap-20">
        <p>
          <span>{address.province}</span>
          <br />
          <span>{address.street}</span>
          <br />
          <span>
            {address.city}, {address.postalCode}
          </span>
          <span></span>
        </p>
        <div className="flex flex-col flex-grow gap-1">
          {/* <a href={`tel:${contactNumber}`}>{contactNumber}</a> */}
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="text-[10px] font-medium uppercase">
          <div className="flex gap-2">
            {social.map(({ name, link }, i, { length }) => (
              <span key={name}>
                <a href={link} target="_blank" rel="noreferrer">
                  {name}
                </a>
                {i + 1 !== length && <span className="ml-2">/</span>}
              </span>
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            <Link href="/privacy" style={{ textDecorationSkipInk: "all" }}>
              Privacy Policy
            </Link>
            <span>/</span>
            <Link href="/terms">Terms & Condtions</Link>
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
