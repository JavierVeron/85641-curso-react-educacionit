const Layout = ({children, info}) => {
    return (
        <div className={`alert ${info ? "theme-primary" : "theme-danger"} d-flex justify-content-center align-items-center`} role="alert">
            {children}
        </div>  
    )
}

export default Layout