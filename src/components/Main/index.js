import React from "react"

import MainHead from "./MainHead"
import NavRight from "./NavRight"
import Footer from "./Footer"

function Main({ children, mainHeadData }) {
  return (
    <section className={"Main-class"}>
      <div className={`main-container`}>
        <main className={`main`}>
          <MainHead mainHeadData={mainHeadData} />
          {children}
        </main>
        <NavRight />
      </div>
      <Footer />
    </section>
  )
}

export default Main
