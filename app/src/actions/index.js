import { createActions } from 'redux-actions';

export const VIEW_BUTTON = 'VIEW_BUTTON';
export const VIEW_JSON = 'VIEW_JSON';
export const VIEW_TABLE = 'VIEW_TABLE';
export const VIEW_DATA = 'VIEW_DATA';
export const CHANGE_TAB = 'CHANGE_TAB';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CHANGE_ID = 'CHANGE_ID';
export const ADD_CHECKBOX = 'ADD_CHECKBOX';
export const CHANGE_CHECKBOX = 'CHANGE_CHECKBOX';
export const CHANGE_ID_CONTRAST = 'CHANGE_ID_CONTRAST';

export const {
  viewButton,
  viewJson,
  viewTable,
  viewData,
  changeTab,
  openModal,
  closeModal,
  changeId,
  addCheckbox
} = createActions({
  VIEW_BUTTON: () => {},
  VIEW_JSON: json => ({ json }),
  VIEW_TABLE: datas => ({ datas }),
  VIEW_DATA: () => {},
  CHANGE_TAB: () => {},
  OPEN_MODAL: () => {},
  CLOSE_MODAL: () => {},
  CHANGE_ID: () => {},
  ADD_CHECKBOX: () => {}
});
// modal
export const {
  changeCheckbox1,
  changeCheckbox2,
  changeCheckbox3,
  changeIdContrast
} = createActions({
  CHANGE_CHECKBOX1: () => {},
  CHANGE_CHECKBOX2: () => {},
  CHANGE_CHECKBOX3: () => {},
  CHANGE_ID_CONTRAST: () => {}
});

//banner
export const HANDLE_DISMISS = 'HANDLE_DISMISS';
export const HANDLE_SHOW = 'HANDLE_SHOW';

export const { handleDismiss, handleShow } = createActions({
  HANDLE_DISMISS: () => {},
  HANDLE_SHOW: () => {}
});

//form
export const SHOW_UL = 'SHOW_UL';

export const { showUl } = createActions({
  SHOW_UL: () => {}
});
