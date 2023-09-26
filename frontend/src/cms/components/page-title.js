import React from "react"
const PageTitle = ({classIcon, largeTitle, smallTitle}) => {
    return (
        <div className="content-header">
            <div className="header-section">
                <h1>
                    <i className={classIcon} />{largeTitle}<br /><small>{smallTitle}</small>
                </h1>
            </div>
        </div>
    )
}
export default PageTitle