import { useQuery } from '@tanstack/react-query';

const getCryptoNumber = async () => {
  throw new Error('Error fetching data');
  // const response = await fetch(
  //   'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new',
  // );

  // const data = await response.json();
  // return Number(data);
};

export const useRandom = () => {
  const query = useQuery({
    queryKey: ['randomNumber'],
    // staleTime: 0,
    queryFn: getCryptoNumber,
    retry: false,
  });

  return query;
};
