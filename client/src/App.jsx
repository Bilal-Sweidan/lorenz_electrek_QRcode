import './App.css'
import img1 from '../public/logo_backgournd.jpg'
function App() {
  return (
    <main className='' style={{ padding: "0" }}>
      <img src={img1} alt="" style={{ width: "100%", height: "30vh" }} />
      <ul className='' style={{ listStyle: "none", padding: "0" }}>
        <li className='link'>
          <a href="https://2u.pw/q6FbSljF">
            <img src='/rb_136728.png' alt="" />
            instagrame
          </a>
        </li>

        <li className='link'>
          <a href="https://wa.me/qr/HDSC2GX33YQ3C1">
            <img src='/rb_2151296979.png' alt="" />
            what's app
          </a>
        </li>

        <li className='link'>
          <a href="https://lorenzelektrek.onrender.com" target='_blank'>
            <img src='/150897753_10507204.png' alt="" />
            website
          </a>
        </li>

        <li className='link'>
          <a href="mailto:lorenzelektrik@gmail.com">
            <img src='/10507049.png' alt="" />
            email
          </a>
        </li>

        <li className='link'>
          <a style={{padding : "0 10px" }} >
            <b>Phone Number:</b>+9005518880737
          </a>
        </li>
      </ul>
    </main>
  )
}

export default App
