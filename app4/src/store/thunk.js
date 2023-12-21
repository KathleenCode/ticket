import { ADD_TICKET, DELETE_TICKET, FETCH_TICKETS, UPDATE_TICKET } from "./actions";

export const addTicketRequest = (ticket) => async(dispatch, getState) => {
    const body = JSON.stringify(ticket);

   try {
    const response = await fetch("http://localhost:9000/api/tickets", {
        method: "POST",
        // body: body,
        body,
        headers: {
            "Content-Type": "application/json"
        }
    });

    const ticket = await response.json();
    if(response) {
        console.log(ticket);
        dispatch({type: ADD_TICKET, payload: ticket})
    } else {
        console.log("cannot fetch tickets");
    }
   } catch(err) {
    console.log(err);
   }
}

export const fetchTicketRequest = (ticket) => async(dispatch, getState) => {
    try {
        const response = await fetch("http://localhost:9000/api/tickets", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const tickets = await response.json();
        if(response) {
            console.log(tickets);
            dispatch({type: FETCH_TICKETS, payload: tickets})
        } else {
            console.log("cannot fetch tickets");
        }
    } catch(err) {
        console.log(err)
    }
}

export const updateTicketRequest =(id) => async(dispatch, getState) => {
    try {
        const response = await fetch(`http://localhost:9000/api/tickets/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const ticket = await response.json();
        if(response) {
            console.log(ticket);
            dispatch({type: UPDATE_TICKET, payload: ticket})
        } else {
            console.log("cannot fetch ticket");
        }
    } catch(err) {
        console.log(err)
    }
}

export const deleteTicketRequest =(id) => async(dispatch, getState) => {
    console.log("This is a getState", getState());
    try {
        const response = await fetch(`http://localhost:9000/api/tickets/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const ticket = await response.json();
        if(response) {
            console.log(ticket);
            dispatch({type: DELETE_TICKET, payload: ticket})
        } else {
            console.log("cannot fetch ticket");
        }
    } catch(err) {
        console.log(err)
    }
}