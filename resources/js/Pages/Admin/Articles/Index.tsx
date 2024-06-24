import { PageProps } from '@/types';
import React from 'react'

type Props = PageProps & {
    articles: any[];
};


const Index = (props: Props) => {
    const { articles } = props;
  return (
    <div>{JSON.stringify(articles)}</div>
  )
}

export default Index