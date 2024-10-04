'use client'; // This is a client component 👈🏽

import { useEffect, useState } from 'react';
import { Button, Htag, Paragraf, Rating, Tag } from '../../components';
import { withLayout } from '../../layout/Layout';

function Home() {
  const [coun, setCoun] = useState<number>(0);

  const [rating, setRating] = useState<number>(2);

  useEffect(() => {
    console.log('Counter ' + coun);
    return function cleanapp() {
      console.log('unmoutne');
    };
  }, []);
  return (
    <>
      <Tag size='l' color='red'>
        {coun}
      </Tag>
      <Htag tag='h1'>Textv</Htag>
      <Button appearance='ghost' arrow='down' onClick={() => setCoun(coun + 1)}>
        ghost
      </Button>
      <Button appearance='primary' arrow='right'>
        primery
      </Button>
      <Paragraf size='m'>
        Напишу сразу в двух курсах, так как проходил оба. Java будет многим
        трудоустройстве!
      </Paragraf>
      <Paragraf size='l'>
        Напишу сразу в двух курсах, так как проходил оба. трудоустройстве!
      </Paragraf>
      <Paragraf size='xl'>
        Напишу сразу в двух курсах, так как проходил оба. Java буд
        трудоустройстве!
      </Paragraf>
      <Tag size='l' color='green'>
        Big
      </Tag>
      <Tag size='m' color='grey'>
        Litle
      </Tag>
      <Tag size='l' color='red'>
        Big
      </Tag>
      <Rating rating={rating} setRating={setRating} isEditebel />
    </>
  );
}

export default withLayout(Home);
