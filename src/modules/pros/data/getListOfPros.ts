import type { Pro } from '../interfaces/pros';

export const getListOfPros = async (search: string): Promise<Pro[]> => {
  const mockProfessions = [
    {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      profession: {
        id: '1',
        name: 'Doctor',
      },
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'johndoe@gmail.com',
      profession: {
        id: '2',
        name: 'Engineer',
      },
    },
    {
      id: '3',
      name: 'Bill Smith',
      email: 'johndoe@gmail.com',
      profession: {
        id: '3',
        name: 'Teacher',
      },
    },
    {
      id: '4',
      name: 'Sally Johnson',
      email: 'johndoe@gmail.com',
      profession: {
        id: '4',
        name: 'Artist',
      },
    },
    {
      id: '5',
      name: 'Tom Williams',
      email: 'johndoe@gmail.com',
      profession: {
        id: '5',
        name: 'Writer',
      },
    },
  ];
  if (search) {
    return mockProfessions.filter((el) => el.name.includes(search));
  }
  return mockProfessions;
};
