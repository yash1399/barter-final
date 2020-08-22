import React, { useState } from 'react'
// import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';
import { Form,Row, Col, Container, Nav, Navbar } from 'react-bootstrap';



const Categories = [
    { key: 1, value: "Electronics" },
    { key: 2, value: "Apparel" },
    { key: 3, value: "Accessories" },
    { key: 4, value: "PC Parts " },
    { key: 5, value: "Books" },
    { key: 6, value: "Car Parts" },
    { key: 7, value: "Misc" }
]

function UploadProductPage(props) {
    const [title, setTitle] = useState();
    const [description, setDescription] =useState(); 
    const [duration, setDuration] =useState();
    const [barter, setBarter] = useState(); 
    const [file, setSelectedfile] = useState(null);
    const [cat, setCat] = useState();
    const [contact, setContact] = useState();


    const [Images, setImages] = useState([])

    // const onTitleChange = (event) => {
    //     setTitleValue(event.currentTarget.value);
    // }

    // const onDescriptionChange = (event) => {
    //     setDescriptionValue(event.currentTarget.value);
    // }

    // const onDurationChange = (event) => {
    //     setDuration(event.currentTarget.value);
    // }

    // const onBarterChange = (event) => {
    //     setBaterItemValue(event.currentTarget.value);
    // }
    // const onCategoryChange = (event) => {
    //     setCategoryChange(event.currentTarget.value)
    // }


    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!title || !description || !duration ||
            !cat || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title,
            description,
            images: Images,
            duration,
            barter,
            cat,
            contact
        

        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })
            .then(()=>{
                setTitle('');
                setDescription('');
                setBarter('');
                setImages();
                setDuration('')
                setCat('Select the category it belongs to')
                setContact('')
            })

    }

    return (
        <>
        <Container>
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1>Upload Post</h1>
                </div>

                <Form onSubmit={onSubmit} encType="multipart/form-data">
                    <Form.Group>
                      <FileUpload refreshFunction={updateImages}/>
                    </Form.Group>
                    
                    <Form.Group >
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                        onChange={(e) => {setTitle(e.target.value)}}
                        value={title} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3"
                        onChange={(e) => {setDescription(e.target.value)}}
                        value={description} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control required className="text-center" as="select" value={cat} onChange={(e) =>{setCat(e.target.value)}}>
                           {Categories.map(item => (
                               <option key={item.key} value={item.key}>{item.value}</option>
                           ))}
                           
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Duration</Form.Label>
                        <Form.Control as="textarea" row="3"
                          onChange={(e) => {setDuration(e.target.value)}}
                          value={duration} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Item Wanted</Form.Label>
                        <Form.Control  
                        onChange={(e) => {setBarter(e.target.value)}}
                        value={barter} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contact</Form.Label>
                        <Form.Control
                        onChange={(e)=> {setContact(e.target.value)}}
                        value={contact}>
                            
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <button className="button"onSubmit={onSubmit}>Submit</button>
                    </Form.Group>

                </Form>
            </div>
        </Container>
        </>
    )
}

export default UploadProductPage
