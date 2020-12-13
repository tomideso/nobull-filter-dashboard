import React from 'react'


const defaultProps=[
    {
        type:"Standard Consultation",
        duration:"10 min",
        medicare:"Bulk billed",
        private:"$10"
    },
    {
        type:"Long Consultation",
        duration:"20 min",
        medicare:"Bulk billed",
        private:"$10"
    },
    {
        type:"Extended Consultation",
        duration:"30 min",
        medicare:"Bulk billed",
        private:"$10"
    }
]

const AppointmentTypes = (props) => {
    return (
        <div>
            <div className="uk-text-bold uk-margin-top">Appointment Types</div>

            <table className={`
            uk-table uk-text-center 
            uk-text-small tm-table-stripe
            uk-table-responsive
            uk-table-small uk-table-divider
        `}>
                <thead>
                    <tr className="uk-background-muted">
                        <th className="uk-text-capitalize uk-text-emphasis uk-text-center"></th>
                        <th className="uk-text-capitalize uk-text-emphasis uk-text-center">Duration</th>
                        <th className="uk-text-capitalize uk-text-emphasis uk-text-center">Medicare</th>
                        <th className="uk-text-capitalize uk-text-emphasis uk-text-center">Private</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        defaultProps.map((val, i) => (
                            <tr key={i}>
                                <td className="uk-text-primary">
                                    {val.type}
                                </td>
                                <td>
                                    {val.duration}
                                </td>
                                <td>{val.medicare}</td>
                                <td>{val.private}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default AppointmentTypes
