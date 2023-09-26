import MyRequest from "../../helpers/send-request"
import React, { useState,useEffect } from "react"
import { useSelector } from "react-redux"
import { selectReload } from "../../store/reloadSlice"

const ParentCategoryOption = ({handleChangeParentCategory, parentCategory}) => {
    let [data, setData] = useState([])
    let {reload} = useSelector(selectReload)

    useEffect(() => {
        async function getData(){
            let res = await MyRequest.Get("/cms/category")
            if(res.status && res.status === 200 && res.data && res.data.length > 0){
                setData(res.data)
            }
        }
        getData()
    }, [reload])

    let options = data.map( (e,i) => {
        return <option key={i} value={e.id}>{e.name}</option>
    })

    return (
        <select onChange={handleChangeParentCategory} value={parentCategory} name="example-select" className="form-control" size={1}>
            <option value={0}>None</option>
            {options}
        </select>
    )
}

function getPrefixOption(item, data, prefix=""){
    if(item.parent_id && item.parent_id > 0){
        let nextItem = {}
        data.forEach(element => {
            if(element.id === item.parent_id){
                nextItem = element
            }
        });
        prefix = `${prefix}--|`
        getPrefixOption(nextItem, data, prefix)
    }else{
        return prefix
    }
}

export default ParentCategoryOption