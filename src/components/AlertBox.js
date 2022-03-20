import React from 'react'

const AlertBox = (props) => {
  return (
    <>
        <div className="alert alert-primary" role="alert">
            {props.msg}
        </div>
    </>
  )
}

export default AlertBox
