

const Page = ({page, setPage, qtyPage}) => {
    return (
        <div className="page">
          <button className="page__btn" onClick={ () => setPage(page - 1)} disabled={ page === 1}>Previous</button>
          <p className="page__p">{page} of {qtyPage}</p>  
          <button className="page__btn" onClick={ () => setPage(page + 1)} disabled={ page === qtyPage }>Next</button>
        </div>
    );
};

export default Page;

