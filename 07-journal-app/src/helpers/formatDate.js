export const formatDateByDatetime = (dateTime) => {
  const date = new Date(dateTime);

  return date.toLocaleDateString("es-MX", {
    dateStyle: "long",
  });
};
