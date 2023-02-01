import React from 'react'

const TodoCard = ({t}) => {
    return (
        
            <div className="card h-100">
                <div className="card-body">
                    <h4>{t.fields.Todos}</h4>
                    <p>{t.fields.Name}</p>
                    <p>
                        {new Date(t.createdTime).toLocaleString("da-dk", { year: "numeric", month: "short", day: "numeric" })}
                        &nbsp;kl.&nbsp;
                        {new Date(t.createdTime).toLocaleTimeString("da-dk", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                </div>
            </div>
        
    )
}

export default TodoCard