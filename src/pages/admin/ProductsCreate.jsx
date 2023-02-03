import React, { useEffect, useState } from 'react'
import Error from '../../components/Error'
import Loading from '../../components/Loader'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { usePostData } from '../../hooks/useRequestData'


const ProductsCreate = () => {

  const { error, loading, data, postData } = usePostData()
  
  const [message, setMessage] = useState()

  const [quillTxt, setQuillTxt] = useState();

  useEffect(() => {    

    setMessage();

    if(data && data.product){
      // Tøm formularfelter (og Quill-felt) når produkt er post'et til API'et
      document.forms[0].reset()
      setQuillTxt();

      setMessage("Nyt produkt er oprettet")
      // document.querySelector("form").reset()
      // document.querySelectorAll("form")[0].reset()
      // document.getElementsByClassName("form")[0].reset();
    }
  }, [data])
  



  const handleSubmit = (e) => {
    e.preventDefault() // VIGTIG: For at undgå reload af siden ved submit
  
    let formdata = new FormData(e.target)
    // formdata.append("LongDesc", document.querySelector("ql-editor").innerHTML )
    formdata.append('LongDesc', quillTxt)


    postData("http://localhost:5111/api/products/", formdata)

  }

  return (
    <>
    {error  && <Error />}

    {loading && <Loading />}

    {data && <h2>{message}</h2>}

    <div>

      <form onSubmit={handleSubmit} onFocus={()=> setMessage()}>
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
            {/* <textarea type="text" name="LongDesc" required placeholder="Lang beskrivelse af produktet"/> */}
            <ReactQuill theme="snow" onChange={setQuillTxt} value={quillTxt} name="LongDesc" placeholder="Lang produktbeskrivelse (formateret)" style={{backgroundColor: 'white', color: 'black'}} />
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