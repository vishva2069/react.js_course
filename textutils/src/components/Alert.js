import React from 'react'

function Alert(props) {
    if (props.alert === null) {
    return null;}
  return (
    <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show1`}role="alert">
        <strong>{props.alert.msg}</strong> :{props.alert.type}
                 <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  )
}

export default Alert
