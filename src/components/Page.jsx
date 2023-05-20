
const Page = ({page, setPage, qtyPage}) => {
<<<<<<< HEAD

  
  return (
      <div className="page">
        <button className="page__btn" onClick={ () => setPage(page - 1)} disabled={ page <= 1}>Previous</button>
        <p className="page__p">{page} of {qtyPage}</p>  
        <button className="page__btn" onClick={ () => setPage(page + 1)} disabled={ page >= qtyPage }>Next</button>
      </div>
  );
=======
    return (
        <div className="page">
          <button className="page__btn" onClick={ () => setPage(page - 1)} disabled={ page === 1}>Previous</button>
          <p className="page__p">{page} of {qtyPage}</p>  
          <button className="page__btn" onClick={ () => setPage(page + 1)} disabled={ page === qtyPage }>Next</button>
        </div>
    );
>>>>>>> 5aafde267cbe930f785033ad7e5a2d0c151e8071
};

export default Page;

