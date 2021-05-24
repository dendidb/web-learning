const Accordion = (() => {

// handleClick

const handleClick = () => {
  $('.js-accordion').on('click', (e) => {
    console.log($(e.currentTarget).attr('data-value'));
  });
}

// handleRemoveDiv
const handleRemoveDiv = () => {
  console.log('div');
}

// init 
const init = () => {
  handleClick();
}

return {
  init,
  removeDiv: handleRemoveDiv
}

})();

export default Accordion