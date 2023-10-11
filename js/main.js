const callRequestBtn = document.querySelector('#call-request');
const callRequestDialog = document.querySelector('#call-request-dialog');
const callRequestOverlay = callRequestDialog.querySelector('#call-request-overlay');
const callRequestClose = callRequestDialog.querySelector('#call-request-close');

const handleOpenRequestDialog = () => {
  callRequestDialog.classList.add('dialog_active');
}

const handleCloseRequestDialog = () => {
  callRequestDialog.classList.remove('dialog_active');
}

callRequestBtn.addEventListener('click', handleOpenRequestDialog);
callRequestClose.addEventListener('click', handleCloseRequestDialog);
callRequestOverlay.addEventListener('click', handleCloseRequestDialog);
