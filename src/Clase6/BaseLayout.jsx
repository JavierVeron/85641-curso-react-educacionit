const BaseLayout = ({children, colorFuente, colorFondo}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col p-5" style={{color:colorFuente, backgroundColor:colorFondo}}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BaseLayout