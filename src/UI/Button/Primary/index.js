import palette from 'constants/style/palette'
import Button from 'UI/Button'

const PrimaryButton = Button.extend`
  background-color: ${palette.primaryDark};
  border-radius: 4px;
  color: ${palette.white};
  font-weight: 700;
  height: 40px;
  padding: 8px;
  transition: background .2s linear;

  &:hover {
    background-color: ${palette.primary};
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export default PrimaryButton
