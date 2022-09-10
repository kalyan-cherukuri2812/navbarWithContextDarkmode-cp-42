import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
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
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
            ) : (
              <img
                className="h-a-icon"
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
            )}

            <h1 className={isDarkTheme ? 'h-a-h home-h-dark' : 'h-a-h '}>
              About
            </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
