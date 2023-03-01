import React, { useEffect, useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Layout/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const [query, setQuery] = useState({
    search: "",
    cate: "",
    sort: "",
  });

  useEffect(() => {
    let productClone = [...products];
    if (query.search) {
      productClone = productClone.filter((p) =>
        p.productName.toLowerCase().includes(query.search)
      );
    }
    if (query.cate) {
      productClone = productClone.filter((p) => p.category === query.cate);
    }
    if (query.sort) {
      switch (query.sort) {
        case "ascending":
          productClone.sort((a, b) => a.price - b.price);
          break;
        case "descending":
          productClone.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }
    }
    setProductsData(productClone);
  }, [query]);

  const handelFilter = (e) => {
    setQuery({ ...query, cate: e.target.value });
  };
  const handelSearch = (e) => {
    setQuery({ ...query, search: e.target.value.toLowerCase() });
  };
  const handelSort = (e) => {
    setQuery({ ...query, sort: e.target.value });
  };

  return (
    <Helmet title="Shop">
      <CommonSection title={"Products"} />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handelFilter}>
                  <option value="">Filter By Category </option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Moblie</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget" onClick={handelSort}>
                <select>
                  <option>Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Seach......."
                  onChange={handelSearch}
                />
                <span>
                  {" "}
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productsData.length !== 0 ? (
              <ProductsList data={productsData} />
            ) : (
              "No Products are you found"
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
