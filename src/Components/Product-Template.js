import "../styles/Products.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Items from "../Data/db.json";
const ProductTemplate = () => {
  const [Loading, setLoading] = useState(true);
  const [hideContentWhileLoading, setHideContentWhileLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setHideContentWhileLoading(true);
    }, 1000);
  }, []);

  const [Data, setData] = useState(Items);
  const numberOfItems = Data.length;

  const [searchBar, setSearchBar] = useState("");

  useEffect(() => {
    setData(
      Items.filter((datum) => {
        if (searchBar === " ") {
          return datum;
        } else if (datum.name.toLowerCase().includes(searchBar.toLowerCase())) {
          return datum;
        }
      })
    );
  }, [searchBar]);

  const [display, setDisplay] = useState(false);
  const displayList = () => {
    setDisplay(true);
  };
  const displayGrid = () => {
    setDisplay(false);
  };

  const sticky = useRef(null);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (sticky.current?.getBoundingClientRect().top <= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  const [dropDown, setDropDown] = useState(false);
  const DropDownContainer = () => {
    setDropDown(!dropDown);
  };

  const search = useRef(null);

  const All = () => {
    setData(Items);
    setDropDown(!dropDown);
    setSearchBar(" ");
  };

  const Office = () => {
    setData(Items.filter((item) => item.Category == "office"));
    setDropDown(!dropDown);
    setSearchBar(" ");
  };

  const LivingRoom = () => {
    setData(Items.filter((item) => item.Category == "livingroom"));
    setDropDown(!dropDown);
    setSearchBar(" ");
  };

  const Kitchen = () => {
    setData(Items.filter((item) => item.Category == "kitchen"));
    setDropDown(!dropDown);
    setSearchBar(" ");
  };

  const BedRoom = () => {
    setData(Items.filter((item) => item.Category == "bedroom"));
    setDropDown(!dropDown);
    setSearchBar(" ");
  };

  const Dining = () => {
    setData(Items.filter((item) => item.Category == "dining"));
    setDropDown(!dropDown);
    setSearchBar(" ");
  };

  const Kids = () => {
    setData(Items.filter((item) => item.Category == "kids"));
    setDropDown(!dropDown);
    setSearchBar(" ");
  };

  const sortBy = (e) => {
    setData(Items.sort((a, b) => a.e - b.e));
    console.log(e);
  };

  return (
    <div>
      {Loading && (
        <div className="LoadingOverlay">
          <div className="loadingBox">
            <div class="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
      {hideContentWhileLoading && (
        <section className="displayTemplate">
          <div className="product-select-section">
            <div className="mobile-dropDown-icons-container">
              <button onClick={() => DropDownContainer()}>
                Explore
                <i
                  class={
                    dropDown
                      ? "fa fa-chevron-down dropDown-icon-close"
                      : "fa fa-chevron-down dropDown-icon-open"
                  }
                ></i>
              </button>
            </div>

            <div className={dropDown ? "dropDown-open" : "dropDown-close"}>
              <div
                className={
                  scroll
                    ? "product-select-Scroll-none"
                    : "product-select-Scroll"
                }
              >
                <form>
                  <input
                    class="search-Bar"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearchBar(e.target.value)}
                    value={searchBar}
                  />
                </form>
                <div className="category">
                  <h4>Category</h4>
                  <p>
                    <span onClick={() => All()}>All</span>
                  </p>
                  <p>
                    <span onClick={() => Office()}>Office</span>
                  </p>
                  <p>
                    <span onClick={() => LivingRoom()}>Living Room</span>
                  </p>
                  <p>
                    <span onClick={() => Kitchen()}>Kitchen</span>
                  </p>
                  <p>
                    <span onClick={() => BedRoom()}>Bed Room</span>
                  </p>
                  <p>
                    <span onClick={() => Dining()}>Dining</span>
                  </p>
                  <p>
                    <span onClick={() => Kids()}>Kids</span>
                  </p>
                </div>
                <div className="category">
                  <h4>Company</h4>
                  <select>
                    <option value="All">All</option>
                    <option value="All">Macros</option>
                    <option value="All">Liddy</option>
                    <option value="All">Ikea</option>
                    <option value="All">Caressa</option>
                  </select>
                </div>

                <div className="Help-container">
                  <div className="Help-sub-container">
                    <span class="material-icons">help</span>
                    <div>
                      <h6>Help Center</h6>
                    </div>
                  </div>
                  <div className="Help-sub-container">
                    <span class="material-icons">restore</span>
                    <div>
                      <h6>Easy Return</h6>
                    </div>
                  </div>
                  <div className="Help-sub-container">
                    <span class="material-icons">lens_blur</span>
                    <div>
                      <h6>
                        Sell on
                        <br />
                        AddresserMall
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-image-section" ref={sticky}>
            <div className="product-found-container">
              <div>
                <span
                  onClick={displayGrid}
                  id={display ? " " : "grid-and-list-Icons-Focus"}
                  class="material-icons"
                >
                  grid_view
                </span>
                <span
                  onClick={displayList}
                  id={display ? "grid-and-list-Icons-Focus" : " "}
                  class="material-icons"
                >
                  list_alt
                </span>
              </div>
              <p style={{ color: "#324d67" }}>{numberOfItems} Products Found</p>
              <div className="line"></div>
              <div class="sort-By-container">
                <p>Sort By</p>
                <select
                  class="sort-by-Select"
                  onChange={(e) => sortBy(e.target.value)}
                >
                  <option value="price">Price(Lowest)</option>
                  <option value="id">Price(Highest)</option>
                  <option value="name">Name(A - Z)</option>
                  <option value="za">Name(Z - A)</option>
                </select>
              </div>
            </div>
            <div
              className={
                display
                  ? "product-image-wrapper-List"
                  : "product-image-wrapper-Grid"
              }
            >
              {Data.map((datum) => {
                const { image, name, price, desc, Available, SKU, brand, id } =
                  datum;

                return (
                  <div
                    className={
                      display ? "image-container-List" : "image-container-Grid"
                    }
                    key={id}
                  >
                    <div
                      className={
                        display ? "search-Display-none" : "search-Grid"
                      }
                    >
                      <Link to={`/Data/${id}`}>
                        <span class="material-icons">search</span>
                      </Link>
                    </div>
                    <img src={image} className="image" />
                    <div
                      className={
                        display ? "image-details-List" : "image-details-Grid"
                      }
                    >
                      <p className="name">{name}</p>
                      <p className="price">${price}</p>
                      <p
                        className={
                          display
                            ? "image-Description-List"
                            : "image-Description-Grid-Display-none"
                        }
                      >
                        {desc.slice(0, 170)}
                      </p>
                      <Link to={`/Data/${id}`}>
                        <button
                          className={
                            display
                              ? "Details-Button-List"
                              : "image-Description-Grid-Display-none"
                          }
                        >
                          DETAILS
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductTemplate;
