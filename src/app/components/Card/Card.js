import Image from "next/image"
import Link from "next/link"


const Card = ({ id, title, price, category, thumbnail }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <Image height={160} width={60} src={thumbnail} alt="dd" className="card-img-top"></Image>

            <div className="card-body">
                <p className="card-title">{title}</p>
                <p className="card-text">{price}</p>
                <p className="card-text">{category}</p>
                <Link href={`/blog/${id}`} className="btn btn-primary">Details</Link>
            </div>

        </div>
    )
}

export default Card
