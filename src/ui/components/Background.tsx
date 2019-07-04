import * as React from "react"
import styled from "styled-components"

interface BackgroundProps {
  image: string
}

interface BackgroundState {
  isLoaded: boolean
}

export class Background extends React.PureComponent<BackgroundProps, BackgroundState> {
  state = {
    isLoaded: false,
  }

  componentDidMount() {
    const { image } = this.props
    const imageNode = new Image()

    imageNode.onload = () => {
      window.requestAnimationFrame(() => this.setState({ isLoaded: true }))
    }
    imageNode.src = image
  }

  render(): React.ReactNode {
    const { image } = this.props
    const { isLoaded } = this.state

    return <Bg image={image} isLoaded={isLoaded} />
  }
}

const Bg = styled.div<{ image: string; isLoaded: boolean }>`
  position: absolute;
  width: 100%;
  height: 80vh;
  opacity: ${props => (props.isLoaded ? 1 : 0)};
  transition: opacity 0.3s ease-out;
  background-repeat: no-repeat;
  background-position: 60%;
  background-size: cover;
  background-image: linear-gradient(
      270deg,
      ${props => props.theme.colors.background},
      rgba(${props => props.theme.colors.backgroundRgb}, 0) 80%
    ),
    linear-gradient(0deg, ${props => props.theme.colors.background}, rgba(${props => props.theme.colors.backgroundRgb}, 0) 60%),
    url(${props => props.image});

  @media (min-width: 1060px) {
    width: 40%;
    height: 100%;
  }
`