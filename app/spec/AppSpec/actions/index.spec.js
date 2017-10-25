import * as actions from '../../../src/actions';
import { expect } from 'chai';
import React from 'react';

describe('test the actions', () => {
  it('actions', () => {
    expect(actions.viewButton().type).to.equal('VIEW_BUTTON');
    expect(actions.viewJson('json')).to.deep.equal({
      type: 'VIEW_JSON',
      payload: { json: 'json' }
    });
    expect(actions.viewTable('datas').payload.datas).to.equal('datas');
    expect(actions.viewData().type).to.be.equal('VIEW_DATA');
    expect(actions.changeTab().type).to.be.equal('CHANGE_TAB');
    expect(actions.openModal().type).to.be.equal('OPEN_MODAL');
    expect(actions.closeModal().type).to.be.equal('CLOSE_MODAL');
    expect(actions.changeId().type).to.be.equal('CHANGE_ID');
    expect(actions.addCheckbox().type).to.be.equal('ADD_CHECKBOX');
    expect(actions.changeCheckbox1().type).to.be.equal('CHANGE_CHECKBOX1');
    expect(actions.changeCheckbox2().type).to.be.equal('CHANGE_CHECKBOX2');
    expect(actions.changeCheckbox3().type).to.be.equal('CHANGE_CHECKBOX3');
    expect(actions.changeIdContrast().type).to.be.equal('CHANGE_ID_CONTRAST');
    expect(actions.handleDismiss().type).to.be.equal('HANDLE_DISMISS');
    expect(actions.handleShow().type).to.be.equal('HANDLE_SHOW');
    expect(actions.showUl().type).to.be.equal('SHOW_UL');
  });
});
