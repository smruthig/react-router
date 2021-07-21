// const Post = ({match}) => {
//     return (
//         <div>
//             <h3>Id is = {match.params.id}</h3> 
//         </div>
//     )
// }

// export default Post

import { useLocation, useParams } from "react-router-dom"

const Post = () => {
    
    const {id} = useParams();

    const query = new URLSearchParams(useLocation().search)

    return (
        <>
            <h2>Id is = {id}</h2> 
            <h3>{query.get('first')}</h3>
            <h3>{query.get('last')}</h3>
        </>
    )
}

export default Post;
