import Editor from './components.js/Editor'
import { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage';
import './Editor.css';
function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
      `)
    }, 250)
    return () => clearTimeout(timeout);
  }, [html, css, js])
  return (
    <>
      <div className='section topSection'>
        <Editor language="xml" editorName="HTML" value={html} onChange={setHtml} />
        <Editor language="css" editorName="CSS" value={css} onChange={setCss} />
        <Editor language="javascript" editorName="JAVASCRIPT" value={js} onChange={setJs} />
      </div>
      <div className='section bottomSection'>
        <iframe
          srcDoc={srcDoc}
          sandbox='allow-scripts'
          title='output'
          frameborder='0'
          height='100%'
          width='100%' />
      </div>
    </>
  )
}

export default App