function App() {
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
            maxLength="30"
            id="inputStreet"
            required
          />
          <div className="valid-feedback d-block">Valid street name!</div>
        </div>
        <div className="col-6 col-md-3">
          <label forhtml="inputNumber" className="form-label">
            House number
          </label>
          <input
            className="form-control is-invalid"
            placeholder="11"
            maxLength="5"
            id="inputNumber"
            required
          />
          <div className="invalid-feedback d-block">Please enter a number.</div>
        </div>
        <div className="col-6 col-md-3">
          <label forhtml="inputNumberAddition" className="form-label">
            Apt, suite, etc
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
