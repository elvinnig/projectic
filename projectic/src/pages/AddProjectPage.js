const AddProjectPage = () => {
  return (
    <div className='container border my-4'>
      <h3>New Project</h3>
      <form>
        <div className='mb-3'>
          <label htmlFor='projectName' className='form-label'>
            Project name:
          </label>
          <input
            type='text'
            className='form-control'
            id='projectName'
            placeholder='Project name'
            /* required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }} */
          />
        </div>
      </form>
    </div>
  );
};

export default AddProjectPage;
