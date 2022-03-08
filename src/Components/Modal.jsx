const Modal = (props) => {
  // hide the modal
  const hideModal = () => {
    props.setShowModal(false)
  }

  return (
    <div
      className={
        'modal fade bg-dark bg-opacity-25 ' + (props.showModal ? 'show' : '')
      }
      id="outputModal"
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Address Form Input</h5>
            <button
              type="button"
              className="btn-close"
              onClick={hideModal}
            ></button>
          </div>
          <div className="modal-body">
            <ul className="list-unstyled">
              {props.additionalInfo && (
                <li className="text-secondary">
                  <small>Additional information</small>
                </li>
              )}
              <li className="mb-3">{props.additionalInfo}</li>
              <li className="text-secondary">
                <small>Address</small>
              </li>
              <li>
                {props.streetname} {props.houseNumber}{' '}
                {props.houseNumberAdditional}
              </li>
              <li>
                {props.postalCode} {props.city}
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={hideModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
