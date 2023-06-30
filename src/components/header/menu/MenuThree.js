import Link from "next/link";
import React from "react";

import Container from "../../other/Container";
import FunctionItems from "../elements/FunctionItems";
import MobileMenuOpener from "../elements/MobileMenuOpener";
import Navigator from "../elements/Navigator";
import SearchForm from "../elements/SearchForm";

export default function MenuThree() {
  return (
    <div className="menu -style-three">
      <Container>
        <div className="menu-wrapper">
          <MobileMenuOpener />
          <Link href="/" className="menu-logo">
            <img
              src="/assets/images/logo-white.png"
              alt="Lefin logo"
            />
          </Link>
          <Navigator />
          <SearchForm hideSelect enterButton={<i className="icon_search" />} />
          <FunctionItems hideWishlist hideTotal />
        </div>
      </Container>
    </div>
  );
}
