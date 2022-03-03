function App() {
  const maxLength = (event) => {
    event.target.value = event.target.value.slice(
      0,
      event.target.dataset.maxlength
    )
  }
  const alphaNumericOnly = (event) => {
    const requiredRegex = new RegExp('^[a-zA-Z0-9]+$')
    var str = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    )
    if (requiredRegex.test(str)) {
      return true
    }
    event.preventDefault()
    return false
  }
  return (
    <div className="container-md border bg-light p-3 mt-5">
      <header>
        <h1 className="h2 mb-4">Address Form</h1>
      </header>
      <form className="row g-3">
        <div className="col-md-6">
          <label forhtml="inputStreet" className="form-label">
            Street address
          </label>
          <input
            className="form-control is-valid"
            placeholder="Street name"
            pattern="[a-zA-Z0-9]+"
            maxLength="30"
            id="inputStreet"
            onKeyPress={alphaNumericOnly}
            required
          />
          <div className="valid-feedback d-block">Valid street name!</div>
        </div>
        <div className="col-6 col-md-3">
          <label forhtml="inputNumber" className="form-label">
            House number
          </label>
          <input
            type="number"
            min="1"
            max="99999"
            className="form-control is-invalid"
            placeholder="1"
            id="inputNumber"
            data-maxlength="5"
            onInput={maxLength}
            required
          />
          <div className="invalid-feedback d-block">Please enter a number.</div>
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
          />
        </div>
        <div className="col-md-6">
          <label forhtml="inputCity" className="form-label">
            City
          </label>
          <input
            className="form-control"
            placeholder="City name"
            maxLength="30"
            id="inputCity"
            required
          />
        </div>
        <div className="col-md-3">
          <label forhtml="inputZip" className="form-label">
            Zip
          </label>
          <input
            className="form-control"
            placeholder="1000 AB"
            id="inputZip"
            required
          />
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
