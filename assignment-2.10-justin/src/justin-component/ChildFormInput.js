import React, {useState} from "react";

function ChildFormInput(props) {
    const defaultState = {
        id: 0,
        product: '',
        price: 0,
    };
    const [state, setState] = useState(defaultState);
    const [formData, setFormData] = useState(1);

    const handleInput = (e) => {
        const fieldInput = e.target.name;
        const data = {...state};
      
        switch(fieldInput){
            case "product":
                data.product = e.target.value;
                break;
            case "price":
                data.price = e.target.value;
        }
        console.log(e.target.value);
        setState(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.add({ ...state });
        setState(defaultState); 
        setFormData(formData + 1); 
        e.target.reset(); 
      }

    return (
        <>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Product" name="product" onChange={handleInput} />
          <input type="text" placeholder="Price" name="price" onChange={handleInput} />
          <button>Add</button>
        </form>
        </>
      );
}

export default ChildFormInput;