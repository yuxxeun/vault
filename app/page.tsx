import Image from "next/image";
import { Fragment } from "react";
import { Suspense } from "react";
import { Footer } from "@/components/widgets/Footer";

export default async function Home() {
  return (
    <Fragment>
      <Suspense>
        <div>hello</div>
        <Footer />
      </Suspense>
    </Fragment>
  );
}
