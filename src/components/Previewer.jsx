const Previewer = ({ expand, setExpand, handleExpand }) => {
  return (
    <section className="previewer">
      <header className="previewer-header">
        <i className="fa fa-free-code-camp" />
        <h1 className="title">Previewer</h1>
        <button className="btn" onClick={() => handleExpand(setExpand)}>
          {expand ? (
            <i className="fa fa-compress" />
          ) : (
            <i className="fa fa-arrows-alt" />
          )}
        </button>
      </header>
      <div
        className={expand ? "previewer-content exp" : "previewer-content"}
        id="preview"
      ></div>
    </section>
  )
}
export default Previewer