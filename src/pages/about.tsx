import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router"

const AboutPage = ()=>{

    const navigate = useNavigate()

    return(
        <>
            <p>Its my About page</p>
            <Button colorScheme="brand" onClick={()=> navigate("/")}>
                Home Page
            </Button>
        </>
    )
}

export default AboutPage