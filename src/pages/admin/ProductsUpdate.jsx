import React, { useEffect, useState } from 'react'
import Error from '../../components/Error'
import Title from '../../components/Title'
import Loading from '../../components/Loader'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';

import { useGetData, usePutData } from '../../hooks/useRequestData'


const ProductsUpdate = () => {

  // parameter i url - produktets id (id navngives i App.jsx path til ret)
  const { id } = useParams();

  const { error, loading, data: products, getData } = useGetData()
  const { error: errorPut, loading: loadingPut, data: dataPut, putData } = usePutData()
  const [message, setMessage] = useState()
  // state til tekst fra Quill
  const [quillTxt, setQuillTxt] = useState();

  useEffect(() => {

    // hent data or det produkt som matcher params id
    getData("http://localhost:5111/api/products/" + id)

  }, [])

  useEffect(() => {

    setMessage();

    if (dataPut && dataPut.product) {

      setQuillTxt();

      setMessage("Produkt er rettet")
    }
  }, [dataPut])


  const handleSubmit = (e) => {
    e.preventDefault() // VIGTIG: For at undgå reload af siden ved submit

    let formdata = new FormData(e.target)
    // // formdata.append("LongDesc", document.querySelector("ql-editor").innerHTML )
    formdata.append('LongDesc', quillTxt)


    putData("http://localhost:5111/api/products/" + id, formdata)

  }

  return (
    <div className='productUpdate container'>

      <Title headline="Ret produkt" />

      {(error || errorPut) && <Error />}

      {(loading || loadingPut) && <Loading />}

      {message && <h2>{message}</h2>}

      <div className='row'>
        <div className='col'>
          
          {products &&
            <form onSubmit={handleSubmit}>
              <div>
                <label> Produktets navn: <br />
                  <input type="text" name="name" defaultValue={products.name} required placeholder="Produktets navn" />
                </label>
              </div>

              <div>
                <label> Pris: <br />
                  <input type="text" name="price" defaultValue={products.price} required placeholder="" />
                </label>
              </div>

              <div>
                <label> Short Description: <br />
                  <textarea name="ShortDesc" defaultValue={products.ShortDesc} required placeholder="Kort Beskrivelse af produktet" />
                </label>
              </div>

              <div>
                <label> Long Description: <br />
                  {/* <textarea type="text" name="LongDesc" required placeholder="Lang beskrivelse af produktet"/> */}
                  <ReactQuill theme="snow" onChange={value => setQuillTxt(value)} defaultValue={products.LongDesc} name="LongDesc" placeholder="Lang produktbeskrivelse (formateret)" style={{ backgroundColor: 'white', color: 'black' }} />
                </label>
              </div>

              <div>
                <label> Nuværende billede - Vælg evt. et andet (overskriver eksisterende)<br />
                <img src={'http://localhost:5111/images/' + products.productImage} width='150' alt='Product'/>
                  <input type="file" name="productImage" required placeholder="" />
                </label>
              </div>

              <button type="submit">Ret produkt</button>

            </form>

          }

        </div>
      </div>

    </div>
  )
}


export default ProductsUpdate