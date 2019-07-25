import React from "react";

const ListAppointment = ({ appointments }) => {
  return (
    <div className="appointment-list item-list mb-3">
      {appointments.map((appointment,i) => (
        <div className="pet-item col media py-3" key={i}>
          <div className="mr-3">
            <button className="pet-delete btn btn-sm btn-danger">X</button>
          </div>

          <div className="pet-info media-body">
            <div className="pet-head d-flex">
              <span className="pet-name"> {appointment.petName} </span>
              <span className="apt-date ml-auto"> {appointment.aptDate} </span>
            </div>

            <div className="owner-name">
              <span className="label-item">Owner: </span>
              <span>{appointment.ownerName}</span>
            </div>

            <div className="apt-notes"> {appointment.aptNotes} </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListAppointment;
