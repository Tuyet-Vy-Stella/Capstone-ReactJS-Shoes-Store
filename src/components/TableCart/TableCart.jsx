import { Table } from "antd";

import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  changeQuantityCart,
  removeFromCart,
} from "../../redux/reducers/productReducer";

const TableCart = (props) => {
  const { arrProduct } = props;
  

  const dispatch = useDispatch();
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Img",
      dataIndex: "img",
      render: (imgSrc) => {
        return <img src={imgSrc} width={85} height={85} alt="..." />;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      render: (text) => {
        const { quantity, id } = text;
        return (
          <div>
            <button
              className="btn quantity-plus"
              onClick={() => {
                dispatch(changeQuantityCart({ type: true, id: id }));
              }}
            >
              +
            </button>
            <span className="span quantity-span">{quantity}</span>
            <button
              className="btn quantity-minus"
              onClick={() => {
                dispatch(changeQuantityCart({ type: false, id: id }));
              }}
            >
              -
            </button>
          </div>
        );
      },
    },
    {
      title: "Total",
      dataIndex: "total",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (id) => {
        return (
          <div>
            <button className="btn action-edit">Edit</button>
            <button
              className="btn action-delete"
              onClick={() => {
                dispatch(removeFromCart(id));
              }}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  const dataArr = [];
  
  for (let i = 0; i < arrProduct.length; i++) {
   
    /// hiện sản phẩm ra bảng
    dataArr.push({
      key: i,
      id: arrProduct[i].id,
      img: arrProduct[i].image,
      name: arrProduct[i].name,
      price: `${arrProduct[i].price}$`,
      total: `${(arrProduct[i].price * arrProduct[i].quantityBuy).toLocaleString()}$`,
      quantity: { quantity: arrProduct[i].quantityBuy, id: arrProduct[i].id },
      action: arrProduct[i].id,
    });
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataArr}
      />
    </div>
  );
};

export default TableCart;
