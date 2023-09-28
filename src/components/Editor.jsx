const Editor = ({ expand, setExpand, handleExpand, mdText, handleChange }) => {
  return (
    <section className="editor">
      <header className="editor-header">
        <i className="fa fa-free-code-camp" />
        <h1 className="title">Editor</h1>
        <button className="btn" onClick={() => handleExpand(setExpand)}>
          {expand ? (
            <i className="fa fa-compress" />
          ) : (
            <i className="fa fa-arrows-alt" />
          )}
        </button>
      </header>
      <textarea
        id="editor"
        className={expand ? "editor-content exp" : "editor-content"}
        value={mdText}
        onChange={handleChange}
      />
    </section>
  )
}
export default Editor