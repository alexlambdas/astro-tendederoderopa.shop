function videoPlay($videoProduct: HTMLVideoElement): void{
  if($videoProduct.paused){;
    $videoProduct.play();
  }
  else{
    $videoProduct.pause();
  }

}

function videoReadyFor($videoProduct: HTMLVideoElement): void{
  console.log('entro al final');
  console.log($videoProduct.currentSrc);
  /*
  $videoProduct.currentTime = 0;
  $videoProduct.pause();
  */
}

function beginProductPlusVideo(): void{

  const $videoProduct: HTMLVideoElement | null = document.querySelector('#idVideoProduct');

  if($videoProduct !== null){
    $videoProduct.addEventListener('click', () => videoPlay($videoProduct));
  }
}

document.addEventListener('DOMContentLoaded', beginProductPlusVideo);