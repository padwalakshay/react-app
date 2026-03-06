const debounce = (callback, delay) => {
    let timer = null;
    return (...args) => {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
            callback(...args)
        }, delay)
    }
}

export default debounce