interface DataLocalityProps {
  postalCode?: string,
  country?:string,
  city: string,
  state: string
}

function setDataStorage (dataLocality: DataLocalityProps) {

  const localy: DataLocalityProps[] = []
  const dataLocalyStorage =  localStorage.getItem("#postalCodeSearch") as string
  const collectionDataLocaly = JSON.parse(dataLocalyStorage) as DataLocalityProps[]

  if(collectionDataLocaly && collectionDataLocaly.length === 5) {
    collectionDataLocaly.pop()
    collectionDataLocaly.unshift(dataLocality)
    
    localStorage.setItem('#postalCodeSearch', JSON.stringify(collectionDataLocaly))

    return;
  }

  const validLocalityData = !collectionDataLocaly ? [dataLocality] : [ ...collectionDataLocaly, dataLocality ]

  localy.push(...validLocalityData)
  localStorage.setItem('#postalCodeSearch', JSON.stringify(localy))

}

export { setDataStorage }
