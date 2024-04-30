import dayjs from "dayjs";

export const format = (date: Date) => dayjs(date).format("YYYY-MM-DD");
