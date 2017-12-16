import { throttle } from 'lodash';
import { getPercentScrolled } from './util';
import * as constants from './constants';

const wideTemplateProgressBar = (): void => {
    const headerElement = document.querySelector(constants.headerSelector);
    if (!headerElement) return;

    const outerDiv = document.createElement('div');
    outerDiv.classList.add('progress-outer');

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('progress-inner');

    outerDiv.appendChild(innerDiv);
    headerElement.appendChild(outerDiv);

    const handleScroll = (): void => {
        const percentScrolled = getPercentScrolled();

        innerDiv.style.width = `${percentScrolled}%`;
    }

    document.addEventListener('scroll', throttle(handleScroll, 150));
}

wideTemplateProgressBar();


