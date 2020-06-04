import React from 'react'
import "./form-input.styles.scss"

const FormInput = ({handleChange,lable, ...props}) =>(
    <div className="group">
        <input className="form-input" onChange={handleChange} {...props}/>
        {
            lable ? (
                <lable className={`${props.value.length?'shrink':''} form-input-label`}>
                    {lable}
                </lable>
            ) : null
        }
    </div>
);

export default FormInput