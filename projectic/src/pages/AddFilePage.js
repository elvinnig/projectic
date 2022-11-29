//*Components
import UploadWidget from '../components/UploadWidget';

const AddFilePage = () => {
  return (
    <div>
      addfile page
      <UploadWidget
        buttonText='Upload File'
        folderName='file'
      />
    </div>
  );
};

export default AddFilePage;
