import React from 'react'
import CollectionCard from './CollectionCard'
import { imgArray } from '@/utils'


const Collection = ({collName, items}: {collName?: string, items?: Array<any> }) => {
  return (
    <div>
        <h1 className='text-center text-3xl font-semibold'>{collName || "Collection Name"}</h1>
        <div className='display-cards py-8'>
            {
                items?.map((itm, i) => <CollectionCard key={i} item={{title: "MyProduct", thumbnail: imgArray[i]}}/>)
            }
        </div>
    </div>
  )
}

export default Collection