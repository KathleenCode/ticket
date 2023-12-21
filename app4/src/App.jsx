import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import {v4 as uuidv4} from "uuid";
import Tickets from "./Tickets";
import { ADD_TICKET } from './store/actions';
import { MdFileDownloadDone } from "react-icons/md";
import { addTicketRequest, fetchTicketRequest } from './store/thunk';


function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const data = useSelector((data) => data.tickets.tickets);
  console.log(data)

  const createTicket = (e) => {
    e.preventDefault();
    const ticket = {
      // id: uuidv4(),
      title: title,
      description: description,
      // workedOn: false
    };
    // dispatch({type: ADD_TICKET, payload: ticket});
    dispatch(addTicketRequest(ticket));

    setTitle('');
    setDescription('');
  }

  useEffect(() => {
    dispatch(fetchTicketRequest())
  }, []);
  

  return (
    <>
      <form onSubmit={createTicket}>
        <label htmlFor="title" id="title" >Title</label>
        <input name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label htmlFor="decription" id="description" >Description</label>
        <textarea name="description" type="textarea" row={5} col={6} value={description} onChange={(e) => {setDescription(e.target.value)}} />
        <div>
        <button style={(!title || !description) ? {cursor: "not-allowed"} : {cursor: "pointer"}} disabled={!title || !description}><MdFileDownloadDone className='icon'/>Add</button>
        </div>
      </form>

      {
        data.length > 0 ? 
        (<Tickets data = {data}/>) : 
        (<p style={{color: "#9BB8CD"}}>No tickets to attend to</p>)
      }
      
    </>
  )
}

export default App
