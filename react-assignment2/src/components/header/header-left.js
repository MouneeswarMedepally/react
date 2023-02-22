import react from "react";
import logo from "./utils/edyoda-logo.PNG";
import { categoriesData } from "../../data";
import HeaderDropDown from "./header-dropdown";
import { BiChevronLeft } from "react-icons/bi";
import "./header.css";

class HeaderLeft extends react.Component {
  constructor() {
    super();
    this.state = { clicked: false };
    this.exploreCategoriesClick = this.exploreCategoriesClick.bind(this);
    this.globalClick = this.globalClick.bind(this);
  }
  globalClick(event) {
    if (this.state.clicked === true) {
      if (event.target.parentNode !== this.explCategories) {
        this.setState({ clicked: false });
      }
    }
  }
  exploreCategoriesClick(e) {
    this.state.clicked === false
      ? this.setState({ clicked: true })
      : this.setState({ clicked: false });
    document.addEventListener("click", this.globalClick);
  }
  render() {
    return (
      <div className="header-left-section">
        <div className="logo-div">
          <a className="logo-anchor" href="/">
            <img src={logo} alt="EDYODA LOGO"></img>
            <p className="stories-logo">Stories</p>
          </a>
        </div>
        <div
          className={"expl-categories"}
          ref={(ref) => (this.explCategories = ref)}
          onClick={this.exploreCategoriesClick}
        >
          <span className="expl-cat-text">Explore Categories</span>
          <BiChevronLeft
            className={
              this.state.clicked
                ? "expl-categories-svg expl-categories-svg-rotate"
                : "expl-categories-svg"
            }
          />
          {this.state.clicked && <HeaderDropDown data={categoriesData} />}
        </div>
      </div>
    );
  }
}

export default HeaderLeft;
