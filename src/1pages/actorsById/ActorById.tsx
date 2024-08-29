import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { PersonFacts, PersonHeader } from 'entities';

import { http, Loader } from 'shared';

import './style.scss';
import { Person } from './types/actor';

import { useCallback, useState } from 'react';
import { ProfessionTabs } from 'features';

const ActorsById = () => {
  const person: Person = JSON.parse(localStorage.getItem('person') || '');
  const spouses: string[] = JSON.parse(localStorage.getItem('spouses') || '');

  // const { personId } = useParams();

  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ['person'],
  //   queryFn: () => {
  //     return http.get(`/person/${personId}`);
  //   },
  //   select: (data) => data.data,
  //   refetchOnWindowFocus: false,
  // });

  // const person: Person = data;
  // localStorage.setItem('person', JSON.stringify(person));

  console.log(person);

  // const {
  //   isLoading: isLoadingSpouse,
  //   isError: isErrorSpouse,
  //   data: spousesData,
  // } = useQuery<string[]>({
  //   queryKey: ['spouse', person?.spouses],
  //   queryFn: () => {
  //     if (person?.spouses?.length > 0) {
  //       return Promise.all(
  //         person.spouses.map((spouse) =>
  //           http
  //             .get(`/person/${spouse.id}`)
  //             .then((response) => response.data.name as string)
  //         )
  //       );
  //     }
  //     return Promise.resolve([]);
  //   },
  //   enabled: !!person?.spouses,
  //   refetchOnWindowFocus: false,
  // });

  // const spouses: string[] = spousesData || [];

  const [selectedTab, setSelectedTab] = useState(
    person?.movies[0].enProfession ?? ''
  );

  const tabClickHandler = useCallback((profession: string) => {
    setSelectedTab(profession);
  }, []);

  // if (isLoading || isLoadingSpouse) {
  //   return <Loader />;
  // }

  // if (isError || isErrorSpouse) {
  //   return <div>Error: {isError ?? isErrorSpouse}</div>;
  // }

  return (
    <>
      <section className="person">
        <PersonHeader person={person} spouses={spouses} />

        <PersonFacts person={person} />

        <ProfessionTabs
          movies={person.movies}
          tabClickHandler={tabClickHandler}
          selectedTab={selectedTab}
        />
      </section>
    </>
  );
};

export default ActorsById;
