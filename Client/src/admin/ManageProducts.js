import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiAdmin";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    const destroy = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
            }
        });
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <Layout
            title="Quản lý sản phẩm"
            description="Bách Khoa Computer - Nơi mua sắm đáng tin cậy, bạn của mọi nhà"
            className="container"
        >
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">
                        Tổng cộng {products.length} sản phẩm
                    </h2>
                    <hr />
                    <ul className="list-group">
                        {products.map((p, i) => (
                            <li
                                key={i}
                                className="row list-group-item d-flex justify-content-between align-items-center"
                            >
                                <div className="col-lg-6 col-6">
                                    <strong>{p.name}</strong>
                                </div>
                                <div className="col-lg-3 col-3 d-flex justify-content-center">
                                    <Link to={`/admin/product/update/${p._id}`}>
                                        <button className="btn btn-warning">
                                            Cập nhật
                                        </button>
                                    </Link>
                                </div>
                                <div className="col-lg-3  col-3 d-flex justify-content-center">
                                    <button
                                        onClick={() => destroy(p._id)}
                                        className="btn btn-danger"
                                    >
                                        Xóa
                                    </button>
                                </div>
                                
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
            </div>
        </Layout>
    );
};

export default ManageProducts;
