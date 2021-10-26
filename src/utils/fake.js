export const fake_user = {
  email: 'hosein.abolhasani1998@gmail.com',
  username: 'UniQue',
  image:
    'https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg',
  id: '7898780055454559745100',
};

export const fake_pending = [
  { id: 1, type: 2 },
  { id: 2, type: 1 },
];

export const fake_friends = [
  { id: 1, username: 'ahmad' },
  { id: 2, username: 'asghar', isOnline: true },
];

export const fake_dms = [
  {
    id: 1,
    user: {
      id: 1,
      username: 'ahmad',
    },
  },
  {
    id: 2,
    user: {
      id: 3,
      username: 'asghar',
      isOnline: true,
    },
  },
];

export const fake_messages = [
  {
    id: 1,
    text: 'this is a test message and i am test user',
    user: {
      id: 12,
      username: 'asghar',
      isOnline: true,
    },
    createdAt: new Date(),
    // updatedAt,
  },
  {
    id: 2,
    text: 'this is a test message and i am test user',
    user: {
      id: 3,
      username: 'ahmad',
      isOnline: true,
    },
    createdAt: new Date(),
    // updatedAt,
  },
  {
    id: 1,
    text: 'this is a test message and i am test user',
    user: {
      id: 4,
      username: 'hosein',
      isOnline: true,
    },
    createdAt: new Date(),
    // updatedAt,
  },
  {
    id: 1,
    text: 'this is a test message and i am test user',
    user: {
      id: 6,
      username: 'hamid',
      isOnline: true,
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
