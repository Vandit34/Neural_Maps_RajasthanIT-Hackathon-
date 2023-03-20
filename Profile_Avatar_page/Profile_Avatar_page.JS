
function changeAvatar(buttonId) {
    const avatarImg = document.querySelector('#avatar_img img');
    const buttonValue = document.querySelector(`#${buttonId}`).value;
    avatarImg.src = `../Content/Image/Avatar_${buttonValue}.png`;
    const activeButton = document.querySelector('.active');
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    document.querySelector(`#${buttonId}`).classList.add('active');
  }
  