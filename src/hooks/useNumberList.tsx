import React from "react"
import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return
  const [list, setList] = useState(initialArray);

  const pushstart = (param: number) => {
    setList([param, ...list]);
  };

  const popend = () => {
    list.pop();
    setList([...list]);
  };

  const pushend = (param: number) => {
    setList([...list, param]);
  };

  const popstart = () => {

    list.shift();

    setList([...list]);
  };

  const clear = () => {

    setList([]);

  };

  const reset = () => {

    setList(initialArray);

  };

  return [
    list, 
    setList, 
    { 
      pushstart, 
      pushend, 
      popstart, 
      popend, 
      clear, 
      reset 
    }
  ];
};

export default useNumberList;