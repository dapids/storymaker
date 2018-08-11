import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons'
import Button from 'UI/Button'
import Icon from 'UI/Icon'
import Display from 'UI/Typography/Display'
import Form from './Form'

const ButtonWrapper = styled.div`
  bottom: 4px;
  position: absolute;
  right: 8px;
`

const FormWrapper = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
`

const Skin = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-bottom: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  flex: 0 0 auto;
  padding: 8px;
  position: relative;
`

class StoryConfigurator extends PureComponent {
  state = {
    open: false,
  }

  handleToggle = () => {
    const { open } = this.state

    this.setState({ open: !open })
  }

  render() {
    const { open } = this.state

    return (
      <Skin>
        <Display>
          StoryMaker
        </Display>

        <ButtonWrapper>
          <Button onClick={this.handleToggle}>
            <Icon size={20}>
              <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} />
            </Icon>
          </Button>
        </ButtonWrapper>

        <FormWrapper open={open}>
          <Form />
        </FormWrapper>
      </Skin>
    )
  }
}

export default StoryConfigurator
