import ErrorItem from "./error-item"
import React from "react"

const Errors = ({errors}) => {
    let errorsElement = errors.map((e,i)=>{
        return <ErrorItem msg={setMsg(e)} key={i}/>
    })

    function setMsg(e){
        let mess = e.message
        switch (e.validatorKey) {
            case "not_unique":
                mess = `${e.path}  is already exists, please try another ${e.path}`
                break;
            case "isEmail":
                mess = `Email is wrong format`
                break
            case "is_null":
                mess = `${e.path} can't empty`
                break
            default:
                break;
        }
        return mess
    }
    
    return (
        <div className="alert alert-danger alert-dismissable">
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
            <h4><i className="fa fa-times-circle" /> Error</h4>
            {errorsElement}
        </div>
    )
}

export default Errors