import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

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
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  // name: faker.name.fullName(),
  // achievement: faker.achievement.fullName(),
  // professor: faker.professor.fullName(),
  // syllabus: faker.syllabus.fullName(),
  // ranking: faker.ranking.fullName(),
  // attendance: faker.attendance.fullName(),
  // grade: faker.grade.fullName(),
  role: sample([
    '고윤민',
    '용환기',
    '남재창',
    '민성아',
    '김민재',
    '김인중'
  ]),
}));

export default users;
