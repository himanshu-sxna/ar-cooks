import React,  { useState, useRef, useEffect } from "react";
import { MDBBtn, 
         MDBRow ,
         MDBCol, 
         MDBContainer,
         MDBTypography } from "mdbreact";
import Spinner from "../utils/Spinner";
import API from "../../utils/API";

function ProductForm(){

    const [ fileName, setFileName ] = useState(["Upload Product image - required"]);
    const [ previewSource, setPreviewSource ] = useState('');
    const [ selectedFile, setSelectedFile ] = useState();
    const [ imageUrl, setImageUrl ] = useState();
    const [ prodName, setProdName ] = useState ();
    const [ prodID, setProdID ] = useState ();
    const [ prodPrice, setProdPrice ] = useState ();
    const [ prodStock, setProdStock ] = useState ();
    const [ prodDesc, setProdDesc ] = useState ();
    const [ processingProduct, setProcessingProduct ] = useState(false);
    const [ dataSuccess, setDataSuccess ] = useState("");

    const nameRef= useRef();
    const IDRef = useRef();
    const priceRef = useRef();
    const descRef = useRef();
    const stockRef= useRef();

    function previewFile(file){
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    }

    function handleInputChange(e) {
        const file = e.target.files[0];
        previewFile(file);
        setFileName(e.target.files[0].name);
        setSelectedFile(file);
    }

    function uploadImage () {
        const formData = new FormData();
        formData.append("file", selectedFile)
        formData.append("upload_preset","smb-temp")
        formData.append("cloud_name", "dqaixz5dw")
        fetch("https://api.cloudinary.com/v1_1/dqaixz5dw/image/upload",{
            method: "POST",
            body: formData
        })
        .then(res=>res.json())
        .then((res) => {
            setImageUrl(res.secure_url)
        }).catch((err) => console.log(err));
    };

    function submitForm(e){
       
        e.preventDefault();
        if (nameRef.current.value <= 0 ){
            alert(" Please provide product name");
        } else if (IDRef.current.value <= 0 ) {
            alert(" Please provide Product ID");
        } else if (descRef.current.value <= 0 ) {
            alert("Please provide a Product description");
        } else if (priceRef.current.value <= 0 ) {
            alert("Please provide a Product price");
        } else if (stockRef.current.value <= 0 ) {
            alert("Please provide Product stock count");
        } else if (!previewSource){
            alert("Please attach an image");
        } else {
            uploadImage();
            nameRef.current.value = "";
            IDRef.current.value = ""
            descRef.current.value = "";
            priceRef.current.value = "";
            stockRef.current.value = "";
            setFileName("");
            setProcessingProduct(true);
        }
    };

    useEffect (()=> {
        if(imageUrl){
            const prodData = {
                name: prodName,
                productID: prodID,
                description: prodDesc,
                price: prodPrice,
                inventory: prodStock,
                imageUrl: imageUrl
            }
            API.uploadProducts(prodData)
                .then((res)=> {
                    console.log(res);
                    setProcessingProduct(false);
                    setPreviewSource("");
                    setDataSuccess("Great. Your product has been uploaded");
                })
                .catch((err) => {
                    console.log(err);
                    setProcessingProduct(false);
                    setDataSuccess("Sorry. Error uploading product");
                    setPreviewSource("");
                })
        }
    }, [imageUrl]);

    return(
        <MDBContainer className="mt-3">
            <MDBRow className="text-center">
                <MDBCol className="mb-3">
                    <MDBTypography tag="h2" variant="h2-responsive" >
                       Upload a new Product
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
            <MDBRow className="text-center">
                <MDBCol className="mb-3">
                    <MDBTypography tag="p">
                        Please note <strong>all</strong> fields are required
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
            <form onSubmit={submitForm} noValidate enctype="multipart/form-data">
                <MDBRow>
                    <MDBCol className="mb-3">
                        <label className="grey-text" htmlFor="title">
                            Product Name
                        </label>
                        <input 
                            id="title"
                            name="title"
                            type="text"
                            className="form-control"
                            placeholder="Produc Name - required"
                            required
                            ref={nameRef}
                            onChange={(e)=> setProdName(e.target.value)}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please provide a product name</div>
                    </MDBCol>
                    <MDBCol className="mb-3">
                        <label className="grey-text" htmlFor="name">
                            Product ID
                        </label>
                        <input 
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Product ID - required"
                            required
                            ref={IDRef}
                            onChange={(e)=> setProdID(e.target.value)}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please provide a product ID</div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className="mb-3">
                        <label className="grey-text" htmlFor="name">
                            Product Price
                        </label>
                        <input 
                            id="price"
                            type="number"
                            className="form-control"
                            placeholder="Product price is required"
                            required
                            ref={priceRef}
                            onChange={(e)=> setProdPrice(e.target.value)}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please provide a price</div>
                    </MDBCol>
                    <MDBCol className="mb-3">
                        <label className="grey-text" htmlFor="name">
                            Product Inventory
                        </label>
                        <input 
                            id="stock"
                            type="number"
                            className="form-control"
                            placeholder="Product stock is required"
                            required
                            ref={stockRef}
                            onChange={(e)=> setProdStock(e.target.value)}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please provide product stock count</div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className="mb-3">
                        <label className="grey-text" htmlFor="title">
                            Product Description
                        </label>
                        <textarea
                            id="desc"
                            type="text"
                            rows="10"
                            className="form-control"
                            placeholder="Product description - required"
                            required
                            ref={descRef}
                            onChange={(e)=> setProdDesc(e.target.value)}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please check blog article</div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className="mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text" id="inputProductFile">
                                Upload Image
                            </span>
                            </div>
                            <div className="custom-file">
                                <input
                                    onChange={handleInputChange}
                                    type="file"
                                    className="custom-file-input"
                                    id="inputProductFile"
                                    aria-describedby="inputProductFile"
                                    required
                                />
                                <label className="custom-file-label" htmlFor="inputProjectFile">
                                    {fileName}
                                </label>
                            </div>
                        </div>
                    </MDBCol>
                    { previewSource && (
                        <MDBCol className="mb-3">
                            <img src={previewSource} alt="upload-img" style={{ height:100, width:100, borderRadius:5 }}></img>
                        </MDBCol>
                    )}
                </MDBRow>
                
                <MDBRow className="text-center">
                    <MDBCol>
                        <MDBBtn type="submit" color="danger" onClick={(e)=>submitForm(e)}>Submit</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </form>
            { processingProduct && (
                    <MDBRow className="text-center">
                        <MDBCol className="my-3">
                            <Spinner/>
                        </MDBCol>
                    </MDBRow>
                )}
            <MDBRow className="text-center">
                <MDBCol>
                    <MDBTypography tag="p">
                        {dataSuccess}
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )

}

export default ProductForm;