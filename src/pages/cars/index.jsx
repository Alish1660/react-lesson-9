import React, { useState } from "react";
import UserModal from "../Modal";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [modal, setModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const deleteCar = (index) => {
    const updatedCars = [...cars];
    updatedCars.splice(index, 1);
    setCars(updatedCars);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setModal(true);
  };

  const saveEditedCar = (editedCar) => {
    const updatedCars = [...cars];
    updatedCars[editingIndex] = editedCar;
    setCars(updatedCars);
    setModal(false);
    setEditingIndex(null);
  };
  return (
    <div>
      <UserModal
        open={modal}
        toggle={() => setModal(false)}
        cars={cars}
        setCars={setCars}
        editingIndex={editingIndex}
        saveEditedCar={saveEditedCar}
      />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-10 offset-1">
            <div className="row">
              <div className="col-4">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    setModal(true);
                    setEditingIndex(null);
                  }}
                >
                  Open modal
                </button>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control"
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>T/R</th>
                <th>Name</th>
                <th>Year</th>
                <th>Color</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCars.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.year}</td>
                  <td>{item.color}</td>
                  <td>{item.brand}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteCar(index)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                      <button
                        className="btn btn-info"
                        onClick={() => startEditing(index)}
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cars;
