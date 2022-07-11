import React from "react"
import useNumberList from "./../hooks/useNumberList";

type List1Props = {
  // TODO
  initalValues: any;
  label: string;
};

const List1 = (props: List1Props) => {
  const [list, setList, { pushstart, popend, clear, reset }]: any =
    useNumberList(props.initalValues);
  console.log(list);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setList({
      ...list,
      [name]: value,
    });
  };

  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">
        {props.label}
      </h3>
      {list.map((el: any, index: any) => {
        return (
          <div key={index} data-testid="list1-element">
             {el}
          </div>
        );
      })}

      <input data-testid="list1-input" type="number" onChange={handleChange} />

      <button onClick={() => pushstart()} data-testid="list1-btn-append-start">
        PushStart
      </button>

      <button onClick={() => popend()} data-testid="list1-btn-pop-end">
        PopEnd
      </button>

      <button onClick={() => clear()} data-testid="list1-btn-clear">
        Clear
      </button>

      <button onClick={() => reset()} data-testid="list1-btn-reset">
        Reset
      </button>
    </div>
  );
};

export default List1;