import { Table } from "antd";

import React, { useState } from "react";

const TableProfile = (props) => {
  const { arrProduct, id } = props;

  const columns = [
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
    },
    {
      title: "Total",
      dataIndex: "total",
    },
  ];
  const dataArr = [];

  for (let i = 0; i < arrProduct.length; i++) {
    /// hiện sản phẩm ra bảng
    dataArr.push({
      key: i,
      img: arrProduct[i].image,
      name: arrProduct[i].name,
      price: `${arrProduct[i].price}$`,
      total: `${(
        arrProduct[i].price * arrProduct[i].quantity
      ).toLocaleString()}$`,
      quantity: arrProduct[i].quantity,
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

export default TableProfile;
