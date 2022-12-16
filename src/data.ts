import {faker} from "@faker-js/faker"

const dataCreator = () => {
  const data = []
  for (let i = 0; i < 34; i++) {
    data.push({
      id: faker.datatype.number(1000),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      status: Math.random() > 0.5 ? true : false
    })
  }

  return data
}

const data = dataCreator()

export { data }