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
            type="email"
            className="form-control"
            placeholder="Street name"
            id="inputStreet"
          />
        </div>
        <div className="col-6 col-md-3">
          <label forhtml="inputNumber" className="form-label">
            House number
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="11"
            id="inputNumber"
          />
        </div>
        <div className="col-6 col-md-3">
          <label forhtml="inputNumberAddition" className="form-label">
            Apt, suite, etc
          </label>
          <input
            type="password"
            className="form-control"
            id="inputNumberAddition"
          />
        </div>
        <div className="col-md-6">
          <label forhtml="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="City name"
            id="inputCity"
          />
        </div>
        <div className="col-md-3">
          <label forhtml="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="1000 AB"
            id="inputZip"
          />
        </div>
        <div className="mb-3">
          <label forhtml="inputAdditional" className="form-label">
            Additional information
          </label>
          <textarea
            className="form-control"
            id="inputAdditional"
            rows="3"
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
