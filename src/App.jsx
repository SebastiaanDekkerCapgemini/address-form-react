import { useState } from 'react'

function App() {
  const [streetname, setStreetname] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [houseNumberAdditional, setHouseNumberAdditional] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [additionalInfo, setAdditionalInfo] = useState('')

  const maxLength = (event) => {
    event.target.value = event.target.value.slice(
      0,
      event.target.dataset.maxlength
    )
  }

  const alphaNumericOnly = (event) => {
    const requiredRegex = new RegExp('^[a-zA-Z0-9 ]+$')
    var str = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    )
    if (requiredRegex.test(str)) {
      return true
    }
    event.preventDefault()
    return false
  }

  const handleSubmit = (event) => {
    const requiredFields = document
      .getElementById('address-form')
      .querySelectorAll('.needs-validation')

    requiredFields.forEach((element) => {
      if (element.value == '') {
        element.classList.add('is-invalid')
        event.preventDefault()
      } else {
        element.classList.add('is-valid')
      }
    })
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
            pattern="[a-zA-Z0-9]+"
            maxLength="30"
            id="inputStreet"
            onKeyPress={alphaNumericOnly}
            onChange={(event) => setStreetname(event.target.value)}
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
            onChange={(event) => setHouseNumber(event.target.value)}
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
            onChange={(event) => setCity(event.target.value)}
          />
          <div className="valid-feedback">Valid City!</div>
          <div className="invalid-feedback">Please provide your City name.</div>
        </div>
        <div className="col-md-3">
          <label forhtml="inputZip" className="form-label">
            Postal code
          </label>
          <input
            className="form-control needs-validation"
            placeholder="1000 AB"
            id="inputZip"
            onChange={(event) => setPostalCode(event.target.value)}
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
    </div>
  )
}

export default App
