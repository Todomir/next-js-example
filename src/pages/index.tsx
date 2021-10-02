import { Button, Heading, Select, Text } from '@components/atoms'
import * as S from '@styles/pages/home'
import { useForm } from '@utils/hooks'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface Country {
  Country: string
  Slug: string
  ISO2: string
}

const Home: NextPage = () => {
  const router = useRouter()
  const { fields, createChangeHandler } = useForm({
    country: '',
    status: '',
  })
  const [countries, setCountries] = useState<Country[]>()
  const [statuses] = useState([
    { value: 'confirmed', name: 'Confirmed' },
    { value: 'recovered', name: 'Recovered' },
    { value: 'deaths', name: 'Deaths' },
  ])

  // Fetching available countries
  useEffect(() => {
    const queryCountries = async () => {
      const response = await fetch('https://api.covid19api.com/countries')
      const json: Country[] = await response.json()
      // Sort alphabetically by country name
      setCountries(json.sort((a, b) => a.Country.localeCompare(b.Country)))
    }

    queryCountries()
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/result/${fields.country}`)
  }

  return (
    <S.Section>
      <Heading>Learn all about COVID-19 anywhere in the world</Heading>
      <Text>
        Search for confirmed cases, deaths and recoveries from any country in
        the world.
      </Text>
      <S.Form onSubmit={handleSubmit}>
        <Select
          value={fields.country}
          onChange={createChangeHandler('country')}
          name="country"
          label="Country"
          placeholder="Select an country"
        >
          {(countries as Country[])?.map(country => (
            <Select.Option key={country.Slug} value={country.Slug}>
              {country.Country}
            </Select.Option>
          ))}
        </Select>
        <Select
          value={fields.status}
          onChange={createChangeHandler('status')}
          name="status"
          label="Status"
          placeholder="Select an status"
        >
          {statuses.map(status => (
            <Select.Option key={status.value} value={status.value}>
              {status.name}
            </Select.Option>
          ))}
        </Select>
        <S.Footer>
          <Button type="submit">Search</Button>
        </S.Footer>
      </S.Form>
    </S.Section>
  )
}

export default Home
