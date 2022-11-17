import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const items = [
  {
    title: "Vehicles",
    link: "#",
  },
  {
    title: "Parts & Services",
    link: "#",
  },
  {
    title: "Finance",
    link: "#",
  },
  {
    title: "Contact us",
    link: "#",
  },
];

const MenuItem = ({ title, link }) => {
  return (
    <div>
      <a className="inline-block px-7 py-3" href={link}>
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
        {items.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </div>

      <div className="px-7 py-6 pt-10">
        <h5 className="font-bold text-[10px] uppercase text-custom-tertiary">
          Get in touch
        </h5>
        <div className="flex flex-wrap mt-4 text-sm gap-10">
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
      </div>
    </animated.div>
  );
};

export default Menu;
