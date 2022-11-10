const getMap = () => {
  const ymaps = window.ymaps;

  ymaps.ready(function () {
    let myMap = new ymaps.Map('map', {
      center: [59.938764, 30.323351],
      zoom: 16,
    }, {
      searchControlProvider: 'yandex#search',
    });

    let MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #011c40; font-weight: bold;">$[properties.iconContent]</div>'
    );

    let myPlacemarkWithContent = new ymaps.Placemark([59.938635, 30.323118], {
      hintContent: 'Волшебный мир айсбергов и пингвинов',
      balloonContent: 'Круизы в Антарктику.',
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: './img/svg/pin.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [-9, -22],
      iconContentOffset: [15, 15],
      iconContentLayout: MyIconContentLayout,
    });

    myMap.geoObjects
        .add(myPlacemarkWithContent);
  });
};

export {getMap};
