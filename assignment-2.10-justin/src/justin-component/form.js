import React, {useState} from "react";


function FormInput() {
    const [state, setState] = useState({
        product: null,
        price:null,
    });
    const [formData, setFormData] = useState('');

    const handleInput = (e) => {
        e.preventDefault();
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
        setFormData(state.product, state.price);
      }

    return (
        <>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Product" name="product" onChange={handleInput} />
          <input type="text" placeholder="Price" name="price" onChange={handleInput} />
          <button>Add</button>
        </form>
        <div>
          <ul>
            {Object.entries(formData).map(([element, index]) => (
                <li key={element}>
                   {state.product}, {state.price}
                </li>
            ))}
           </ul>
       </div>
        </>
      );
}

export default FormInput;