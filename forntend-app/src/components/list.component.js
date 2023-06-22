import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductList() {

    

    const [products, setProducts] = useState([])
    

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        await axios.get('http://127.0.0.1:8000/api/products').then(({ data }) => {setProducts(data)}) 
    }

    const deleteProduct = async (id) => {
        await axios.delete('http://127.0.0.1:8000/api/products/' + id)
            .then(({ data }) => {
                console.log(data.message)
                fetchProducts();
            }).catch(({ response: { data } }) => {
                console.log(data.message)
            })
    }

   

 

    return (


        <div class="min-h-screen bg-slate-100 py-5">
        <div class='overflow-x-auto w-full'>
            <table class='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                <thead class="bg-gray-900">
                    <tr class="text-white text-left">
                        <th class="font-semibold text-sm uppercase  px-10 py-4 text-center"> mesures</th>
                        <th class="font-semibold text-sm uppercase px-6 py-4 text-center">  information </th>
                        <th class="font-semibold text-sm uppercase px-6 py-4 text-center"> Action </th>
                        {/* <th class="font-semibold text-sm uppercase px-6 py-4"> </th> */}
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                {
                  products.length > 0 && (
                  products.map((row,key)=>(
                    <tr key={key}>
                        <td class="px-6 py-4">
                            <div class="flex items-center space-x-3">
                                <div class="inline-flex w-20 h-20"> <img class='w-23 h-23 object-cover rounded-full' alt='User avatar' src={`http://127.0.0.1:8000/storage/product/image/${row.image }`} /> </div>
                                <div>
                                    <p> {row.title} </p>
                                    {/* <p class="text-gray-500 text-sm font-semibold tracking-wide"> mirarodeo23@mail.com </p> */}
                                </div>
                            </div>
                        </td>
                        <td class="py-4">
                            <p class=""> {row.description} </p>
                            {/* <p class="text-gray-500 text-sm font-semibold tracking-wide"> Development </p> */}
                        </td>
                        {/* <td class="px-6 py-4 text-center"> Developer </td> */}
                        <td class="py-4 text-center"> <Link to={`/product/edit/${row.id}`}
  class="inline-block rounded border border-green-600 bg-green-600 px-2 mx-2 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:text-indigo-500">
  Edit
</Link> 
<button   onClick={() => deleteProduct(row.id)}
  class="inline-block rounded border border-red-600 bg-red-600 px-2 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:text-indigo-500"
  
>
 Delete
</button> </td>
                    </tr>
                      ))
                                                   )
                                            }
                </tbody>
            </table>
        </div>
    </div>


        // <div className="container">
        //     <div className="row">
        //         <div className="conl-12">
        //             <Link className="btn btn-primary mb-2 float-end" to={"/product/create"}>Create</Link>
        //             <div className="col-12">
                       

        //                 <table className="table table-striped">
        //                     <thead>
        //                         <tr> 
        //                             <th scope="col">maladie</th>
        //                             <th scope="col">Rapport de mesure</th>
        //                             <th scope="col">image d'un appareil de mesure</th>
        //                             <th scope="col"></th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {
        //                             products.length > 0 && (
        //                                 products.map((row,key)=>(
        //                                     <tr key={key}> 
        //                                         <td>{row.title}</td>
        //                                         <td>{row.description}</td>
        //                                         <td>
        //                                             <img width="100px" src={`http://127.0.0.1:8000/storage/product/image/${row.image }`} /> 
        //                                         </td>
        //                                         <td>
        //                                             <Link className="btn btn-success mb-2 float-end" to={`/product/edit/${row.id}`}>Edit</Link>
        //                                         </td>
        //                                         <td>
        //                                             <button className="btn btn-danger" onClick={() => deleteProduct(row.id)}>  Delete</button>
        //                                             </td>
        //                                     </tr> 
        //                                 ))
        //                             )
        //                         }
                               
        //                     </tbody>
        //                 </table>



        //             </div>
        //         </div>

        //     </div>

        // </div>
    )




}