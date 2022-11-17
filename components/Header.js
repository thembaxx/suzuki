import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="flex py-2 px-6 sticky top-0 justify-end text-xs text-teal-600 font-medium">
      <a className="flex align-middle mr-5 " href="tel:0123456789">
        <PhoneIcon className="h-4 mr-2" />
        <p>+27 12 456 7890</p>
      </a>
      <a className="flex align-middle" href="mailto:hello@heycarter.co.za">
        <EnvelopeIcon className="h-4 mr-2" />
        <p>hello@heycarter.co.za</p>
      </a>
    </div>
  );
};

export default Header;
