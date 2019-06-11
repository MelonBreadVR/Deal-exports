import React, { Component } from 'react';

class PchForm extends Component {
  render() {
    return (
    <>
      <div className="ch-form__group ch-display--block">
        <label htmlFor="name" className="ch-display--block ch-mb--0">Car name</label>
        <input type="text" name="Name" id="name" className="ch-display--block ch-form__control" />
      </div>
      <div className="ch-form__group ch-display--block">
        <label htmlFor="variant" className="ch-display--block ch-mb--0">Variant</label>
        <input type="text" name="Spec" id="variant" className="ch-display--block ch-form__control" />
      </div>
      <div className="ch-row">
        <div className="xs:ch-col--6 ch-mh--0">
          <div className="ch-form__group ch-display--block">
            <label htmlFor="deposit" className="ch-display--block ch-mb--0">Deposit (£)</label>
            <input type="number" name="Deposit" id="deposit" className="ch-display--block ch-form__control" />
          </div>
        </div>
        <div className="xs:ch-col--6 ch-mh--0">
          <div className="ch-form__group ch-display--block">
            <label htmlFor="monthly" className="ch-display--block ch-mb--0">Monthly (£)</label>
            <input type="number" name="Monthly" id="monthly" className="ch-display--block ch-form__control" />
          </div>
        </div>
      </div>
      <div className="ch-form__group ch-display--block">
        <label htmlFor="vat" className="ch-display--block ch-mb--0">VAT £</label>
        <input type="number" name="VAT" id="vat" className="ch-display--block ch-form__control" />
      </div>
      <div className="ch-form__group ch-display--block">
        <label htmlFor="image" className="ch-display--block ch-mb--0">Image URL</label>
        <input type="text" name="Image" id="image" className="ch-display--block ch-form__control" />
      </div>
      <div className="ch-form__group ch-display--block">
        <label htmlFor="list" className="ch-display--block ch-mb--0">Features (separate with commas)</label>
        <input type="text" name="Features" id="list" className="ch-display--block ch-form__control" />
      </div>
      </>
    );
  }
}

export default PchForm;