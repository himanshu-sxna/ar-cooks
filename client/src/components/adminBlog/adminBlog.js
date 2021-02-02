import React,  { useState, useRef, useEffect } from "react";
import { MDBBtn, 
         MDBRow ,
         MDBCol, 
         MDBContainer,
         MDBTypography } from "mdbreact";
import Spinner from "../utils/Spinner";
import API from "../../utils/API";

function BlogForm(){

    const [ fileName, setFileName ] = useState(["Upload image file for Blog - required"]);
    const [ previewSource, setPreviewSource ] = useState('');
    const [ selectedFile, setSelectedFile ] = useState();
    const [ imageUrl, setImageUrl ] = useState();
    const [ postTitle, setPostTitle ] = useState ();
    const [ postAuthor, setPostAuthor ] = useState ();
    const [ postBody, setPostBody ] = useState ();
    const [ processingPost, setProcessingPost ] = useState(false);
    const [ dataSuccess, setDataSuccess ] = useState("");

    const titleRef = useRef();
    const nameRef= useRef();
    const articleRef = useRef();
    const imgRef = useRef();

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
    }

    function submitForm(e){
       
        e.preventDefault();
        if (titleRef.current.value <= 0 ){
            alert(" Please fill in Title");
        } else if (nameRef.current.value <= 0 ) {
            alert(" Please fill in Author name");
        } else if (articleRef.current.value <= 0 ) {
            alert("Please fill in body for Blog");
        } else if (!previewSource){
            alert("Please attach an image");
        } else {
            uploadImage();
            titleRef.current.value = "";
            nameRef.current.value = ""
            articleRef.current.value = "";
            setFileName("");
            setProcessingPost(true);
        }
    };

    useEffect (()=> {
        if(imageUrl){
            const postData = {
                title: postTitle,
                author: postAuthor,
                body: postBody,
                imageURL: imageUrl
            }
            API.postJournalData(postData)
                .then((res)=> {
                    console.log(res);
                    setProcessingPost(false);
                    setPreviewSource("");
                    setDataSuccess("Great. Your post is ready to be viewed.");
                })
                .catch((err) => {
                    console.log(err);
                    setDataSuccess("Sorry. Error posting Journal data.");
                })
        }
    }, [imageUrl]);

    return(
        <MDBContainer className="mt-3">
            <MDBRow className="text-center">
                <MDBCol className="mb-3">
                    <MDBTypography tag="h2" variant="h2-responsive" >
                        Create a Journal Post
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
                            Blog Title
                        </label>
                        <input 
                            id="title"
                            name="title"
                            type="text"
                            className="form-control"
                            placeholder="Blog Title - required"
                            required
                            ref={titleRef}
                            onChange={(e)=> setPostTitle(e.target.value)}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please provide a valid title</div>
                    </MDBCol>
                    <MDBCol className="mb-3">
                        <label className="grey-text" htmlFor="name">
                            Author Name
                        </label>
                        <input 
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Author Name - required"
                            required
                            ref={nameRef}
                            onChange={(e)=> setPostAuthor(e.target.value)}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please provide a valid name</div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className="mb-3">
                        <label className="grey-text" htmlFor="title">
                            Blog Article
                        </label>
                        <textarea
                            id="title"
                            type="text"
                            rows="10"
                            className="form-control"
                            placeholder="Blog Article - required"
                            required
                            ref={articleRef}
                            onChange={(e)=> setPostBody(e.target.value)}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please check blog article</div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className="mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text" id="inputBlogFile">
                                Upload Image
                            </span>
                            </div>
                            <div className="custom-file">
                                <input
                                    onChange={handleInputChange}
                                    type="file"
                                    className="custom-file-input"
                                    id="inputBlogFile"
                                    aria-describedby="inputBlogFile"
                                    required
                                    ref={imgRef}
                                />
                                <label className="custom-file-label" htmlFor="inputBlogFile">
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
            { processingPost && (
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
    );
}

export default BlogForm;
