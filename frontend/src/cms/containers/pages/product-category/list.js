import React, { useEffect, useState } from 'react';
// import Config from '../../../../config/Config';
import CategoryProductItem from './item';
import MyRequest from '../../../../helpers/send-request';
import { useDispatch, useSelector } from 'react-redux';
import { selectReload, updateReload } from '../../../../store/reloadSlice';
import swal from 'sweetalert';
import { updateCategory } from '../../../../store/categorySlice';

const PorductCategoryList = () => {

    let [data, setData] = useState([])
    const dispatch = useDispatch()
    let { reload } = useSelector(selectReload)

    const getCategory = async () => {
        let res = await MyRequest.Get("/cms/category")
        if (res.status && res.status === 200 && res.data && res.data.length > 0) {
            setData(res.data)
        }
    };

    useEffect(() => {
        getCategory()
    }, [reload.category])

    const handleDelete = async (id) => {
        if (id > 0) {
            try {
                let res = await MyRequest.Delete("/cms/category", { category_id: id })
                if (res.data.data.error === false) {
                    swal("Success!", "Delete item is success!", "success");
                }
            } catch (error) {
                swal("Error!", "Delete item is error!", "error");
            }
        }
        dispatch(updateReload({ category: reload.category + 1 }))
    }

    const handleUpdate = (id) => {
        data.map((e) => {
            if(e.id === id){
                dispatch(updateCategory({
                    categoryUpdate:{
                        id: e.id,
                        categoryName: e.name,
                        slug: e.slug,
                        description: e.description,
                        parentCategory: e.parent_id,
                        active: e.active
                    }
                }))
            }
            return true
        })
    }

    let items = data.map((e, i) => {
        e.parent_name = "---"
        if(e.parent_id > 0){
            data.forEach((v) => {
                if(e.parent_id === v.id) e.parent_name = v.name
            })
        }
        return <CategoryProductItem item={e} key={i} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    })

    return (
        <div className="col-md-9">
            <div className="block">
                {/* Responsive Full Title */}
                <div className="block-title">
                    <h2><strong>Full Table</strong> Responsive</h2>
                </div>
                {/* END Responsive Full Title */}
                {/* Responsive Full Content */}
                <div className="table-responsive">
                    <table className="table table-vcenter table-striped">
                        <thead>
                            <tr>
                                <th style={{ width: '30' }}>#No</th>
                                <th>Name</th>
                                <th>Parent</th>
                                <th>Image</th>
                                <th>Active</th>
                                <th>Descripton</th>
                                <th>Created at</th>
                                <th>Update by</th>
                                <th style={{ width: '150px' }} className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
                {/* END Responsive Full Content */}
            </div>
        </div>
    )
}

export default PorductCategoryList