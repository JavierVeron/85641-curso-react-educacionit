const Loading = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="spinner-border" style={{width:"3rem", height:"3rem"}} role="status">
                        <span className="visually-hidden">Loading…</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading