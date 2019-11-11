/* global console, QuickLoad */
const getButton = (label, backgroundColor) => `
<a class="board-header-btn board-header-btn-without-icon board-header-btn-text js-qlf-filter" href="#" style="background-color: ${backgroundColor}">${label}</a>
`;

const getLabels = () => {
  const nlLabels = document.querySelectorAll('.list-card-details .card-label');
  let i = nlLabels.length;
  const labels = [];

  while (i--) {
    if (labels.indexOf(nlLabels[i].innerText) === -1) {
      labels.push(nlLabels[i].innerText);
    }
  }

  const labelButtons = labels.map((label) => getButton(label));

  console.log('labelButtons', labelButtons);
};

const getLabels2 = () => {
  const labels = $('.label-list .label-list-item-link');


};

const testPreload = () => {

  const qlDone = (a, data) => {
    console.log(data[0].labels);
  };
  QuickLoad.load('/1/Boards/a8XvYhka?labels=all', qlDone);

};

const init = () => {
  console.log('hello');

  getLabels();
  getLabels2();
  // testPreload();
};

$(function () {
  init();
});

