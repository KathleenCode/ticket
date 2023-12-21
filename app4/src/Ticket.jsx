import React from 'react'
import "./App.css"
import { CiBookmarkRemove } from "react-icons/ci";
import { MdBrowserUpdated, MdFreeCancellation } from "react-icons/md";
import { UPDATE_TICKET, DELETE_TICKET } from './store/actions';
import { useDispatch } from 'react-redux';
import { updateTicketRequest, deleteTicketRequest } from './store/thunk';

export default function Ticket({data}) {
  const dispatch = useDispatch();
  // const updateTicket = (ticketId) => {
  //   dispatch({type: UPDATE_TICKET, payload: ticketId})
  // }

  // const removeTicket = (ticketId) => {
  //   dispatch({type: DELETE_TICKET, payload: ticketId})
  // }

  return (
    <div className='new' style={!data.workedOn ? {backgroundColor: "#D2E0FB"} : {backgroundColor: "#98E4FF"} }>
      <p>{data.title}</p>
      <p style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}} title={data.description}>{data.description}</p>
      {/* <button onClick={() => updateTicket(data.id)}><MdBrowserUpdated className='icon'/>{!data.workedOn ? "Attend": "Attended to"}</button> */}
      <button 
      style={!data.workedOn ? {backgroundColor: "#FFC436"} : {backgroundColor: "#FFFD8C"} } 
      onClick={() => dispatch(updateTicketRequest(data._id))}><MdBrowserUpdated className='icon'/>{!data.workedOn ? "Attend": "Attended to"}</button>
      {/* <button onClick={() => removeTicket(data.id)} title="this is a button to delete"><CiBookmarkRemove className='icon'/>Remove</button> */}
      <button onClick={() => dispatch(deleteTicketRequest(data._id))} title="this is a button to delete"><CiBookmarkRemove className='icon'/>Remove</button>
    </div>
  )
}
