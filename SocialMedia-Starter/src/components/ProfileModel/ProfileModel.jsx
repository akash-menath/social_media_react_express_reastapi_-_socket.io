import './ProfileModel.css'
import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModel({modelOpened,setModelOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
       size='30%'
      opened={modelOpened}
      onClose={()=>setModelOpened(false)}
    >
      {/* Modal content */}
      <form className='info-form'>
        <h3>your info</h3>
        <div>
            <input type="text" className="infoInput" name='firstName' placeholder='First Name'/>
            <input type="text" className="infoInput" name='LastName' placeholder='Last Name'/>
        </div>
        <div>
        <input type="text" className="infoInput" name='workAt' placeholder='Woork At'/>
        </div>
        <div>
        <input type="text" className="infoInput" name='LivesIn' placeholder='Lives In'/>
        <input type="text" className="infoInput" name='Contry' placeholder='Contry'/>

        </div>
        <div>
        <input type="text" className="infoInput" name='RelationshipStatus' placeholder='Relationship Status'/>

        </div>

        <div>
            Profile Image
            <input type="file"  name='profileImage'/>
            Cover Image
            <input type="file"  name='profileImage'/>
        </div>
        <button className="button infoButton">Update</button>
    </form>

    </Modal>
  );
}
export default  ProfileModel