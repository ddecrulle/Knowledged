export const scrollToElement = (id) => {
  const element = document.getElementById(id);

  if (!element) return;

  return setTimeout(
    () =>
      element.scrollIntoView({
        behavior: 'smooth',
      }),
    100
  );
};
