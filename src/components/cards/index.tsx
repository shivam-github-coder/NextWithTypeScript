import React, { useEffect, useState } from "react";
const axios = require('axios');

// import data from "@public/meta.json";
import { PencilAltIcon, PencilIcon, XCircleIcon, XIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/client"



export const Cards: React.FC = () => {
  const [session, loading] = useSession()

  const [modal,setModel] = useState(0); 
  const [updateData,setUpdataData] = useState({
    id:'',
    text:''
  }); 

  

  const [textdata, settextdata] = useState({
    id:0,
    text:''
  })
  const [data, setdata] = useState([])

  const GetData = async () => {
    await axios.get('/api/user')
    .then(function (response:any) {
      setdata(response.data);
    })
  }
  // Math.floor(Math.random()*1000000))
  useEffect(() => {
    GetData()
    console.log(data);
  }, [])

  // useEffect(() => {
  //   console.log("data shivam:",textdata);
  // }, [textdata])

  const handleSubmit = async (textdatas:any) => {
      console.log("textdata :",textdatas)
      await axios.post('/api/user', {id:( textdatas.id ? textdatas.id : Math.floor(Math.random()*1000000) ) ,Comment:textdatas.text})
      GetData()
      settextdata({id:0,text:''})
      setModel(0)
      // console.log(data);

  }

  const handleUpdateData = async (textdatas:any) => {
      console.log("textdata :",textdatas)
      await axios.put('/api/user', {id:( textdatas.id ? textdatas.id : Math.floor(Math.random()*1000000) ) ,Comment:textdatas.text})
      GetData()
      setUpdataData({id:'',text:''})
      setModel(0)
      // console.log(data);

  }

  const HandleDelete = async (id:any)  =>{
    await axios.delete(`/api/user/${id}`);
    GetData()
  } 

  const handleUpdate = async (ids:any) => {
    // const keys = parseInt(ids)
      // 
      //   
      data.map(({text,id}:any)=>{
        if(id === ids )
        {
            setModel(id)
            setUpdataData({
              id:id,
              text:text,
            })

          }
        })


  }

  return (
    <div className=" container my-8 max-w-screen-lg mx-auto p-5 ">
      <h1 className=' flex items-center justify-center text-5xl rounded-full bg-red-400 p-3 text-white'>Todo List</h1>
     {session != null ?  <div className='flex items-center justify-center mt-3 '>
        <form onSubmit={e =>{ e.preventDefault(),handleSubmit(textdata)}}>
        <input type='text' value={textdata.text} onChange={e => settextdata({id:0,text:e.target.value})} required  placeholder='Please Text Here...' className='bg-green-400 text-black placeholder-black w-96 p-3 rounded-tl-lg rounded-bl-lg focus:ring-2 focus:ring-blue-600 outline-none' />
        <button type='submit'className='bg-blue-600 p-3 text-1xl text-white rounded-tr-2xl rounded-br-2xl focus:ring-red-500'>Submit</button>
        </form>
      </div>
      : ''
      }

      <ul className='mt-8 justify-center items-center flex flex-col'>
        {
          
          (data?.length > 0)
          ?
          data.map(({text,id}:any) => <div key={id}  className={(id != modal) ? ' flex items-center border-4  p-3 rounded-full mb-3  ': 'hover:shadow-lg  border-red-400 flex items-center border-4  p-3 rounded-full mb-3 '}  >
          <PencilAltIcon onClick={() => handleUpdate(id)} className='transition duration-150 hover:scale-150  transform  h-10 mr-4 cursor-pointer border-red-400 border-4 rounded-full p-1 ' />
          <li key={id} className='text-3xl'>{(id === modal) ? <> <input type='text' onKeyDown={e => (e.key === 'Enter' && handleUpdateData(updateData) )} value={updateData.text}  onChange={e => setUpdataData({...updateData,text:e.target.value}) } /> </>: <> {text} </>}</li>
          <XCircleIcon onClick={() => HandleDelete(id)}  className='transition duration-150 hover:scale-150 transform  h-10 ml-4 border-red-400 border-4 rounded-full cursor-pointer p-1' />
        </div>
          )
          :
          <h1 className='animate-ping'>Data not Found</h1>


        }
      </ul>
    </div>
  );
};
