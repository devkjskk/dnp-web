export const createFormData = (data: Record<string, any>) => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        formData.append(key, "-1");
      } else {
        value.forEach((item: any) => {
          formData.append(`${key}`, item);
        });
      }
    } else {
      formData.append(key, String(value));
    }
  }

  return formData;
};
