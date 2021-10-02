import { Heading, Text } from '@components/atoms'
import * as S from '@styles/pages/result'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

interface Country {
  Country: string
  Slug: string
  ISO2: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://api.covid19api.com/countries')
  const json: Country[] = await response.json()

  const paths = json.map(country => ({
    params: { country: country.Slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://api.covid19api.com/dayone/country/${params?.country}`
  )
  const json: Country[] = await response.json()

  return {
    props: {
      country: json[0],
    },
  }
}

export default function Result({
  country,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <S.Section>
      <Heading>{country.Country}</Heading>
      <Text>Amount</Text>
    </S.Section>
  )
}
