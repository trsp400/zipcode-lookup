interface DataLocationProps {
  postalCode?: string,
  country?:string,
  city: string,
  state: string
}

function setDataStorage (dataLocation: DataLocationProps) {
  const localy: DataLocationProps[] = []
  const dataLocalyStorage =  localStorage.getItem("#postalCodeSearch") as string
  const collectionDataLocation = JSON.parse(dataLocalyStorage) as DataLocationProps[]

  if(collectionDataLocation && collectionDataLocation.length === 5) {
    collectionDataLocation.pop()
    collectionDataLocation.unshift(dataLocation)
    
    localStorage.setItem('#postalCodeSearch', JSON.stringify(collectionDataLocation))

    return;
  }

  const validLocalityData = !collectionDataLocation ? [dataLocation] : [ ...collectionDataLocation, dataLocation ]

  localy.push(...validLocalityData)
  localStorage.setItem('#postalCodeSearch', JSON.stringify(localy))

}

export { setDataStorage }
