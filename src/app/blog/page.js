import styles from './blog.modules.css';
import Card from './../components/Card/Card';

//  { cache: 'no-store' }
// { next: { revalidate: 3600 } } no loading 
const fetchProducts = async () => {

    const response = await fetch('https://dummyjson.com/products', { cache: "no-store" })
    if (!response.ok) {
        throw new Error('API Call Failed due to unknown reason');
    }
    return response.json();
}

const Blog = async () => {
    const productData = await fetchProducts();
    const products = productData.products

    return (
        <div >
            <div className='container'>
                <div className='row'>
                    {
                        products.map((product) => {
                            return (
                                <div className='col-lg-4 mb-4 ' key={product.id}>
                                    <Card className="mb-2" title={product.title} id={product.id} price={product.price} category={product.category} thumbnail={product.thumbnail}></Card>
                                </div>)

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog;
