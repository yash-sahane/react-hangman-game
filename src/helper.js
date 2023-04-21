export const notification = (setter) => {
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000)
}