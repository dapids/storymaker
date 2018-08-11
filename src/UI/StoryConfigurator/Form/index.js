import React, { PureComponent } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { genders } from 'constants/stories'
import { addStory as addStoryAction } from 'model/actions/stories'
import PrimaryButton from 'UI/Button/Primary'
import InputText from 'UI/Form/Input/Text'
import Label from 'UI/Form/Label'
import Select from 'UI/Form/Select'

const Field = styled.div`
  margin: 0 8px;

  @media screen and (max-width: 600px) {
    margin: 8px 0;
  }
`

const Skin = styled.form`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  padding: 8px 8px 24px;

  @media screen and (max-width: 600px) {
    align-items: stretch;
    flex-direction: column;
  }
`

class Form extends PureComponent {
  handleSubmit = (event) => {
    const { addStory } = this.props

    event.preventDefault()

    const values = new FormData(event.target)
    const gender = values.get('gender')
    const name = values.get('name')

    if (!gender || !name) {
      return
    }

    addStory({ gender, name })
  }

  render() {
    return (
      <Skin autoComplete="off" name="new-story" novalidate onSubmit={this.handleSubmit}>
        <Field>
          <Label>
            Gender
          </Label>

          <div>
            <Select name="gender">
              <option />
              <option value={genders.FEMALE}>
                Female
              </option>
              <option value={genders.MALE}>
                Male
              </option>
            </Select>
          </div>
        </Field>

        <Field>
          <Label>
            Protagonist
          </Label>

          <div>
            <InputText name="name" />
          </div>
        </Field>

        <Field>
          <PrimaryButton>
            Make a story!
          </PrimaryButton>
        </Field>
      </Skin>
    )
  }
}

Form.propTypes = {
  addStory: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  addStory: params => dispatch(addStoryAction(params)),
})

export default connect(
  null,
  mapDispatchToProps,
)(Form)
