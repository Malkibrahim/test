import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalPost = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div >
      <Button  style={{marginLeft:"6px",
       backgroundColor:"#0E0D0D",borderRadius:"58px",height:"48px",width:"138px",fontSize:"20px",fontFamily:"tahoma"}} onClick={toggle}>Create Post</Button>
      <Modal style={{  width:'720px'}} isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader  style={{ fontSize:"20px",fontFamily:"tahoma",color:'#494848', backgroundColor:'#EBC010',width:'720px'}}toggle={toggle}>Add Post</ModalHeader>
        <ModalBody style={{ width:'720px',backgroundColor:'#F2F2F2'}}>
       

        </ModalBody>
        <ModalFooter style={{ width:'720px',backgroundColor:'#F2F2F2'}}>
          <Button style={{marginLeft:"6px",backgroundColor:'#F2F2F2',
       border:"2px solid #EBC010",borderRadius:"58px",height:"48px",width:"121px",fontSize:"20px",fontFamily:"tahoma",color:"#EBC010"}}
           onClick={toggle}>Cancel</Button>
          <Button style={{marginLeft:"6px",
       backgroundColor:"#494848",borderRadius:"58px",height:"48px",width:"121px",fontSize:"20px",fontFamily:"tahoma",color:"#EBC010"}} onClick={toggle}>Add</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalPost;