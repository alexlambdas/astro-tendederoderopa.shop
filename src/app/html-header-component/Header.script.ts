function openNav(): void{
  const $div: HTMLElement | null = document.querySelector('#idNavMenuMobile');
  if($div !== null) {
    const windowWidth: number = window.innerWidth;
    document.body.style.position = 'fixed';
    document.body.style.overflowY = 'scroll';
    if(windowWidth > 1024) $div.style.width = '35%';
    else $div.style.width = '100%';
  }
}

function closeNav(): void{
  const $div: HTMLElement | null = document.querySelector('#idNavMenuMobile');
  if($div !== null) {
    document.body.style.position = 'static';
    document.body.style.overflowY = 'auto';
    $div.style.width = '0';
  }
}

function beginHeader(): void{
  
  const $openMenu: HTMLSpanElement | null = document.querySelector('#idOpenMenuMobile');
  const $closeMenu: HTMLSpanElement | null  = document.querySelector('#idCloseMenuMobile');
  
  if($openMenu !== null){
    $openMenu.addEventListener('click', () => openNav());
  }

  if($closeMenu !== null){
    $closeMenu.addEventListener('click', () => closeNav());
  }
}

document.addEventListener('DOMContentLoaded', beginHeader);