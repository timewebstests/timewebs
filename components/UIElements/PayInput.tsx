import React from "react";

interface PayInputProps {
  idFor: string;
  placeholder: string;
  type: string;
}

const PayInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  PayInputProps
> = ({ idFor, placeholder, type }, ref) => {
  return (
    <div className="form_group relative w-full flexx">
      <input
        ref={ref}
        id={idFor}
        type={type}
        placeholder=""
        required
        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
      <label
        htmlFor={idFor}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-transparent peer-focus:bg-transparent px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default React.forwardRef(PayInput);
