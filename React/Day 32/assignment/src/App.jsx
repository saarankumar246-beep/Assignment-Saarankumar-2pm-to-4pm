import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import Card from './components/Card'
import Product from './components/Product'

function App() {

  return (
    <>
      <Button text="Click me" />

      <Card>
        <h2>Card Title</h2>
        <p>This content comes from children.</p>
      </Card>

      <Product name="Laptop" price={999} />
      <Product name="Phone" price={699} />

      <Footer />
    </>
  )
}

export default App
