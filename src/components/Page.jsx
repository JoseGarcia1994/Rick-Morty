

const Page = ({page, setPage, qtyPage}) => {
    return (
        <div className="page">
          { page > 1 && <button className="page__btn" onClick={ () => setPage(page - 1)}>Previous</button>}
          <p className="page__p">{page} of {qtyPage}</p>  
          { qtyPage > page && <button className="page__btn" onClick={ () => setPage(page + 1)}>Next</button> }
        </div>
    );
};

export default Page;

