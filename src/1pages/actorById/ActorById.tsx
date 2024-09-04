import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { ProfessionTabs } from 'features';

import { PersonFacts, PersonHeader } from 'entities';

import { http, Loader, PersonFull } from 'shared';

import './style.scss';

const ActorsById = () => {
  const { personId } = useParams();

  const { isLoading, isError, data } = useQuery({
    queryKey: ['person', personId],
    queryFn: () => {
      return http.get(`/person/${personId}`);
    },
    select: (data) => data.data,
    refetchOnWindowFocus: false,
  });

  const person: PersonFull = data;

  useEffect(() => {
    if (person) {
      console.log(person.name);
      document.title = person.name ?? person.enName;
    }
  }, [person]);

  console.log(person);

  const {
    isLoading: isLoadingSpouse,
    isError: isErrorSpouse,
    data: spousesData,
  } = useQuery<string[]>({
    queryKey: ['spouse', person?.spouses],
    queryFn: async () => {
      if (person?.spouses?.length > 0) {
        const results = await Promise.allSettled(
          person.spouses.map((spouse) =>
            http
              .get(`/person/${spouse.id}`)
              .then((response) => response.data.name as string)
          )
        );

        const mappedResults = results.map((result) =>
          result.status === 'fulfilled'
            ? (result as PromiseFulfilledResult<string>).value
            : ''
        );

        return mappedResults;
      }
      return [];
    },
    enabled: !!person?.spouses,
    refetchOnWindowFocus: false,
  });
  const spouses: string[] = spousesData || [];

  const [selectedTab, setSelectedTab] = useState(
    person?.movies[0].enProfession ?? 'actor'
  );

  const tabClickHandler = useCallback((profession: string) => {
    setSelectedTab(profession);
  }, []);

  if (isLoading || isLoadingSpouse) {
    return <Loader />;
  }

  if (isError || isErrorSpouse) {
    return <div>Error: {isError ?? isErrorSpouse}</div>;
  }

  return (
    <>
      <section className="person">
        <PersonHeader person={person} spouses={spouses} />

        {person.facts[0] && <PersonFacts person={person} />}

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
