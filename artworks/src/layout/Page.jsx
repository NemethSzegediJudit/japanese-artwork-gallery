import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Page(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <main className="container">
        <h2 className="page-title">Az oldal címe</h2>
        {children}
      </main>
      <Footer />
    </>
  );
}
