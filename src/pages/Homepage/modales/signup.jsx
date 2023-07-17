import { Modal, Button, Text, Input } from "@nextui-org/react";
import { Mail } from "./modale-component/mail";
import { Password } from "./modale-component/password";             
import { Firstname } from './modale-component/firstname' 
import React from "react";

function ButtonSignupModale() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
  
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
return (<>
    <Button onPress={handler} className="button button-group">S'inscrire</Button>
    <Modal color='primary'
    closeButton
    preventClose
    aria-labelledby="modal-title"
    open={visible}
    onClose={closeHandler}
  >
    <Modal.Header>
      <Text id="modal-title" size={18}>
        S'inscrire
      </Text>
    </Modal.Header>
    <Modal.Body>
    <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Prénom"
        contentLeft={<Firstname fill="currentColor" size={undefined} height={undefined} width={undefined} />}
      />
      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Email"
        contentLeft={<Mail fill="currentColor" size={undefined} height={undefined} width={undefined} />}
      />
      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Mot de passe"
        contentLeft={<Password fill="currentColor" size={undefined} height={undefined} width={undefined} />}
      />
       <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Confirmer le mot de passe"
        contentLeft={<Password fill="currentColor" size={undefined} height={undefined} width={undefined} />}
      />
    </Modal.Body>
    <Modal.Footer>
      <Button auto onPress={closeHandler}>
       S'inscrire
      </Button>
    </Modal.Footer>
  </Modal>
  </>
)}

export default ButtonSignupModale
