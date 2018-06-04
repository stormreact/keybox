import React from "react";
import { Field, reduxForm } from "redux-form";

const KeyForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>New Key</label>
        <div>
          <Field
            name="key"
            component="input"
            type="text"
            placeholder="data4"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Value
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "keyform" // a unique identifier for this form
})(KeyForm);
