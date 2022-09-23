export const getOtherName = (isBaseInstance: boolean, name: string) =>
  name.replace(/[a-z]+(?=-)/, isBaseInstance ? 'target' : 'base');
