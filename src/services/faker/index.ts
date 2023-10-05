import { FetchedItem } from '@/types/FetchedItem'
import { randomDelay } from '@/utils'
import { AnimalDefinition, faker } from '@faker-js/faker'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const getTitle = (type: keyof AnimalDefinition) => faker.animal[type]()
const getType = () => faker.animal.type()
const getImage = (category: string) => faker.image.urlLoremFlickr({ category })
const getUrl = () => faker.internet.url()
const getText = () => faker.lorem.sentences()

const fakerData: FetchedItem[] = [...new Array(100)].map((_, index) => {
  const type = getType()
  const title = getTitle(type)

  return {
    type,
    title,
    id: index + 1,
    image: getImage(type),
    url: getUrl(),
    description: getText(),
  }
})

const fetchFakerData = async (searchParam: string) => {
  await randomDelay()
  const filteredData = fakerData.filter(
    (item) =>
      item.type.toLowerCase().includes(searchParam.toLowerCase()) ||
      item.title.toLowerCase().includes(searchParam.toLowerCase())
  )

  return filteredData
}

export default fetchFakerData
