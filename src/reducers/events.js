import _ from 'lodash'
import {READ_EVENT, READ_EVENTS,DELETE_EVENT,UPDATE_EVENT,CREATE_EVENT} from '../actions'

export default (events = {},action) => {
    switch (action.type){
        case CREATE_EVENT:
        case UPDATE_EVENT:
        case READ_EVENT:
            const {data} = action.response
           return {...events,[data.id]:data}
        case READ_EVENTS:
            return _.mapKeys(action.response.data,'id')
        case DELETE_EVENT:
            delete events[action.id]
            return {...events}
        default:
            return events
    }
}