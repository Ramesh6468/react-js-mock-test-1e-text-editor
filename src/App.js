import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Button,
  TextAreaElement,
  UnderlineButton,
  ItalicButton,
} from './styledComponents'

import './App.css'

class App extends Component {
  state = {Bold: false, Italic: false, Underline: false}

  bold = () => {
    this.setState(prevState => ({Bold: !prevState.Bold}))
  }

  italic = () => {
    this.setState(prevState => ({Italic: !prevState.Italic}))
  }

  underline = () => {
    this.setState(prevState => ({Underline: !prevState.Underline}))
  }

  render() {
    const {Bold, Italic, Underline} = this.state
    console.log(Bold)
    const color = Bold === false ? '#f1f5f9' : ' #faff00'
    const italicButtonColor = Italic === false ? '#f1f5f9' : ' #faff00'
    const underlineButtonColor = Underline === false ? '#f1f5f9' : ' #faff00'
    const fontWeight = Bold === false ? 'normal' : 'bold'

    const fontStyle = Italic === false ? 'normal' : 'italic'

    const textDecoration = Underline === false ? 'normal' : 'underline'

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <div className="one">
            <h1 className="title">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              className="image"
              alt="text editor"
            />
          </div>
          <div className="second">
            <ul className="buttonsCard">
              <li className="item">
                <Button
                  data-testid="bold"
                  color={color}
                  type="button"
                  onClick={this.bold}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li className="item">
                <ItalicButton
                  className="button"
                  data-testid="italic"
                  type="button"
                  color={italicButtonColor}
                  onClick={this.italic}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </li>
              <li className="item">
                <UnderlineButton
                  className="button"
                  data-testid="underline"
                  type="button"
                  color={underlineButtonColor}
                  onClick={this.underline}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </li>
            </ul>
            <hr className="line" />
            <TextAreaElement
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
