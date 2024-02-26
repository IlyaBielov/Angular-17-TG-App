export enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course',
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  image: string;
  time: string;
  type: ProductType;
}

export const Products: IProduct[] = [
  {
    id: '1',
    title: 'TypeScript',
    image: './assets/images/icon-ts.svg',
    text: 'Fundamentals, types, compiler, classes, generic, utilities, decorators, advanced...',
    time: 'With experience • 2 weeks',
    type: ProductType.Skill,
  },
  {
    id: '2',
    title: 'Advanced JavaScript. Create your own Excel',
    image: './assets/images/icon-advanced-js.svg',
    text: 'Webpack, Jest, Node.js, State Managers, ООП, ESlint, SASS, Data Layer',
    time: 'With experience • 2 months',
    type: ProductType.Intensive,
  },
  {
    id: '3',
    title: 'JavaScript marathon “5 days - 5 projects”',
    image: './assets/images/icon-marathon-five-x-five.svg',
    text: 'image plugin, Trello mini-col, image slider, mini-game, animated game',
    time: 'From scratch • 1 week',
    type: ProductType.Course,
  },
];
