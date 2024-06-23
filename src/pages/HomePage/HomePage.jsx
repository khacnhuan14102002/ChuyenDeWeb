import React, { useEffect, useRef, useState } from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import NavBarComponent from "../../Components/NavbarComponent/NavBarComponent";
import TypeProduct from "../../Components/TypeProduct/TypeProduct";
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style";
import SilderComponent from "../../Components/SliderComponent/SilderComponent";
import slider1 from "../../assets/images/slider.webp";
import slider2 from "../../assets/images/slider_1.webp";
import slider3 from "../../assets/images/slider_2.webp";
import * as ProductService from "../../Services/ProductServices";

import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hook/useDebounce";

const HomePage = () => {
    const searchProduct = useSelector((state) => state?.product?.search);
    const refSearch = useRef();
    const [stateProducts, setStateProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const searchDebounce = useDebounce(searchProduct, 1000);
    const [typeProducts, setTypeProducts] = useState([])
    const fetchProductAll = async (search) => {
        const res = await ProductService.getAllProduct(search);
        return res.data; // Return the actual product data
    };

    useEffect(() => {
        if (refSearch.current) {
            setLoading(true);
            fetchProductAll(searchDebounce).then((products) => {
                setStateProducts(products);
                setLoading(false);
            });
        }
        refSearch.current = true;
    }, [searchDebounce]);
    const fetchAllTypeProduct = async () =>{
        const res = await ProductService.getAllType()
     setTypeProducts(res?.data)
    }

    const { isLoading, data: products } = useQuery(['products'], () => fetchProductAll(searchProduct), {
        retry: 3,
        retryDelay: 1000,
    });
    useEffect(() => {
        fetchAllTypeProduct()
    }, []);
    useEffect(() => {
        if (products?.length > 0) {
            setStateProducts(products);
        }
    }, [products]);

    return (
        // <Loading isLoading={isLoading}>
        <>
            <div style={{ padding: '0 100px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' }}>
                <WrapperTypeProduct>
                    {typeProducts.map((item) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        );
                    })}
                </WrapperTypeProduct>
            </div>
            <div className='body' style={{ width: '100%', backgroundColor: '#efefef' }}>
                <div id="container" style={{ height: '1050px', width: '1270px', margin: '0 auto' }}>
                    <SilderComponent arrImages={[slider1, slider2, slider3]} />
                    <WrapperProducts>
                        {stateProducts.map((product) => {
                            return (
                                <CardComponent
                                    key={product.id}
                                    countInStock={product.countInStock}
                                    description={product.description}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    rating={product.rating}
                                    type={product.type}
                                    selled={product.selled}
                                    discount={product.discount}
                                    id={product._id}
                                />
                            );
                        })}
                    </WrapperProducts>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <WrapperButtonMore
                            textButton="Xem thêm"
                            type="outline"
                            styleButton={{
                                border: '1px solid rgb(11, 116, 229)',
                                color: 'rgb(11, 116, 229)',
                                width: '240px',
                                height: '38px',
                                borderRadius: '4px',
                            }}
                            styleTextButton={{ fontWeight: 500 }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
