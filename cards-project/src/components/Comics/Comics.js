import {
  API_URL,
  URL_COMICS,
  URL_CHARACTERS,
  IMG_STANDART_XLARGE,
  IMG_NOT_AVAILABLE,
} from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_INDEX } from '../../constants/root';

import './Comics.css';

class Comics {
  async render() {
    const data = await getDataApi.getData(`${API_URL}${URL_COMICS}`);

    let htmlContent = '';

    data.forEach(({ id, title, thumbnail: { extension, path } }) => {
      if (!path.includes(IMG_NOT_AVAILABLE)) {
        const uri = `${API_URL}${URL_COMICS}/${id}/${URL_CHARACTERS}`;
        const imgSrc = `${path}/${IMG_STANDART_XLARGE}.${extension}`;

        htmlContent += `
          <li class="comics__item" data-uri="${uri}">
            <span class="comics__name">${title}</span>
            <img class="comics__img" src="${imgSrc}" />
          </li>
      `;
      }
    });

    const htmlWrapper = `
      <ul class="comics__container">
        ${htmlContent}
      </ul>
    `;

    ROOT_INDEX.innerHTML = htmlWrapper;
  }

  eventListener() {
    document.querySelectorAll('.comics__item').forEach((element) => {
      const uri = element.getAttribute('data-uri');

      element.addEventListener('click', () => {
        console.log(uri);
      });
    });
  }
}

export default new Comics();
