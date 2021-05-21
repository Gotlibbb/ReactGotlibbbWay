import React from "react";
import  styles from "./formControl.module.css"

//
// // @ts-ignore
// export const FormControl = ({input, meta,child, ...props }) => {
//     const error= meta.touched &&meta.error;
//
//     return <div className={styles.formControl + " " + (error ? styles.error: " ")}>
//         <div>
//             {props.children}
//         </div>
//         {error && <span>{meta.error}</span>}
//     </div>
// }
// // @ts-ignore
// export const Textarea = (props) => {
// const {input, meta,children, ...restProps }  = props;
//     return <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
// }
//
// // @ts-ignore
// export const Input = (props) => {
//
//     const {input, meta,children, ...restProps }  = props;
//     return <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
// }
// @ts-ignore
export const FormControl = ({input, meta,el, ...props }) => {
    const error= meta.touched &&meta.error;

    return <div className={styles.formControl + " " + (error ? styles.error: " ")}>
        <div>
            {React.createElement(el, {...input, ...props} )}
        </div>
        {error && <span>{meta.error}</span>}
    </div>
}
// @ts-ignore
export const Textarea = (props) => {
    return <FormControl {...props} el={"textarea"}/>
}

// @ts-ignore
export const Input = (props) => {
    return <FormControl {...props} el={"input"}/>
}

