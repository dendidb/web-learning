import {Accordion} from 'components';

const Popup = (() => {

// handleClick

const handleClick = () => {
  $('.js-popup').on('click', (e) => {
    console.log($(e.currentTarget).attr('data-value'));
  });
}

// handleKeyUp 
const handleKeyUp = () => {
  console.log('keyup berhasil')
}


// init 
const init = () => {
  handleClick();
}

return {
  init
}

})();

export default Popup