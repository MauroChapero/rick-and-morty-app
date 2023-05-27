export default function Pagination({ prev, next, onPrevious, onNext }) {
  const handlePrevious = () => {
    onPrevious()
  }

  const handleNext = () => {
    onNext()
  }

  return (
    <nav>
      <ul className="pagination justify-content-center my-5">
        {prev && (
          <li className="page-item">
            <a className="page-link btn btn-primary bg-primary text-white" onClick={handlePrevious}>
              Prev
            </a>
          </li>
        )}
        {next && (
          <li className="page-item">
            <a className="page-link btn btn-primary bg-primary text-white" onClick={handleNext} >
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}
