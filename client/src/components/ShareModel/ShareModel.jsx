
import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../postShare/PostShare';

function ShareModel({modelOpened,setModelOpened}) {
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
      <PostShare/>

    </Modal>
  );
}
export default  ShareModel