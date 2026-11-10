import BaseComponent from "./BaseComponent"

const WithPosts = (BaseComponent) => {
    const posts = [
        {id:1, nombre:"Coca Cola", precio:5000},
        {id:2, nombre:"Coca Cola Zero", precio:4800},
        {id:3, nombre:"Pepsi", precio:4700},
        {id:4, nombre:"Pepsi Max", precio:4500}
    ]

    return function(props) {
        return (
            <BaseComponent posts={posts} {...props} />
        )
    }
}

const PostsLists = ({posts}) => {
    return (
        <ul>
            {
                posts.map(item => (
                    <li key={item.id}>{item.nombre} ${item.precio}</li>
                ))
            }
        </ul>
    )
}

export default WithPosts(PostsLists)