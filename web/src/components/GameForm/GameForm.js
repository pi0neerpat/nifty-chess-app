import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const GameForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.game?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="playedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Played at
        </Label>
        <TextField
          name="playedAt"
          defaultValue={props.game?.playedAt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="playedAt" className="rw-field-error" />

        <Label
          name="mintedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Minted at
        </Label>
        <TextField
          name="mintedAt"
          defaultValue={props.game?.mintedAt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="mintedAt" className="rw-field-error" />

        <Label
          name="moves"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Moves
        </Label>
        <TextField
          name="moves"
          defaultValue={props.game?.moves}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="moves" className="rw-field-error" />

        <Label
          name="movesHash"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Moves hash
        </Label>
        <TextField
          name="movesHash"
          defaultValue={props.game?.movesHash}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="movesHash" className="rw-field-error" />

        <Label
          name="black"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Black
        </Label>
        <TextField
          name="black"
          defaultValue={props.game?.black}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="black" className="rw-field-error" />

        <Label
          name="white"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          White
        </Label>
        <TextField
          name="white"
          defaultValue={props.game?.white}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="white" className="rw-field-error" />

        <Label
          name="userAddress"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User address
        </Label>
        <TextField
          name="userAddress"
          defaultValue={props.game?.userAddress}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="userAddress" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default GameForm
