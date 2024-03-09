export const deleteProps = (obj: any, props: string[] = []): void => {
    for (let i = 0; i < props.length; i++) {
      if (obj.hasOwnProperty(props[i])) {
        delete obj[props[i]];
      }
    }
  };
  