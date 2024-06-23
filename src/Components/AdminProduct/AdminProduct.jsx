import React, {useState} from "react";
import {WrapperHeader} from "./style"
import {PlusCircleFilled} from "@ant-design/icons";
import {Button, Checkbox, Form, Input, Modal} from "antd";
import TableComponent from "../TableComponent/TableComponent";
import InputComponent from "../InputComponent/InputComponent";
const  AdminProduct = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stateProduct, setStateProduct] = useState({
        name: '',
        image: '',
        type: '',
        price: '',
        countInStock:'',
        rating: '',
        descriptions:''
    });
    const handleCancel = () =>{
        setIsModalOpen(false);
    }
    const onFinish =()=> {
        console.log('finish', stateProduct);
    }
    const handleOnChange= (e) => {
        setStateProduct({
            ...stateProduct,
            [e.target.name]: e.target.value
        })
        // console.log('e.target.name',e.target.name, e.target.value)
    }
    return(
        <div>
            <WrapperHeader>Quản lý sản phẩm</WrapperHeader>
            <div style={{marginTop: '10px'}}>
                <Button style={{height: '150px', width: '150px',borderRadius: '6px', borderStyle: 'dashed'}} onClick={()=> setIsModalOpen(true)}>
                    <PlusCircleFilled style={{fontSize: '40px'}}/></Button>
            </div>
            <div style={{marginTop: '10px'}}>
                <TableComponent/>
            </div>
            <Modal title="tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} okText=''>
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name "
                        name="Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <InputComponent value={stateProduct.name} onChange={(handleOnChange)} name="name" />
                    </Form.Item>

                    <Form.Item
                        label="CountInStock"
                        name="countInStock"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your countInStock!',
                            },
                        ]}
                    >
                        <InputComponent value={stateProduct.countInStock} onChange={(handleOnChange)} name="countInStock" />
                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="Price"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your price!',
                            },
                        ]}
                    >
                        <InputComponent value={stateProduct.price} onChange={(handleOnChange)} name="price" />
                    </Form.Item>

                    <Form.Item
                        label="Type"
                        name="Type"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your type!',
                            },
                        ]}
                    >
                        <InputComponent value={stateProduct.type} onChange={(handleOnChange)} name="type"  />
                    </Form.Item>
                    <Form.Item
                        label="Rating"
                        name="rating"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your rating!',
                            },
                        ]}
                    >
                        <InputComponent value={stateProduct.rating} onChange={(handleOnChange)} name="rating" />
                    </Form.Item>

                    <Form.Item
                        label="Descriptions"
                        name="descriptions"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your descriptions!',
                            },
                        ]}
                    >
                        <InputComponent value={stateProduct.descriptions} onChange={(handleOnChange)} name="descriptions" />
                    </Form.Item>

                    {/*<WrapperUploadFile  onChange={handleOnChangeAvatar} maxCount={1}>*/}
                    {/*    <Button icon={<UploadOutline/>}>Select file</Button>*/}
                    {/*</WrapperUploadFile>*/}
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16,}}>
                       <Button type="primary" htmlType="submit">
                           Submit
                       </Button>
                    </Form.Item>


                </Form>
            </Modal>
        </div>
    )
}

export default AdminProduct;