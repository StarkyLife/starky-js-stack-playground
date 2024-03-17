import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Box, Button, Title } from '@mantine/core'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box className='flex flex-col items-center'>
      <Box>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </Box>
      <Title>Vite + React</Title>
      <Box>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Box>
    </Box>
  )
}

export default App
