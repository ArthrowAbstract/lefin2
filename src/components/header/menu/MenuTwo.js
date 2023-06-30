import React from "react";
import Link from "next/link";

import Container from "../../other/Container";
import Navigator from "../elements/Navigator";
import FunctionItems from "../elements/FunctionItems";
import MobileMenuOpener from "../elements/MobileMenuOpener";
import SearchForm from "../elements/SearchForm";

export default function MenuTwo({ containerFluid }) {
  return (
    <div className="menu -style-two">
      <Container fluid={containerFluid}>
        <div className="menu-wrapper">
          <MobileMenuOpener />
          <Link className="menu-logo" href="/">
              <img
                src="/assets/images/logo.png"
                alt="Lefin logo"
              />
          </Link>
          <SearchForm enterButton={<i className="icon_search" />} />
          <Navigator />
          <FunctionItems />
        </div>
      </Container>
    </div>
  );
}
