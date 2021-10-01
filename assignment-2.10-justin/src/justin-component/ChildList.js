function ChildList(props){
    const products = {
        id: 0,
        product: '',
        price: 0,
    }
    return(
        <ul>
            {props.products.map(p => 
            <li key={p.id}
            >{p.product}, {p.price}
            </li>)}
        </ul>
    );
}

export default ChildList;