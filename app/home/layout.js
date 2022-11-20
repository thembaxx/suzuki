import { Suspense } from "react";
import Loading from "./loading";

const HomeLayout = ({ children }) => {
  return (
    <section>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
};

export default HomeLayout;
