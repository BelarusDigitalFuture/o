let flourishScript;
const docBody = document.body;

export const setFlourishScript = () => {
  let toDel = false;
  if (flourishScript) {
    toDel = true;
  }
  const newFlScript = document.createElement('script');
  newFlScript.setAttribute('src', 'https://public.flourish.studio/resources/embed.js');
  docBody.appendChild(newFlScript);
  if (toDel) {
    setTimeout(() => {
      docBody.removeChild(flourishScript);
      flourishScript = newFlScript;
    }, 0);
  } else {
    flourishScript = newFlScript;
  }
};
