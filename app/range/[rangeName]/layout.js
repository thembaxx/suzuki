import { Suspense } from "react";
import Loading from "./loading";

const RangeLayout = ({ children }) => {
  return (
    <section className="flex flex-col">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
};

export default RangeLayout;
