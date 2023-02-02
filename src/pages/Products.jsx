import React, { useEffect } from 'react'
import Error from '../components/Error'
import Loading from '../components/Loader'

import { useGetData } from '../hooks/useRequestData'


const Products = () => {

  const { error, loading, data: products, getData } = useGetData();

  useEffect(() => {
    // Kald hok som bruger axios til at hente data fra API'et
    getData("http://localhost:5111/api/products/")

  }, [])

  return (
    <div className='products-container'>

      <h1>Produkter</h1>

      {(error) && <Error />}

      {(loading) && <Loading />}

      {
        products && products.map((p, _id) =>

          <div className='card p-5 my-2' key={p._id}>
            <h2>{p.name}</h2>
            <p>{p.ShortDesc}</p>
          </div>

        )
      }

    </div>
  )
}

export default Products