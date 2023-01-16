import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,

  // name: faker.name.fullName(),
  // company: faker.company.name(),
  // isVerified: faker.datatype.boolean(),
  // status: sample(['active', 'banned']),
  name: sample([
    '컴퓨터 구조',
    '자바 프로그래밍',
    '실전 프로젝트1',
    '중국어2',
    '경영학입문',
    'Operating System'
  ]),
  achievement: sample([
    78,
    80,
    95,
    58,
    98,
    88
  ]),
  professor: sample([
    '고윤민',
    '용환기',
    '남재창',
    '민성아',
    '김민재',
    '김인중'
  ]),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    '컴퓨터 네트워크',
    '컴퓨터 구조',
    '파이썬',
    '중국어2',
  ]),
}));

export default users;
