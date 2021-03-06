import { useState } from 'react'
import RandomChar from '../../components/randomChar'
import CharList from '../../components/charList'
import CharInfo from '../../components/charInfo'
import CharSearchForm from '../../components/charSearchForm'
import decoration from '../../assets/img/vision.png'
import './styles.scss'

const HomePage = () => {
  const [selectedChar, setChar] = useState(null)

  const onCharSelected = (id) => {
    setChar(id)
  }

  return (
    <div className="home-page">
      <RandomChar />
      <div className="char__content">
        <CharList onCharSelected={onCharSelected} />
        <div className='selected__char'>
          <CharInfo charId={selectedChar} />
          <CharSearchForm />
        </div>
      </div>
      {/* <img className="bg-decoration" src={decoration} alt="vision" /> */}
    </div>
  )
}
export default HomePage
