import React from "react";
import { Header } from "../contents/header";
import { Footer } from "../contents/footer";
import { MetaTagGenerator } from "../contents/geratortags";

export function Home() {
  return (
    <>
      <Header />
      <main className="_main">
        <MetaTagGenerator />
        <section className="_preview"></section>
      </main>
      <Footer />
    </>
  );
}
