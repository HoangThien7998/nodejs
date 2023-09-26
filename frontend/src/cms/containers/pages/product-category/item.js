import { GetTimeString } from "../../../../helpers/time-string";
import React from "react";

const CategoryProductItem = ({item,handleDelete, handleUpdate}) => {
    let {active,createdAt,description,id,image,name,parent_name,updatedAt} = item
    active = active ? "Active" : "Not active"

    createdAt = GetTimeString(createdAt)
    updatedAt = GetTimeString(updatedAt)

    return (
        <tr>
            <td style={{ width: '30' }}>{id}</td>
            <td>{name}</td>
            <td>{parent_name}</td>
            <td>{image}</td>
            <td>{active}</td>
            <td>{description}</td>
            <td>{createdAt}</td>
            <td>{updatedAt}</td>
            <td className="text-center">
                <div className="btn-group btn-group-xs">
                    <button className="btn btn-default" data-original-title="Edit" onClick={()=>{handleUpdate(id)}}><i className="fa fa-pencil" /></button>
                    <button className="btn btn-danger" data-original-title="Delete" onClick={()=>{handleDelete(id)}}><i className="fa fa-times"/></button>
                </div>
            </td>
        </tr>
    )
}
export default CategoryProductItem