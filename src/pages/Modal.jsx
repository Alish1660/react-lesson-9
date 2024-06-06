import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const UserModal = (props) => {
  const [form, setForm] = useState({}); // Initialize form state properly

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { cars, setCars, toggle } = props;
    setCars([...cars, form]); // Update cars state with the new form data
    toggle();
  };

  return (
    <Modal isOpen={props.open} toggle={props.toggle}>
      <ModalHeader>
        <h1>Add User</h1>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} id="submit">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="form-control my-2"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            className="form-control my-2"
            onChange={handleChange}
          />
          <input
            type="date"
            placeholder="Year"
            name="year"
            className="form-control my-2"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Color"
            name="color"
            className="form-control my-2"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Brand"
            name="brand"
            className="form-control my-2"
            onChange={handleChange}
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={props.toggle}>
          Cancel
        </button>
        <button className="btn btn-success" type="submit" form="submit">
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
