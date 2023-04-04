import React, { useEffect, useRef, useState } from "react";
import { Select, Input } from "antd";
import { http } from "../../util/tools";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import _ from "lodash";
export default function Search() {
  let keywordRef = useRef("");
  const { Option } = Select;
  let [searchParams, setSearchParams] = useSearchParams();
  let [arrProduct, setArrProduct] = useState([]);
  let timeoutRef = useRef({});

  const getProductByKeyword = async () => {
    try {
      let keyword = searchParams.get("keyword"); // => null
      if (keyword.trim() !== "" && keyword != null) {
        let result = await http.get(`/product?keyword=${keyword}`);
        console.log(result.data.content);
        setArrProduct(result.data.content);
        clearTimeout(timeoutRef.current);
      } else {
        setArrProduct([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getProductBySort = (value) => {
    let arrProductSort = _.sortBy(arrProduct, [(item) => item.price]);
    if (value === "descending") {
      arrProductSort = arrProductSort.reverse();
    }
    setArrProduct(arrProductSort);
  };

  useEffect(() => {
    getProductByKeyword();
  }, [keywordRef.current]);



  const handleChange = (e) => {
    keywordRef.current = e.target.value;
    timeoutRef.current = setTimeout(() => {
      setSearchParams({ keyword: keywordRef.current });
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const renderSearchProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductCard product={item} />
        </div>
      );
    });
  };

  return (
    <section className="search">
      <div className="search-input">
        <div className="container">
          <label>Search</label>
          <form
            className="d-flex justify-content-start"
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              placeholder="Product name..."
              onChange={handleChange}
            />
            <button className="search-btn">Search</button>
          </form>
        </div>
      </div>

      <h1 className="title">Search result</h1>

      <div className="search-result">
        <div className="container">
          <div className="sort-input">
            <label>Sort by: </label>
            <Select
              defaultValue=""
              onChange={(e) => {
                getProductBySort(e);
              }}
            >
              <Option value="ascending">Price: Ascending</Option>
              <Option value="descending">Price: Descending</Option>
            </Select>
          </div>
          <div className="result">
            <div className="row">{renderSearchProduct()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
