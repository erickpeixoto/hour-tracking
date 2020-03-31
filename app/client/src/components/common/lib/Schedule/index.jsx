
import React, { memo } from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
const localizer = momentLocalizer(moment)
import _ from 'lodash'
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'

const Schedule = (props) => {

    let attbs = []
    const { className } = props
     
            attbs.push(className)
    const classMade = _.replace(_.compact(attbs).toString(), new RegExp(',', 'g'), ' ')
    const handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title)
            this.setState({
                events: [
                    {
                        start,
                        end,
                        title,
                    },
                ],
            })
    }
    return (
        <Calendar
            selectable
            localizer={localizer}
            events={[]}
            defaultView={Views.WEEK}
            scrollToTime={new Date(1970, 1, 1, 6)}
            defaultDate={new Date(2015, 3, 12)}
            onSelectEvent={event => alert(event)}
            onSelectSlot={handleSelect}
        />
    )
}
export default memo(Schedule)

