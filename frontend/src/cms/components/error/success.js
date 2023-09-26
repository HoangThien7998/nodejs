import React from "react"

const SuccessNotify = ({msg}) => {
    return (
        <div className="alert alert-success alert-dismissable">
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
            <h4><i className="fa fa-check-circle" /> Success</h4>
            {msg}
        </div>
    )
}

export default SuccessNotify