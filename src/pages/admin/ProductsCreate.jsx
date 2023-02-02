import React, { useEffect } from 'react'
import Error from '../../components/Error'
import Loading from '../../components/Loader'

import { usePostData } from '../../hooks/useRequestData'


const ProductsCreate = () => {

  const { error, loading, data, postData } = usePostData()
  

  useEffect(() => {    

    if(data){
      document.forms[0].reset()

      // document.querySelector("form").reset()
      // document.querySelectorAll("form")[0].reset()
      // document.getElementsByClassName("form")[0].reset();
    }
  }, [data])
  



  const handleSubmit = (e) => {
    e.preventDefault() // VIGTIG: For at undgå reload af siden ved submit
  
    let formdata = new FormData(e.target)

    postData("http://localhost:5111/api/products/", formdata)

  }

  return (
    <>
    {error  && <Error />}

    {loading && <Loading />}

    {data && <h2>Nyt produkt er blevet oprettet</h2>}

    <div>

      <form onSubmit={handleSubmit}>
        <div>
          <label> Produktets navn: <br/>
            <input type="text" name="name" required placeholder="Produktets navn"/>
          </label>
        </div>

        <div>
          <label> Pris: <br/>
            <input type="text" name="price" required placeholder=""/>
          </label>
        </div>

        <div>
          <label> Short Description: <br/>
            <textarea name="ShortDesc" required placeholder="Kort Beskrivelse af produktet"/>
          </label>
        </div>
        
        <div>
          <label> Long Description: <br/>
            <textarea type="text" name="LongDesc" required placeholder="Lang beskrivelse af produktet"/>
          </label>
        </div>

        <div>
          <label> Image: <br/>
            <input type="file" name="productImage" required placeholder=""/>
          </label>
        </div>

        <button type="submit">Opret produkt</button>

      </form>






    </div>
    </>
  )
}

export default ProductsCreate