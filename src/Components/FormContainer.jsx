const FormContainer = (props) => {
  return (
    <div className="container-md border bg-light p-3 mt-5">
      {props.children}
    </div>
  )
}

export default FormContainer
