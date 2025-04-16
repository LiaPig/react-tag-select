import { useState } from 'react'
import TagSelect from './components/TagSelect'

function App() {
  const [value, setValue] = useState('1')

  return (
    <div style={{ paddingLeft: '40vw' }}>
      <TagSelect
        style={{ width: '20vw', textAlign: 'left' }}
        value={value}
        onChange={(value) => setValue(value as string)}
        options={[
          { label: 'success', value: '1', tag: 'success' },
          { label: 'processing', value: '2', tag: 'processing' },
          { label: 'error', value: '3', tag: 'error' },
          { label: 'warning', value: '4', tag: 'warning' },
          { label: 'default', value: '5', tag: 'default' },
        ]}
      />
    </div>
  )
}

export default App
