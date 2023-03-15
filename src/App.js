import './App.css'
import { Input, Button, Row, Col, message } from 'antd'

function App() {
  return (
    <div>
      <input type="text" name="username" placeholder="Enter username" />
      <input type="password" name="password" placeholder="Enter password" />
      <button onClick={() => alert('Login Successful!')}>Login</button>
      <hr />

      <Row>
        <Col span="6" offset="8">
          <Input name="username" placeholder="Enter username" />
          <Input.Password name="username" placeholder="Enter username" />
          <Button type="primary" onClick={() => message.info('Login successful')}>Login</Button>
        </Col>
      </Row>
    </div>
  )
}

export default App
