import PageTitle from "../../../components/page-title"
import Breadcrum from "../../../components/breadcrum"
import PorductCategoryList from "./list"
import React from "react"
import ProductCategoryForm from "./form"

const ProductCategory = () => {
    return (
        <>
            <PageTitle classIcon="gi gi-cogwheels" largeTitle="Category" smallTitle="Product category control" />
            <Breadcrum currentPage="Product category control" />
            <div className="row">
                <div className="col-md-3">
                    {/* Basic Form Elements Block */}
                    <div className="block">
                        {/* Basic Form Elements Title */}
                        <div className="block-title">
                            <h2><strong>Category</strong> Create</h2>
                        </div>
                        {/* END Form Elements Title */}
                        {/* Basic Form Elements Content */}
                        <ProductCategoryForm/>
                        {/* END Basic Form Elements Content */}
                    </div>
                    {/* END Basic Form Elements Block */}
                </div>
                <PorductCategoryList/>
            </div>
        </>
    )
}
export default ProductCategory