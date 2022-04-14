const articles = document.querySelectorAll('article');
const aside = document.querySelector('aside');
const close = aside.querySelector('span');
const changeTheme = document.querySelector('.chang_theme');

for (let el of articles) {
  el.addEventListener('mouseenter', (e) => {
    e.currentTarget.querySelector('video').play();
  });
  el.addEventListener('mouseleave', (e) => {
    e.currentTarget.querySelector('video').pause();
  });

  el.addEventListener('click', e => {
    let tit = e.currentTarget.querySelector('h2').innerText;
    let txt = e.currentTarget.querySelector('p').innerText;
    let vidSrc = e.currentTarget.querySelector('video').getAttribute('src');

    aside.querySelector('h2').innerText = tit;
    aside.querySelector('p').innerText = txt;
    aside.querySelector('video').setAttribute('src', vidSrc);

    aside.classList.add('on');

    aside.querySelector('video').play();
  })
}

close.addEventListener('click', e => {
  aside.classList.remove('on');
  aside.querySelector('video').pause();
})

changeTheme.addEventListener('click', e => {
  const isDay = document.body.classList.contains('day');
  if (!isDay) {
    document.body.classList.add('day');
    e.currentTarget.classList.add('icon_day');
  } else {
    document.body.classList.remove('day');
    e.currentTarget.classList.remove('icon_day');
  }

})