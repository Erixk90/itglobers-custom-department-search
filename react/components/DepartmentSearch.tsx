import React, { useState } from "react";
import { useQuery } from "react-apollo";
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import DepartmentGroup from "./DepartmentGroup";

import { SearchBar } from "vtex.store-components";


const DepartmentSearch = () => {
   
    const { data, loading} = useQuery(QUERY_VALUE)
    const [slug, setSlug] = useState("")
   // const [categories] =  useState(data?.categories[0]?.children)
   // console.log("mis Datos de query son:", data?.categories[0]?.children)

console.log("mi slug seleccionado es", slug)
    return (
        loading
        ?
        <div>Loading ...</div>
        :
        <>
            <DepartmentGroup
                departments={data?.categories[0]?.children}
                handleSetSlug={setSlug}
            />
        <SearchBar
        customSearchPageUrl={slug}
        placeholder="¿Que deseas buscar en Tu Carulla?"
        displayMode="search-and-clear-buttons"
        />
        </>
    )
}

export default DepartmentSearch