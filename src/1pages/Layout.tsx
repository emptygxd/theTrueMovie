// import { useQuery } from '@tanstack/react-query';

// import { http } from '../shared/api/services';
import { MovieById } from 'pages';

export function Layout() {
  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: () => {
  //     return http.get('?i=tt3896198');
  //   },
  //   select: data => data.data,
  // });
  // localStorage.setItem('data', JSON.stringify(data));
  // const data = [JSON.parse(localStorage.getItem('data') || '')];

  return <MovieById />;
}
