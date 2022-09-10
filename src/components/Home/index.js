import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="home-bg">
          <Navbar />
          <div
            className={isDarkTheme ? 'home-card home-bg-dark' : 'home-card '}
          >
            {isDarkTheme ? (
              <img
                className="h-a-icon"
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
            ) : (
              <img
                className="h-a-icon"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
            )}

            <h1 className={isDarkTheme ? 'h-a-h home-h-dark' : 'h-a-h '}>
              Home
            </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
