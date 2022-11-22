import { Suspense } from "react";
import Loading from "./loading";

const RangeLayout = ({ children }) => {
  return (
    <section>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
};

export default RangeLayout;
