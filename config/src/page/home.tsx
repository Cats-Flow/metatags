import React from "react";
import { Header } from "../contents/header";
import { Footer } from "../contents/footer";
import { MetaTagGenerator } from "../contents/geratortags";
import PreviewTags from "../contents/previewtag";

export function Home() {
  return (
    <>
      <Header />
      <main className="_main">
        <MetaTagGenerator  />
        <PreviewTags />
      </main>
      <Footer />
    </>
  );
}
