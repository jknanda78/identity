/**
 * Redux Actions
 * Patterns:
 * Post - @@post/<ACTION_NAME>
 * Get - @@get/<ACTION_NAME>
 * Put - @@put/<ACTION_NAME>
 * Delete - @@delete/<ACTION_NAME>
 * Navigate - @@navigate2/<ACTION_NAME>
 * Notify - @@notify/<ACTION_NAME>
 */
// Navigation
export const NAVIGATE = "@@navigate2/APP_ROUTE";
// User Profile
export const SET_USER_PROFILE = "@@post/SET_USER_PROFILE";
// Notification
export const SET_GLOBAL_NOTIFICATION = "@@notify/SET_GLOBAL_NOTIFICATION";
export const UNSET_GLOBAL_NOTIFICATION = "@@notify/UNSET_GLOBAL_NOTIFICATION";
export const SET_FIELD_NOTIFICATION = "@@notify/SET_FIELD_NOTIFICATION";
// Forms
export const CLEAR_FORM = "@@form/CLEAR_FORM";
export const CREATE_NEW_FORM = "@@form/CREATE_NEW_FORM";
export const SUBMIT_FORM = "@@form/SUBMIT_FORM";
// Inputfield
export const ADD_NEW_INPUT_FIELD = "@@form-field/ADD_NEW_INPUT_FIELD";
export const ONBLUR_INPUT_FIELD = "@@form-field/ONBLUR_INPUT_FIELD";
export const ONCHANGE_INPUT_FIELD = "@@form-field/ONCHANGE_INPUT_FIELD";
export const ONFOCUS_INPUT_FIELD = "@@form-field/ONFOCUS_INPUT_FIELD";
// Observable
export const HTTP_REQUEST = "@@observable/HTTP_REQUEST";
export const HTTP_REQUEST_FAILURE = "@@observable/HTTP_REQUEST_FAILURE";
export const HTTP_REQUEST_SUCCESS = "@@observable/HTTP_REQUEST_SUCCESS";
