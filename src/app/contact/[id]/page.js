"use client"
import { useSearchParams } from "next/navigation"


const Contact = ({ params }) => {

    const searchparams = useSearchParams()

    const name = searchparams.get('name');
    const age = searchparams.get('age');

    return (
        <div>
            contact{name} {age}

        </div>
    )
}

export default Contact
