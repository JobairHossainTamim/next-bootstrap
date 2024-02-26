import Author from "../components/Author/Author";


const fetchQuotes = async () => {
    let quotes = await fetch('https://dummyjson.com/quotes');
    quotes = await quotes.json();
    return quotes.quotes;
}

const Popular = async () => {
    let quotes = await fetchQuotes();
    return (
        <div>
            <div className='container'>
                <h2 className='text-center mt-2'>Popular Quotes</h2>
                {
                    quotes.map((p) => {
                        return <div key={p.id}>
                            <p>Quote: {p.quote}</p>
                            <Author authorName={p.author} />
                            <hr />
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Popular;