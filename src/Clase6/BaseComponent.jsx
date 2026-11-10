const BaseComponent = ({children}) => {
    return (
        <div className="container my-10">
            <div className="row">
                <div className="col">
                    <h1>HOC (High Ordered Components)</h1>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BaseComponent