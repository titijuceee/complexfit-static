import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import StickyHeader from "./modules/StickyHeader";

new MobileMenu();
new StickyHeader();

if (module.hot) {
  module.hot.accept();
}
