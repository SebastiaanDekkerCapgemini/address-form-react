import { useState } from 'react'
import './App.css'

function App() {
  const [streetname, setStreetname] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [houseNumberAdditional, setHouseNumberAdditional] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [additionalInfo, setAdditionalInfo] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [allFieldsValid, setAllFieldsValid] = useState(false)

  // max length for number input elements
  const maxLength = (event) => {
    event.target.value = event.target.value.slice(
      0,
      event.target.dataset.maxlength
    )
  }

  // alphanumeric characters only
  const alphaNumericOnly = (event) => {
    const requiredRegex = new RegExp('^[a-zA-Z0-9 ]+$')
    const str = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    )
    // test if current typed character complies to allowed characters
    if (requiredRegex.test(str)) {
      return true
    }
    event.preventDefault()
    return false
  }

  // postal code validation
  const postalCodeValidation = () => {
    const postalCodeRegex = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i
    const postalCodeElement = document.getElementById('inputPostalCode')

    // test if current postal code complies to allowed dutch character-pattern
    if (postalCodeRegex.test(postalCode)) {
      toggleValidationClass(postalCodeElement, true, true)
      // add space to postal code input and change to uppercase
      if (postalCode.length === 6) {
        const spacedPostalCode =
          postalCode.substring(0, 4) +
          ' ' +
          postalCode.substring(4, postalCode.length)
        const upperCasePostalCode = spacedPostalCode.toUpperCase()
        setPostalCode(upperCasePostalCode)
      }
      return true
    } else {
      toggleValidationClass(postalCodeElement, true, false)
      return false
    }
  }

  // remove valid/invalid class if present
  const removeValidationClass = (event) => {
    const elementClassList = event.target.classList

    if (elementClassList.contains('is-invalid')) {
      elementClassList.remove('is-invalid')
    } else if (elementClassList.contains('is-valid')) {
      elementClassList.remove('is-valid')
    }
  }

  // toggle validation class
  const toggleValidationClass = (element, isUniqueValidationField, valid) => {
    if (element.value == '' && !isUniqueValidationField) {
      element.classList.add('is-invalid')
    } else if (isUniqueValidationField && !valid) {
      element.classList.add('is-invalid')
    } else {
      element.classList.add('is-valid')
    }
  }

  // hide the modal
  const hideModal = () => {
    setShowModal(false)
  }

  // handle the data when submitting the form
  const handleSubmit = (event) => {
    let allFieldsValid
    postalCodeValidation()
    event.preventDefault()

    // toggle validation class on all basic required fields
    const requiredFields = document
      .getElementById('address-form')
      .querySelectorAll('.needs-validation')
    requiredFields.forEach((element) => {
      toggleValidationClass(element)
    })

    // turn notelist into array and check if every basic required fields are filled
    const basicFieldsValidCheck = Array.from(requiredFields).every((element) =>
      element.value == '' ? false : true
    )

    if (postalCodeValidation() && basicFieldsValidCheck) {
      allFieldsValid = true
    } else {
      allFieldsValid = false
    }

    if (allFieldsValid) {
      setShowModal(true)
    }

    // works after pressing submit button 2 times, is it because of the react lifecycle of components?
    // if (postalCodeValidation() && basicFieldsValidCheck) {
    //   setAllFieldsValid(true)
    // } else {
    //   setAllFieldsValid(false)
    // }
    // if (allFieldsValid) {
    //   setShowModal(true)
    // }
  }

  return (
    <div className="container-md border bg-light p-3 mt-5">
      <header>
        <h1 className="h2 mb-4">Address Form</h1>
      </header>
      <form
        id="address-form"
        className="row g-3"
        action=""
        onSubmit={handleSubmit}
      >
        <div className="col-md-6">
          <label forhtml="inputStreet" className="form-label ">
            Street address
          </label>
          <input
            className="form-control needs-validation"
            placeholder="Street name"
            pattern="[a-zA-Z0-9 ]+"
            maxLength="30"
            id="inputStreet"
            onKeyPress={alphaNumericOnly}
            onChange={(event) => {
              removeValidationClass(event)
              setStreetname(event.target.value)
            }}
          />
          <div className="valid-feedback">Valid street name!</div>
          <div className="invalid-feedback">
            Please provide your Street name.
          </div>
        </div>
        <div className="col-6 col-md-3">
          <label forhtml="inputNumber" className="form-label">
            House number
          </label>
          <input
            type="number"
            min="1"
            max="99999"
            className="form-control needs-validation"
            placeholder="1"
            id="inputNumber"
            data-maxlength="5"
            onInput={maxLength}
            onChange={(event) => {
              removeValidationClass(event)
              setHouseNumber(event.target.value)
            }}
          />
          <div className="valid-feedback">Valid House number!</div>
          <div className="invalid-feedback">Please enter a number.</div>
        </div>
        <div className="col-6 col-md-3">
          <label forhtml="inputNumberAddition" className="form-label">
            Apt, suite
            <small className="ms-1 text-secondary">
              <em>(optional)</em>
            </small>
          </label>
          <input
            className="form-control"
            maxLength="5"
            id="inputNumberAddition"
            onKeyPress={alphaNumericOnly}
            onChange={(event) => setHouseNumberAdditional(event.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label forhtml="inputCity" className="form-label">
            City
          </label>
          <input
            className="form-control needs-validation"
            placeholder="City name"
            maxLength="30"
            id="inputCity"
            onKeyPress={alphaNumericOnly}
            onChange={(event) => {
              removeValidationClass(event)
              setCity(event.target.value)
            }}
          />
          <div className="valid-feedback">Valid City!</div>
          <div className="invalid-feedback">Please provide your City name.</div>
        </div>
        <div className="col-md-3">
          <label forhtml="inputZip" className="form-label">
            Postal code
          </label>
          <input
            className="form-control"
            placeholder="1000 AB"
            value={postalCode}
            id="inputPostalCode"
            onChange={(event) => {
              removeValidationClass(event)
              setPostalCode(event.target.value)
            }}
          />
          <div className="valid-feedback">Valid Postal code!</div>
          <div className="invalid-feedback">Please provide a Postal code.</div>
        </div>
        <div className="mb-3">
          <label forhtml="inputAdditional" className="form-label">
            Additional information
            <small className="ms-1 text-secondary">
              <em>(optional)</em>
            </small>
          </label>
          <textarea
            className="form-control"
            rows="2"
            maxLength="50"
            id="inputAdditional"
            onKeyPress={alphaNumericOnly}
            onChange={(event) => setAdditionalInfo(event.target.value)}
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit Address
          </button>
        </div>
      </form>
      <div
        className={
          'modal fade bg-dark bg-opacity-25 ' + (showModal ? 'show' : '')
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
                <li className="text-secondary">
                  <small>Additional information</small>
                </li>
                <li className="mb-3">{additionalInfo}</li>
                <li className="text-secondary">
                  <small>Address</small>
                </li>
                <li>
                  {streetname} {houseNumber} {houseNumberAdditional}
                </li>
                <li>
                  {postalCode} {city}
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
    </div>
  )
}

export default App
