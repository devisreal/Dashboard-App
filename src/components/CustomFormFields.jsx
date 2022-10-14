import React from 'react'
import { useField } from 'formik';

export const TextInput = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
      <div className="">
         <div className="relative">
            <input
               {...field} {...props}
               className={`peer form-control`}
               placeholder=" "
               style={{
                  border: meta.touched && meta.error ? '2px solid #f87171' : ''
               }}
            />
            <label
               htmlFor={props.id || props.name}
               style={{
                  color: meta.touched && meta.error ? '#f87171' : ''
               }}
               className="form-label"
            >
               {label}
            </label>
         </div>
         {meta.touched && meta.error ? (
            <small className="text-red-500 font-semibold font-mulish text-xs">{meta.error}</small>
         ) : null}

      </div>
   );
};

/*


*/

export const SelectField = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (      
      <>
         <select
            {...field} {...props}
            style={{
               border: meta.touched && meta.error ? '2px solid #f87171' : ''
            }}
            className="select-style"
         />
         {meta.touched && meta.error ? (
            <small className="text-red-500 font-semibold font-mulish text-xs">{meta.error}</small>
         ) : null}
      </>
   );
};