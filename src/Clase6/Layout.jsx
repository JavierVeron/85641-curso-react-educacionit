import BaseLayout from "./BaseLayout"

const Layout = ({children, colorFuente, colorFondo}) => {   
    return (
        <div className="container my-5">
            <div className="row">
                <BaseLayout>
                    {children}
                </BaseLayout>
            </div>
        </div>
    )
}

export default Layout