import { useState, forwardRef, useRef, useImperativeHandle } from "react";


const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRe = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRe.current.focus();
      },
      scrollIntoView() {
      
      //inputRe.current.scrollIntoView();
      },
    };
  }, []);

  return <input {...props} ref={inputRe} />;
});



export const ForwardRefApp = () => {
  const inputRef = useRef(null)

  const handleFocus = (e) => {
    e.preventDefault();
    inputRef.current.focus();
  }

  return (
    <form>
      <MyInput ref={inputRef} />
      <button onClick={(e) => handleFocus(e)}>Focus</button>
    </form>
  )
}

export default ForwardRefApp;
