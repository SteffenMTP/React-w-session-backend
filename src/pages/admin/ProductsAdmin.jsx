import React, { useEffect } from 'react'
import Error from '../../components/Error'
import Loading from '../../components/Loader'

import { useGetData, useDeleteData } from '../../hooks/useRequestData'

const ProductsAdmin = () => {

  const { error, loading, data: products, getData } = useGetData();
  const { error: errorDelete, loading: loadingDelete, data, deleteData } = useDeleteData();

  useEffect(() => {
    // Kald hok som bruger axios til at hente data fra API'et
    getData("http://localhost:5111/api/products/")

  }, [data])

  // Handler 
  const handleDelete = (id, products) => {
    console.log(id)

    if (window.confirm("Er du sikker på at du vil slette: " + products)) {

      deleteData("http://localhost:5111/api/products/" + id)

    }


  }

  return (
    <div className='products-admin'>

      <h1>ADMIN Produkter</h1>

      {(error || errorDelete) && <Error />}

      {(loading || loadingDelete) && <Loading />}
      
      <div className=''>

        {
          products && products.products.map((p, _id) =>

            <div className='card bg-dark p-5 my-2' key={p._id}>
              <h2>{p.name}</h2>
              <p>{p.ShortDesc}</p>
              <button onClick={() => handleDelete(p._id, p.name)}>Slet</button>
            </div>

          )
        }
      </div>

    </div>
  )
}

export default ProductsAdmin