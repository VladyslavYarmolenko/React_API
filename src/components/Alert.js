import React, {useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Alert = () => {
  const {alert, hide} = useContext(AlertContext)
  const alertState = alert.state;


  return (

   (alertState && alertState.visible) && <div className={`alert alert-${alertState.type || 'warning'} alert-dismissible`}>
      <strong>Внимание!</strong>
        &nbsp;{alert.state.text}
      <button onClick={hide} type="button" className="close"  aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    
   
  )
}