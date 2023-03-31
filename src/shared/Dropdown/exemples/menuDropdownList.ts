import { IItem } from "./IItem";

export const arrayLiItem: IItem[] = [
  {
    value: 'Комментарии',
    className: 'menuItem',
    As: 'span',
    AsClassName: 'dropdownPost_comment',
  },
  {
    value: 'Поделиться',
    className: 'menuItem',
    As: 'span',
    AsClassName: 'dropdownPost_share',
  },
  {
    value: 'Скрыть',
    className: 'menuItem',
    As: 'span',
    AsClassName: 'dropdownPost_hide',
  },
  {
    value: 'Сохранить',
    className: 'menuItem',
    As: 'span',
    AsClassName: 'dropdownPost_save',
  },
  {
    value: 'Пожаловаться',
    AsClassName: 'dropdownPost_report',
    As: 'span',
    className: 'menuItem',
  },
];