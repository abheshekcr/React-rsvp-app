import React from 'react'
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest'

const GuestList = (props)=>{
    return(
    <ul>  
        <PendingGuest name={props.pendingGuest}/>
         {props.guests
         .filter(guest => !props.isFiltered || guest.isConfirmed)
         .map((guest,index)=> 
         <Guest key={index}
          name={guest.name} 
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          removeGuestAt={()=>{props.removeGuestAt(index)}}
          handleConfirmation={()=>{props.toggleConfirmationAt(index)}}
          handleToggleEditing={()=>{props.toggleEditingAt(index)}}
          setName={text =>{props.setNameAt(text,index)}}/>
             )} 
  </ul>
    );

}

GuestList.PropTypes={
    guests:PropTypes.array.isRequired,
    toggleConfirmationAt:PropTypes.func.isRequired,
    toggleEditingAt:PropTypes.func.isRequired,
    setNameAt:PropTypes.func.isRequired,
    isFiltered:PropTypes.bool.isRequired,
    removeGuestAt:PropTypes.func.isRequired,
    PendingGuest:PropTypes.string.isRequired
}

export default GuestList;