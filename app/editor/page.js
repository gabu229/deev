import { Suspense } from "react";

import Loading from "./loading";
import Editor from "@/components/Editor";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full mt-8 mb-8 fixed pb-5">
        <Editor />
      </div>
    </Suspense>
  );
}
