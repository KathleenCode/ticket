// import React from 'react';
// import { DELETE_TICKET, UPDATE_TICKET } from './store/actions';
// import {useSelector, useDispatch} from "react-redux";
// import { CiBookmarkRemove } from "react-icons/ci";
// import { MdBrowserUpdated, MdFreeCancellation } from "react-icons/md";

// export default function Tickets() {
//     const dispatch = useDispatch();
//     const data = useSelector((data) => data.tickets.tickets);

    
//   const removeTicket = () => {
//     const remticket = data.filter((id) => (data.id !== id));
//     dispatch({type: DELETE_TICKET, payload: remticket})
//   }
  
  
//   const updateTicket = () => {
//     const upTicket = 
//     data.map((id) => (id === data.id) (
//     {...data, workedOn: !data.workedOn}
//     ))
//     dispatch({type: UPDATE_TICKET, payload: upTicket})
//   }

  // return (
  //   <>
  //   {
  //       data.map((tick, i) => (
  //           <div key={i} className="new">
  //               <p>Title:{tick.title}</p>
  //               <p>Description:{tick.description}</p>
  //               <button onClick={() => updateTicket()}><MdBrowserUpdated className='icon'/>Update</button>
  //               <button onClick={() => removeTicket()}><CiBookmarkRemove className='icon'/>Remove</button>
  //           </div>
  //       ))
  //   }
  //   </>
  // )
// }



import Ticket from './Ticket';

export default function Tickets({data}) {
  return (
    <main style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
       {
      data.map((data) =>
      (
        <Ticket data={data} key={data.id}/>
      ))
    }
    </main>
  )
}
