import React, { useEffect } from 'react'
import Error from '../../components/Error'
import Title from '../../components/Title'
import Loading from '../../components/Loader'
import {Link} from "react-router-dom";

import { useGetData, useDeleteData } from '../../hooks/useRequestData'

// for at "oversætte" html-tag så de ikke bliver vist - men fortolket
import parse from 'html-react-parser'


const ProductsAdmin = () => {

  const { error, loading, data: products, getData } = useGetData();
  const { error: errorDelete, loading: loadingDelete, data, deleteData } = useDeleteData();

  useEffect(() => {
    // Kald hok som bruger axios til at hente data fra API'et
    getData("http://localhost:5111/api/products/")

  }, [data])

  // Håndter sletning af produktet ud fra dets id
  const handleDelete = (id, product) => {
    console.log(id)

    if (window.confirm("Er du sikker på at du vil slette: " + product)) {

      deleteData("http://localhost:5111/api/products/" + id)

    }


  }

  return (
    <div className='products-admin'>

      <Title headline="Admin Produkter"/>

      {(error || errorDelete) && <Error />}

      {(loading || loadingDelete) && <Loading />}
      
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {

          products && products.products.map((p, _id) =>
          
            <div className='card bg-dark p-5 my-2' key={p._id}>
              <h2>{p.name}</h2>
              <p>{p.ShortDesc}</p>
              <div>{parse(p.LongDesc)}</div>
              <button onClick={() => handleDelete(p._id, p.name)}>Slet</button>

              <Link to={"/admin/productsupdate/" + p._id}>Ret</Link>

            </div>

          )
        }
      </div>

    </div>
  )
}

export default ProductsAdmin