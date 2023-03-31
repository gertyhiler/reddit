export function convertDate(date: Date): string {
  const currentDate = new Date();
  const hours: number = Number(((currentDate.getTime() - date.getTime()) / 3600000).toFixed());
  if (hours < 25) {
    switch (hours) {
      case 0:
        return "менее часа назад"
      case 1:
      case 21:
        return `${hours} час назад`;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
        return `${hours} часа назад`;
      default:
        return `${hours} часов назад`;
    }
  } else {
    return date.toString().split(' ').splice(0, 5).join(' ');
  }
}