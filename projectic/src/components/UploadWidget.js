import React, { Component } from 'react';

class UploadWidget extends Component {
  componentDidMount() {
    const cloudName = 'hzxyensd5'; // replace with your own cloud name
    const uploadPreset = 'aoh4fpwm'; // replace with your own upload preset

    // Remove the comments from the code below to add
    // additional functionality.
    // Note that these are only a few examples, to see
    // the full list of possible parameters that you
    // can add see:
    //   https://cloudinary.com/documentation/upload_widget_reference

    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        // multiple: false,  //restrict upload to a single file
        folder: this.props.folderName, //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        theme: 'white', //change to a purple theme
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
          if (this.props.folderName === 'thumbnail') {
            document
              .getElementById('thumbnail')
              .setAttribute('src', result.info.secure_url);
            this.props.thumbnailSet(result.info.secure_url);
          } else {
            this.props.setFiles([
              ...this.props.getFiles,
              { ...result.info, fileType: this.props.fileType },
            ]);
            // this.props.setFileType('');
          }
        }
      }
    );
    document.getElementById('upload_widget').addEventListener(
      'click',
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id='upload_widget' className='btn btn-primary' type='button'>
        {this.props.buttonText}
      </button>
    );
  }
}

export default UploadWidget;
