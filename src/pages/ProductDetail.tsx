import { Fragment } from "react";
import { useParams } from "react-router-dom";

interface ParamType {
    productId: string
}

export default function ProductDetail() {

    const params = useParams<ParamType>();

    console.log(params.productId);
    

    return (
        <Fragment>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
        </Fragment>
    )
}
