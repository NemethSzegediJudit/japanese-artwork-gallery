import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Page(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <h2>Az oldal címe</h2>
      <main>{children}</main>
      <Footer />
    </>
  );
}
