import React, { useEffect, useState } from "react";
import { obtenerTodos } from "../../services/InventarioService";
// import { obtenerTodosUsuarios } from "../../services/UsuarioService";

export default function Modal({ inventario, changeInventario }) {
//   const [usuarios, setUsuarios] = useState([]);
    const [inventarios, setInventarios] = useState([]);
    const [estado, setEstado] = useState({
        _id: "",
        nombre: "",
        estado: true,
      });

//   useEffect(() => {
//     const getUsuarios = () => {
//       obtenerTodosUsuarios()
//         .then((r) => {
//           console.log(r);
//           setUsuarios(r.data);
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     };
//     getUsuarios();
//   }, []);
    
useEffect(() => {
    const getInventarios = () => {
      obtenerTodos()
        .then((r) => {
          console.log(r);
          setInventarios(r.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getInventarios();
  }, []);
    
  return (
    <div
      className="modal fade"
      id="modalInventarios"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Agregar Inventario
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="needs-validation" novalidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="serial" className="form-label">
                    Serial
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="serial"
                    placeholder=""
                    name="serial"
                    value={inventario.serial}
                    required
                    onChange={changeInventario}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="modelo" className="form-label">
                    Modelo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="modelo"
                    placeholder=""
                    required
                    name="modelo"
                    value={inventario.modelo}
                    onChange={changeInventario}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="descripcion" className="form-label">
                    Descripción
                    <span className="text-muted">(Optional)</span>
                  </label>
                  <div className="input-group has-validation">
                    <textarea
                      name="descripcion"
                      className="form-control"
                      id="descripcion"
                      placeholder="Aquí descripción..."
                      value={inventario.descripcion}
                      onChange={changeInventario}
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="color" className="form-label">
                    Color <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="color"
                    placeholder="verde"
                    name="color"
                    value={inventario.color}
                    onChange={changeInventario}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="precio" className="form-label">
                    Precio
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="precio"
                    name="precio"
                    placeholder="1000"
                    value={inventario.precio}
                    onChange={changeInventario}
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-md-5">
                  <label htmlFor="usuario" className="form-label">
                    Usuario
                  </label>
                  <select className="form-select" id="usuario" required="">
                    <option value="">Selecciona uno...</option>
                    {inventarios.map((u) => {
                      return <option value={u._id}>{u.nombre}</option>;
                    })}
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="state" required="">
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                />
                <label className="form-check-label" htmlFor="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="save-info"
                />
                <label className="form-check-label" htmlFor="save-info">
                  Save this information for next time
                </label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked=""
                    required=""
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required=""
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
