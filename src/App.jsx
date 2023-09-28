import { useEffect, useState } from "react"
import Editor from "./components/Editor"
import Previewer from "./components/Previewer"
import { marked } from "marked"
import {Moon, Sun} from "./icons"

const defaultValue = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
function App() {
  const [dark,setDark] = useState(false)
  const [expandEditor, setExpandEditor] = useState(false)
  const [expandPreviewer, setExpandPreviewer] = useState(false)
  const [mdText,setMdText] = useState(defaultValue);

  useEffect(() => {
    if (!expandEditor){
      document.getElementById("preview").innerHTML = marked.parse(mdText)
    }
  }, [mdText, expandEditor])
  const handleExpand =(func)=>{
    func(prev => !prev)
  }
  const handleChange =(e)=>{
    setMdText(e.target.value)
  }
  return (
    <div className={dark ? "container dark" : "container"}>
      {!expandPreviewer && (
        <Editor
          expand={expandEditor}
          setExpand={setExpandEditor}
          handleExpand={handleExpand}
          mdText={mdText}
          handleChange={handleChange}
        />
      )}
      {!expandEditor && (
        <Previewer
          expand={expandPreviewer}
          setExpand={setExpandPreviewer}
          handleExpand={handleExpand}
        />
      )}
      <button onClick={() => setDark((prev) => !prev)} className="mode-btn">
        {dark ? <Sun /> : <Moon />}
      </button>
    </div>
  )
}

export default App
