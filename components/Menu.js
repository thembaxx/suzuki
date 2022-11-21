import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import company from "../data/company.json";
import menuItems from "../data/menu.json";

const MenuItem = ({ title, route }) => {
  return (
    <div>
      <a className="inline-block px-7 py-3" href={route}>
        {title}
      </a>
    </div>
  );
};

const Menu = ({ menuOpen }) => {
  const [open, setOpen] = useState(false);

  // Disable body scrolling when the menu is opened
  if (menuOpen && typeof window != "undefined" && window.document) {
    document.body.style.overflow = "hidden";
  } else if (!menuOpen && typeof window != "undefined" && window.document) {
    document.body.style.overflowY = "auto";
  }

  const animProps = useSpring({
    onStart: () => menuOpen && setOpen(true),
    onRest: () => !menuOpen && setOpen(false),
    from: { opacity: 0, transform: "scale(0.7)" },
    to: {
      opacity: menuOpen ? 1 : 0,
      transform: menuOpen ? "translateY(111px)" : "translateY(178px)",
    },

    config: { mass: 2, tension: 350, friction: 40 },
  });

  return (
    <animated.div
      className="md:hidden flex flex-col fixed top-0 left-0 translate-y-[30px] h-screen w-full bg-white z-50"
      style={{ ...animProps, display: open ? "flex" : "none" }}
    >
      <div className="w-full ">
        {menuItems.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </div>

      <div className="px-7 py-6 pt-10">
        <h5 className="font-bold text-[10px] uppercase text-custom-tertiary">
          Get in touch
        </h5>
        <div className="flex flex-wrap mt-3 text-sm gap-10">
          <div className="text-sm">
            <h3 className="font-semibold text-base">
              {company.address.province}
            </h3>
            <p>{company.address.street}</p>
            <p>{`${company.address.city}, ${company.address.postalCode}`}</p>
            <div className="py-4">
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </div>
          <div className="text-[10px] font-medium uppercase">
            <div className="flex gap-2">
              {company.social.map(({ name, link }, i, { length }) => (
                <span key={name}>
                  <a href={link}>{name}</a>
                  {i + 1 !== length && <span className="ml-2">/</span>}
                </span>
              ))}
            </div>
            <div className="mt-2 flex gap-2">
              <a href="/privacy" style={{ textDecorationSkipInk: "all" }}>
                Privacy Policy
              </a>
              <span>/</span>
              <a href="#">Terms & Condtions</a>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Menu;
