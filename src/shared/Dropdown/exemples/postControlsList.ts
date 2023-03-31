import { IItem } from "./IItem";

export const postControlsList: IItem[] = [
  {
    value: 'Комментарии',
    className: 'menuItem',
    As: 'button',
    AsClassName: 'dropdownPost_comment',
  },
  {
    value: 'Поделиться',
    className: 'menuItem',
    As: 'button',
    AsClassName: 'dropdownPost_share',
  },
  {
    value: 'Скрыть',
    className: 'menuItem',
    As: 'button',
    AsClassName: 'dropdownPost_hide',
  },
  {
    value: 'Сохранить',
    className: 'menuItem',
    As: 'button',
    AsClassName: 'dropdownPost_save',
  },
  {
    value: 'Пожаловаться',
    AsClassName: 'dropdownPost_report',
    As: 'button',
    className: 'menuItem',
  },
];