import React, { useEffect, useState } from "react";
import ParentCategoryOption from "../../../components/parent-category-option";
import ConvertToSlug from "../../../../helpers/convert-to-slug";
import MyRequest from "../../../../helpers/send-request";
import Errors from "../../../components/error";
import SuccessNotify from "../../../components/error/success";
import { selectReload, updateReload } from "../../../../store/reloadSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, updateCategory } from "../../../../store/categorySlice";

const ProductCategoryForm = () => {
    let [data, setData] = useState({
        id:0,
        categoryName: "",
        slug: "",
        description: "",
        parentCategory: 0,
        active: 1
    })

    let [errors, setErrors] = useState([])
    let [success, setSuccess] = useState({status: false, msg: ""})
    let dispatch = useDispatch()
    let {reload} = useSelector(selectReload)
    let {categoryUpdate} = useSelector(selectCategory)

    useEffect(()=>{
        if(categoryUpdate.id > 0){
            setData({
                id: categoryUpdate.id,
                slug: categoryUpdate.slug,
                categoryName: categoryUpdate.categoryName,
                description: categoryUpdate.description,
                parentCategory: categoryUpdate.parentCategory,
                active: categoryUpdate.active,
            })
        }
    },[categoryUpdate.id])

    let handleChangeCategoryName = (e) => {
        setData(prev => ({
            ...prev,
            categoryName: e.target.value,
            slug: ConvertToSlug(e.target.value)
        }))
    }

    let handleChangeCategoryDescription = (e) => {
        setData(prev => ({
            ...prev,
            description: e.target.value
        }))
    }

    let handleChangeParentCategory = (e) => {
        setData(prev => ({
            ...prev,
            parentCategory: e.target.value
        }))
    }

    let handleChangeActive = (e) => {
        setData(prev => ({
            ...prev,
            active: e.target.value
        }))
    }

    let handleSubmit = async () => {
        if(data.id === 0){
            let res = await MyRequest.Post("/cms/category", data)
            if(res.status !== 200){
                setErrors(res.data.errors)
                setSuccess({status: false, msg:""})
                return
            }
            setSuccess({msg: "Add category is success!!!", status: true})
        }else if(data.id > 0){
            let res = await MyRequest.Put("/cms/category", data)
            if(res.status !== 200){
                setErrors(res.data.errors)
                setSuccess({status: false, msg:""})
                return
            }
            setSuccess({msg: "Update category is success!!!", status: true})
        }
        setErrors([])
        dispatch(updateReload({category:reload.category+1}))
        resetData()
    }

    const resetData = () => {
        setData({
            id: 0,
            categoryName: "",
            slug: "",
            description: "",
            parentCategory: 0,
            active: 1
        }) 
        dispatch(updateCategory({categoryUpdate:{
            id:0
        }}))
    }

    // console.log(errors);
    let errorElement = errors.length === 0 ? "" : <Errors errors={errors} />
    let successElement = success.status === true ? <SuccessNotify msg={success.msg} /> : ""

    return (
        <form encType="multipart/form-data" className="form-horizontal form-bordered">
            <div className="form-group">{errorElement} {successElement}</div>
            <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="example-text-input">Category name</label>
                <div className="col-md-9">
                    <input type="text" onChange={handleChangeCategoryName} value={data.categoryName} className="form-control" placeholder="Category name" />
                </div>
            </div>
            <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="example-email-input">Slug</label>
                <div className="col-md-9">
                    <input type="email" value={data.slug} className="form-control" disabled placeholder="Slug" />
                </div>
            </div>

            <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="example-textarea-input">Description</label>
                <div className="col-md-9">
                    <textarea onChange={handleChangeCategoryDescription} value={data.description == null ? '' : data.description} rows={9} className="form-control" placeholder="Content.." />
                </div>
            </div>
            <div className="form-group">
                <label className="col-md-3 control-label" htmlFor="example-select">Parent Category</label>
                <div className="col-md-9">
                    <ParentCategoryOption handleChangeParentCategory={handleChangeParentCategory} parentCategory={data.parentCategory}/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-md-3 control-label">Active</label>
                <div className="col-md-9">
                    <label className="radio-inline" htmlFor="radio-active">
                        <input type="radio" value={1} defaultChecked={true} id="radio-active" name="active" onClick={handleChangeActive}/> Active
                    </label>
                    <label className="radio-inline" htmlFor="radio-active2">
                        <input type="radio" value={0} defaultChecked={false} id="radio-active2" name="active" onClick={handleChangeActive}/> Not Active
                    </label>
                </div>
            </div>
            {/* <div className="form-group">
            <label className="col-md-3 control-label" htmlFor="example-file-input">File input</label>
            <div className="col-md-9">
                <input type="file" id="example-file-input" name="example-file-input" />
            </div>
        </div> */}
            <div className="form-group form-actions">
                <div className="col-md-9 col-md-offset-3">
                    <button type="button" onClick={handleSubmit} className="btn btn-sm btn-primary"><i className="fa fa-angle-right" /> Submit</button>
                    <button type="reset" className="btn btn-sm btn-warning"  onClick={resetData}><i className="fa fa-repeat"/> Reset</button>
                </div>
            </div>
        </form>
    )
}

export default ProductCategoryForm