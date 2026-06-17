import { useEffect, useState } from "react"
import axios from "axios";

export default function ResearchPage() {
    const [data, setData] = useState('');
    useEffect(() => {
        (async () => {
            await axios.get('http://localhost:3000/research').then((result) => {
            console.log(result.data.result.value);
            setData(result.data.result.value)
            })
        })()
    },[])

    return (
        <>
        this is data of {data}
        </>
    )
}