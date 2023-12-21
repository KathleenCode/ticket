import { ADD_TICKET, DELETE_TICKET, FETCH_TICKETS, UPDATE_TICKET } from "../actions"

const initialState = {
    tickets: []
}

export const ticketReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case ADD_TICKET: {
            return {tickets: [...state.tickets, action.payload]}
        }
        case FETCH_TICKETS: {
            // return {tickets: [...state.tickets, action.payload]}
            return {tickets: action.payload}
        }   
        case DELETE_TICKET: {
            // return {tickets: [...state.tickets, action.payload]}
            // return {
            //     tickets: state.tickets.filter((ticket) => ticket.id !== action.payload)
            // }
            return {
                tickets: state.tickets.filter((ticket) => ticket._id !== action.payload._id)
            }
        }
        case UPDATE_TICKET: {
            // return {tickets: [...state.tickets, action.payload]}
            // return {tickets: state.tickets.map((ticket) => ticket.id === action.payload ? {...ticket, workedOn: !ticket.workedOn} : ticket)}
            // return {tickets: state.tickets.map((ticket) => {
            //     if(ticket.id === action.payload) {
            //         return {...ticket, workedOn: !ticket.workedOn}
            //     } else {
            //         return ticket
            //     }
            // })}
            return {tickets: state.tickets.map((ticket) => {
                if(ticket._id === action.payload._id) {
                    return action.payload
                } else {
                    return ticket
                }
            })}
        }

        default: 
           return state
    }
}