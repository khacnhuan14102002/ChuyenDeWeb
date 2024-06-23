import React, { useEffect, useState } from "react";
import NavBarComponent from "../../Components/NavbarComponent/NavBarComponent";
import CardComponent from "../../Components/CardComponent/CardComponent";
import { Pagination, Row, Col } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";
import * as ProductService from "../../Services/ProductServices"; // corrected import
import { useLocation } from "react-router-dom";

const TypeProductPage = () => {
    const { state } = useLocation();
    const [product, setProduct] = useState([]);

    const fetchProductType = async (type) => {
        try {
            const res = await ProductService.getProductType(type);
            // Assuming getProductType returns an array of products
            if (res?.data) {
                setProduct(res.data); // assuming res.data is an array of products
            } else {
                console.log("No data received");
            }
        } catch (error) {
            console.error("Error fetching product type:", error);
        }
    };

    useEffect(() => {
        if (state) {
            fetchProductType(state);
        }
    }, [state]);

    const onChange = (pageNumber) => {
        console.log("Page: ", pageNumber);
        // You can implement pagination logic here
    };

    return (
        <div style={{ width: "100%", background: "#efefef" }}>
            <div style={{ width: "1270px", margin: "0 auto" }}>
                <Row style={{ flexWrap: "nowrap", paddingTop: "10px" }}>
                    <WrapperNavbar span={4}>
                        <NavBarComponent />
                    </WrapperNavbar>
                    <Col span={20}>
                        <WrapperProducts>
                            {product.map((data) => ( // map over product, use 'data' as parameter
                                <CardComponent
                                    key={data.id} // use data.id instead of product.id
                                    countInStock={data.countInStock}
                                    description={data.description}
                                    image={data.image}
                                    name={data.name}
                                    price={data.price}
                                    rating={data.rating}
                                    type={data.type}
                                    selled={data.selled}
                                    discount={data.discount}
                                    id={data._id}
                                />
                            ))}
                        </WrapperProducts>
                        <Pagination
                            defaultCurrent={1} // adjust defaultCurrent as needed
                            total={100} // adjust total as needed
                            onChange={onChange}
                            style={{ textAlign: "center", marginTop: "10px" }}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default TypeProductPage;
