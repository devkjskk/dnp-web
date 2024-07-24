export const createFormData = (
  data: Record<string, any>,
  skipNull: boolean = false
) => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      if (value.length > 0) {
        value.forEach((item: any) => {
          formData.append(`${key}`, item);
        });
      }
    } else {
      if ((value === null || value === "null" || value === "") && !!skipNull)
        continue;

      formData.append(key, value);
    }
  }

  return formData;
};
