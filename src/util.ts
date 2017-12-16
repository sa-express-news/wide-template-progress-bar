export const getPercentScrolled = (): number => {
    // const scrollableArea = document.body.scrollHeight - window.innerHeight;

    // const scrollTop = window.scrollY;

    // return Math.floor(scrollTop / scrollableArea * 100);

    return ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
}