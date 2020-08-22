import React from 'react'
 

function UserCardBlock(props) {

    



    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (
        props.products && props.products.map(product => (

            
            <tr key={product._id}>
                <td>
                    <img style={{ width: '70px' }} alt="product" 
                    src={renderCartImage(product.images)} />
                </td> 
                <td>{product.title}</td> 
                <td>{product.duration} </td>
                <td>{product.description}</td>
                <td><button 
                onClick={()=> props.removeItem(product._id)}
                >Remove </button> </td>
                    <td>{product.contact}</td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Item Image</th>
                        <th>Item Title</th>
                        <th>Item Duration</th>
                        <th>Item Description</th>
                        <th>Remove from Connection</th>
                        <th>Contact announcer</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
