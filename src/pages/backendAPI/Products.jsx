import React, { useEffect } from 'react'
import Error from '../../components/Error'
import Title from '../../components/Title'
import Loading from '../../components/Loader'

import { useGetData } from '../../hooks/useRequestData'

// for at "oversætte" html-tag så de ikke bliver vist - men fortolket
import parse from 'html-react-parser'


const Products = () => {
  const { error, loading, data: products, getData } = useGetData();

  useEffect(() => {
    // Kald hook som bruger axios til at hente data fra API'et
    getData("http://localhost:5111/api/products/")

  }, [data])

  return (

    <div className='product'>

      <Title headline="Produkter" />

      {error && <Error />}

      {loading && <Loading />}

      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {

          products && products.products.map((p, _id) =>

            <div className='card bg-dark p-5 my-2' key={p._id}>
              <h2>{p.name}</h2>
              <p>{p.ShortDesc}</p>
              <div>{parse(p.LongDesc)}</div>
            </div>

          )
        }
      </div>

    </div>
  )

}

export default Products