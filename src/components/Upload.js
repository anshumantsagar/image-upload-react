import React from 'react';
import { uploadFileMultiPart, makePostRequest, makeGetRequest, makeDeleteRequest } from '../http/http-service'

class Upload extends React.Component {
    state = {
        imageURL : '' ,
        file: ''
    }
    // _uploadImage = async (image) => {
    //     console.log('running');
    //     const file = image.target.files;
    //     const data = new FormData();
    //     data.append('file',file[0]);
    //     data.append('upload_preset','demoimages');

    //     const res = await fetch('https://api.cloudinary.com/v1_1/anshumantls/image/upload',{
    //         method:'POST',
    //         body: data
    //     });

    //     const getFile = await res.json();
        
    //     console.log(getFile);
    //     this.setState({file:getFile.url})
    // }

    _uploadImageTwo = async(image) => {
        const file = image.target.files;
        const data = new FormData();
        data.append('file',file[0]);
        data.append('upload_preset','demoimages');
        console.log(data);

        await uploadFileMultiPart('https://api.cloudinary.com/v1_1/anshumantls/image/upload',false,data).then(data => this.setState({file:data},() => console.log(this.state.file)));
    }
    
    render() {
        return(
            <div className='upload'>
                <input 
                    type='file' 
                    placeholder='upload an image'
                    onChange={this._uploadImageTwo}/>
                <div></div>
                {this.state.file ? <img src={this.state.file.url} alt='uploadedFile'/> : null}
            </div>
        );
    }
}

export default Upload;