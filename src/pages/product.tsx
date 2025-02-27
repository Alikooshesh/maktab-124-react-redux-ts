import { useParams } from "react-router"

const ProductPage = ()=>{
    const params = useParams()
    console.log(params)
    return(
        <p>its product page id : {params?.id}</p>
    )
}

export default ProductPage